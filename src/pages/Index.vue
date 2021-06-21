<template lang="pug">
q-page.iw-page.iw-page-home
    form(
        autocorrect="off"
        autocapitalize="off"
        autocomplete="off"
        spellcheck="false"
    )
        q-editor(v-model='content', ref='editor', v-bind:toolbar='toolbar', @input='keydown'
)
    //- textarea#content(
    //-     ref='textArea'
    //-     name="content"
    //-     cols="30"
    //-     rows="10"
    //-     spellcheck="false"
    //-     placeholder="Start typing Pāli here..."
    //- )
</template>

<script lang="ts">
// import paliTextArea from 'src/utils/pali-text-area';
import {
    defineComponent,
    onMounted,
    reactive,
    ref,
} from '@vue/composition-api';

export default defineComponent({
    name: 'HomeIndex',
    components: {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    data() {
        return {
            content: null,
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
        console.log(editor);
        return { toolbar };
    },
});
</script>
