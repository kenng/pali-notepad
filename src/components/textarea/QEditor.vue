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
            :readonly='isReadonly'
            :toolbar='toolbar',
            @input='onChanged'
            @keydown='onKeyDown'
            min-height='90vh',
            :definitions=`{
                'selectAll': {
                    'tip': "Select all text",
                    'icon': mdiSelectAll,
                    'label': "Select All",
                    'handler': selectAll,
                },
                'copy': {
                    'tip': "Copy selected text",
                    'icon': mdiContentCopy,
                    'label': "Copy",
                    'handler': copyToClipboard,
                },
                'readonly': {
                    'tip': "Toggle readonly mode",
                    'icon': mdiPencilOff,
                    'label': "Readonly",
                    'handler': toggleReadonly,
                },
                'editMode': {
                    'tip': "Switch back to Edit Mode",
                    'icon': mdiPencil,
                    'label': "Back to Edit Mode",
                    'handler': toggleReadonly,
                },
            }`
        )

    FloatingAction(@click='onFabClick')

</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { lockKeyboard } from 'src/utils/keyboard';
import { onKeyDown } from 'src/utils/pali-keyboard';
// import IwQEditor from 'src/utils/quasar/IwQEditor';
import FloatingAction from 'src/components/textarea/FloatingAction.vue';
import { LocalStorage, debounce } from 'quasar';
import {
    mdiContentCopy,
    mdiSelectAll,
    mdiPencilOff,
    mdiPencil,
} from '@quasar/extras/mdi-v5';

export default defineComponent({
    name: 'HomeIndex',
    components: {
        FloatingAction,
    },
    data() {
        return {
            content: '',
            toolbar: null as any,
            isEnabledPaliParsing: true,
            storageKey: 'paliContent',
            isReadonly: false,
            defaultToolbar: [] as any,
        };
    },
    setup() {
        const editor = ref();
        return {
            editor,
            mdiContentCopy,
            mdiSelectAll,
            mdiPencilOff,
            mdiPencil,
        };
    },
    mounted: async function() {
        await lockKeyboard();
        this.init();
        this.toolbar = this.defaultToolbar;
        const storedContent = LocalStorage.getItem(this.storageKey);
        if (typeof storedContent === 'string') this.content = storedContent;
        this.editor.focus();
    },
    methods: {
        // pasteCapture: function(ev: Event) {
        //     IwQEditor.pasteCapture(this.editor, ev);
        // },
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
        toggleReadonly: function() {
            this.isReadonly = !this.isReadonly;
            this.toolbar = this.isReadonly
                ? Object.assign([], [['editMode']])
                : Object.assign([], this.defaultToolbar);
        },
        init: function() {
            this.defaultToolbar = [
                ['left', 'center', 'right', 'justify'],
                ['bold', 'italic', 'underline', 'strike', 'removeFormat'],
                ['undo', 'redo', 'fullscreen', 'viewsource'],
                [
                    {
                        label: this.$q.lang.editor.formatting,
                        icon: this.$q.iconSet.editor.formatting,
                        list: 'no-icons',
                        options: [
                            'h1',
                            'h2',
                            'h3',
                            'h4',
                            'h5',
                            'h6',
                            'p',
                            'code',
                        ],
                    },
                    {
                        label: this.$q.lang.editor.fontSize,
                        icon: this.$q.iconSet.editor.fontSize,
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
                    'selectAll',
                    'copy',
                    'readonly',
                ],
            ];
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
