const textarea = document.getElementById('lyric-textarea');
const vowels = /[aeıioöuüAEIİOÖUÜ]/g;

function countSyllables(line) {
    const matches = line.match(vowels);
    return matches ? matches.length : 0;
}

function stripSyllableCount(line) {
    return line.replace(/\s*\(\d+\)\s*$/, '');
}

let skipInput = false;

textarea.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        skipInput = true;
    }
});

textarea.addEventListener('input', () => {
    if (skipInput) {
        skipInput = false;  
        return;
    }

    const cursorPos = textarea.selectionStart;
    const originalValue = textarea.value;

    let lines = originalValue.split('\n');

    lines = lines.map(line => {
        const cleanLine = stripSyllableCount(line);
        if (cleanLine.trim() === '') return '';
        const syllables = countSyllables(cleanLine);
        return `${cleanLine} (${syllables})`;
    });

    const originalLines = originalValue.split('\n');
    let pos = 0, lineIndex = 0, charIndex = 0;

    for (let i = 0; i < originalLines.length; i++) {
        const len = originalLines[i].length + 1;
        if (cursorPos <= pos + len - 1) {
            lineIndex = i;
            charIndex = cursorPos - pos;
            break;
        }
        pos += len;
    }

    const cleanLineLength = stripSyllableCount(lines[lineIndex]).length;
    if (charIndex > cleanLineLength) charIndex = cleanLineLength;

    let newCursorPos = 0;
    for (let i = 0; i < lineIndex; i++) {
        newCursorPos += lines[i].length + 1;
    }
    newCursorPos += charIndex;
    textarea.value = lines.join('\n');
    textarea.selectionStart = textarea.selectionEnd = newCursorPos;
});
