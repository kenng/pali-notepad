<template lang="pug">
q-page#iw-qeditor.iw-page.iw-page-bottom
    form(
        autocorrect="off"
        autocapitalize="off"
        autocomplete="off"
        spellcheck="false"
    )
        q-editor(v-model='content',
            ref='editor',
            :toolbar='toolbar',
            @input='onChanged'
            @keydown='onKeyDown'
            :definitions=`{
                'selectAll': {
                    'tip': "Select all text",
                    'icon': "select_all",
                    'label': "Select All",
                    'handler': selectAll,
                },
                'copy': {
                    'tip': "Copy selected text",
                    'icon': "content_copy",
                    'label': "Copy",
                    'handler': copyToClipboard,
                }
            }`
        )

    FloatingAction(@click='onFabClick')

</template>

<script lang="ts">
import {
    defineComponent,
    onMounted,
    reactive,
    ref,
} from '@vue/composition-api';
import { lockKeyboard } from 'src/utils/keyboard';
import { onKeyDown } from 'src/utils/pali-keyboard';
import IwQEditor from 'src/utils/quasar/IwQEditor';
import FloatingAction from 'src/components/textarea/FloatingAction.vue';
import { LocalStorage, debounce } from 'quasar';

export default defineComponent({
    name: 'HomeIndex',
    components: {
        FloatingAction,
    },
    data() {
        return {
            content: '',
            isEnabledPaliParsing: true,
            storageKey: 'paliContent',
        };
    },
    setup() {
        const editor = ref();
        const toolbar = reactive([
            ['left', 'center', 'right', 'justify'],
            ['bold', 'italic', 'underline', 'strike', 'removeFormat'],
            ['undo', 'redo', 'fullscreen'],
            [
                {
                    label: 'Formatting',
                    icon: 'text_format',
                    list: 'no-icons',
                    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'code'],
                },
                {
                    label: 'Size',
                    icon: 'format_size',
                    fixedLabel: true,
                    fixedIcon: true,
                    list: 'no-icons',
                    options: [
                        'size-1',
                        'size-2',
                        'size-3',
                        'size-4',
                        'size-5',
                        'size-6',
                        'size-7',
                    ],
                },
            ],
            ['selectAll', 'copy'],
            ['viewsource'],
        ]);

        return { toolbar, editor };
    },
    mounted: async function() {
        await lockKeyboard();
        const storedContent = LocalStorage.getItem(this.storageKey);
        if (typeof storedContent === 'string') this.content = storedContent;
    },
    methods: {
        pasteCapture: function(ev: Event) {
            IwQEditor.pasteCapture(this.editor, ev);
        },
        onChanged: function(value: string) {
            debounce(() => this.saveToStorage(value), 5000)();
        },
        saveToStorage: function(value: string) {
            LocalStorage.set(this.storageKey, value);
        },
        onKeyDown: function(event: KeyboardEvent) {
            const res = onKeyDown(event);
            if (res) this.editor.runCmd('insertText', res);
        },
        onFabClick: function(letter: string) {
            if (letter) {
                this.editor.runCmd('insertText', letter);
            }
        },
        selectAll: function() {
            this.editor.runCmd('selectAll');
        },
        copyToClipboard: function() {
            this.editor.runCmd('copy');
        },
    },
});
</script>

<style>
#iw-qeditor {
    margin-bottom: 30vh;
}

#iw-qeditor .q-editor__content {
    resize: both;
}
</style>
