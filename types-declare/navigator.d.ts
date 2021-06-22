interface Keyboard {
    lock(keycode: Array<string>): Promise<void>;
}

interface Navigator {
    keyboard: Keyboard;
}

interface ClipboardEvent {
    getData: any;
}

interface obj {
    [letter: string]: string;
}
