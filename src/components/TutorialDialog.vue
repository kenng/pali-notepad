<template lang="pug">
q-dialog.iw-dialog-tutorial(ref="dialog", @hide="onDialogHide", width='80vw')
    q-card.q-dialog-plugin
        q-card-section
            .text-h5 Usage Guide
            q-separator

        q-card-section
            .text-h6 Keyboard Shortcut
            .text-subtitle NOTE: some shortcut key only work in full screen mode
                q-icon.iw-size-200.cursor-pointer(name='fullscreen', @click='toggleFullscreen')
                span , for example &nbsp;
                kbd Ctrl
                span +
                kbd N
                span will not work when browser is not in full screen mode.

            .text-bold.q-mt-md Tilde
            div
                kbd Ctrl
                span +
                kbd Alt
                span +
                kbd &lt;letter&gt;
            div For example to insert letter &nbsp;
                span.iw-size-125.text-italic ñ
                span , use &nbsp;
                kbd Ctrl
                span +
                kbd Alt
                span +
                kbd n

            .text-bold.q-mt-md Overdot
            div
                kbd Alt
                span +
                kbd &lt;letter&gt;
            div For example to insert letter &nbsp;
                span.iw-size-125.text-italic ṅ
                span , use &nbsp;
                kbd Alt
                span +
                kbd n

            .text-bold.q-mt-md Underdot
            div
                kbd Ctrl
                span +
                kbd &lt;letter&gt;
            div For example to insert letter &nbsp;
                span.iw-size-125.text-italic ṭ
                span , use &nbsp;
                kbd Ctrl
                span +
                kbd t


        q-separator(inset)

        q-card-actions(align="center")
            q-btn(color="primary", label="OK", @click="onOKClick").
</template>

<script>
import toggleFullscreen from 'src/utils/fullscreen';

export default {
    props: {
        // ...your custom props
    },

    emits: [
        // REQUIRED
        'ok',
        'hide',
    ],

    methods: {
        toggleFullscreen: async function() {
            await toggleFullscreen();
        },
        // following method is REQUIRED
        // (don't change its name --> "show")
        show() {
            this.$refs.dialog.show();
        },

        // following method is REQUIRED
        // (don't change its name --> "hide")
        hide() {
            this.$refs.dialog.hide();
        },

        onDialogHide() {
            // required to be emitted
            // when QDialog emits "hide" event
            this.$emit('hide');
        },

        onOKClick() {
            // on OK, it is REQUIRED to
            // emit "ok" event (with optional payload)
            // before hiding the QDialog
            this.$emit('ok');
            // or with payload: this.$emit('ok', { ... })

            // then hiding dialog
            this.hide();
        },

        onCancelClick() {
            // we just need to hide the dialog
            this.hide();
        },
    },
};
</script>

<style>
.iw-dialog-tutorial .q-dialog-plugin.q-card {
    width: 60vw;
    max-width: 100vw;
}

@media screen and (max-width: 599px) {
    .iw-dialog-tutorial .q-dialog-plugin.q-card {
        width: 90vw;
    }
}
</style>
