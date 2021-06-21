import { QVueGlobals } from 'quasar/dist/types/index';

declare module 'vue/types/vue' {
    // Global properties can be declared
    // on the `VueConstructor` interface
    interface VueConstructor {
        $emit(event: string, ...args: any[]): this;
        $q: QVueGlobals;
    }
}

interface ClipboardEvent {
    getData: any;
}

declare global {
    interface Window {
        clipboardData: ClipboardEvent;
    }
}
