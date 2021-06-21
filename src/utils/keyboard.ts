let isKeyboardAPIEnabled = false;
const LOCKED_KEY = ['KeyA', 'KeyD', 'KeyI', 'KeyM', 'KeyN', 'KeyT', 'KeyU'];

if ('keyboard' in navigator) {
    isKeyboardAPIEnabled = true;
} else {
    console.warn('unable to lock keyboard');
}

export async function lockKeyboard() {
    if (!document.fullscreenElement) {
        console.warn('Certain shortcut keys only effective in full screen');
    }
    if (isKeyboardAPIEnabled) {
        await navigator.keyboard.lock(LOCKED_KEY);
    }
}
