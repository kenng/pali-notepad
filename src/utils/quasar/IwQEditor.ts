// sample from https://quasar.dev/vue-components/editor#example--paste-event-override
export default class IwQEditor {
    static pasteCapture(refs_editor: any, evt: any) {
        // Let inputs do their thing, so we don't break pasting of links.
        if (evt.target.nodeName === 'INPUT') return;
        let text, onPasteStripFormattingIEPaste;
        evt.preventDefault();

        if (evt.originalEvent && evt.originalEvent.clipboardData.getData) {
            text = evt.originalEvent.clipboardData.getData('text/plain');
            refs_editor.runCmd('insertText', text);
        } else if (evt.clipboardData && evt.clipboardData.getData) {
            text = evt.clipboardData.getData('text/plain');
            refs_editor.runCmd('insertText', text);
        } else if (window.clipboardData && window.clipboardData.getData) {
            if (!onPasteStripFormattingIEPaste) {
                onPasteStripFormattingIEPaste = true;
                refs_editor.runCmd('ms-pasteTextOnly', text);
            }
            onPasteStripFormattingIEPaste = false;
        }
    }
}
