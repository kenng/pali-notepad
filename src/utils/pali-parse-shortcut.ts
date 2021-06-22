const paliCodeObj: obj = {
    AA: 'Ā',
    aa: 'ā',
    II: 'Ī',
    ii: 'ī',
    UU: 'Ū',
    uu: 'ū',
    '"N': 'Ṅ',
    '"n': 'ṅ',
    '.M': 'Ṃ',
    '.m': 'ṃ',
    '~N': 'Ñ',
    '~n': 'ñ',
    '.T': 'Ṭ',
    '.t': 'ṭ',
    '.D': 'Ḍ',
    '.d': 'ḍ',
    '.N': 'Ṇ',
    '.n': 'ṇ',
    '.L': 'Ḷ',
    '.l': 'ḷ',
};
export function parsePaliCode(content: string) {
    const lastTwoChars = content.slice(-2);
    const paliCode = paliCodeObj[lastTwoChars];
    console.log(lastTwoChars);
    // console.log(content, lastTwoChars, paliCode);

    if (paliCode) return paliCode;
    // content.slice(0, -2) + paliCode
    // runCmd('undo');
    // runCmd('undo');
    // runCmd('insertText', paliCode);
}
