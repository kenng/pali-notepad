// const letters = [
//     ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
//     ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
//     ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
//     ['ā', 'ḍ', 'ī', 'ḷ', 'ṁ', 'ṃ', 'ñ', 'ṇ', 'ṭ', 'ū', 'ŋ', 'ṅ'],
// ];

// diacritics
// "Alt Ctrl N" for "n tilde"
export const tilde: obj = {
    a: 'ā',
    A: 'Ā',
    i: 'ī',
    I: 'Ī',
    n: 'ñ',
    N: 'Ñ',
    u: 'ū',
    U: 'Ū',
};

// "Alt N" for "n overdot",
export const overdot: obj = { m: 'ṁ', n: 'ṅ', N: 'Ṅ' };

// "Ctrl N" for "n underdot", etc.
export const underdot: obj = {
    d: 'ḍ',
    D: 'Ḍ',
    l: 'ḷ',
    L: 'Ḷ',
    m: 'ṃ',
    M: 'Ṃ',
    g: 'ŋ',
    n: 'ṇ',
    N: 'Ṇ',
    t: 'ṭ',
    T: 'Ṭ',
};

export function onKeyDown(event: KeyboardEvent) {
    if (event.altKey && event.key != 'Alt') {
        if (event.ctrlKey && event.key != 'Control') {
            if (tilde[event.key]) {
                event.preventDefault();
                console.log(`tilde[event.key]: ${tilde[event.key]}`);
                return tilde[event.key];
            }
        }
        console.log(`overdot[event.key]: ${overdot[event.key]}`);
        if (overdot[event.key]) {
            event.preventDefault();
            return overdot[event.key];
        }
        return;
    } else if (event.ctrlKey && event.key != 'Control') {
        console.log(`underdot[event.key]: ${underdot[event.key]}`);
        if (underdot[event.key]) {
            event.preventDefault();
            return underdot[event.key];
        }
    }
}
