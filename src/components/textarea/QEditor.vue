<template lang="pug">
q-page.iw-page.iw-page-home
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

export default defineComponent({
    name: 'HomeIndex',
    components: {
        FloatingAction,
    },
    data() {
        return {
            content: '',
            isEnabledPaliParsing: true,
        };
    },
    setup() {
        const editor = ref();
        const toolbar = reactive([
            ['left', 'center', 'right', 'justify'],
            ['bold', 'italic', 'underline', 'strike'],
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
        ]);

        onMounted(async function() {
            await lockKeyboard();
        });
        return { toolbar, editor };
    },
    methods: {
        pasteCapture: function(ev: Event) {
            IwQEditor.pasteCapture(this.editor, ev);
        },
        onChanged: function(value: string) {},
        onKeyDown: function(event: KeyboardEvent) {
            const res = onKeyDown(event);
            if (res) this.editor.runCmd('insertText', res);
        },
        onFabClick: function(letter: string) {
            if (letter) this.editor.runCmd('insertText', letter);
        },
    },
});
</script>
