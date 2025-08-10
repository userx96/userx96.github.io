document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('lyric-textarea');
    const lineNumbers = document.getElementById('line-numbers');
    const syllableCounts = document.getElementById('syllable-counts');
    const clearBtn = document.getElementById('clear-btn');

    const vowels = /[aeıioöuüAEIİOÖUÜ]/g;

    function countSyllables(line) {
        const matches = line.match(vowels);
        return matches ? matches.length : 0;
    }

    function updateUI() {
        const lines = textarea.value.split('\n');
        
        lineNumbers.innerHTML = '';
        syllableCounts.innerHTML = '';

        let lineNumbersHTML = '';
        let syllableCountsHTML = '';

        lines.forEach((line, index) => {
            lineNumbersHTML += `<div>${index + 1}</div>`;
            
            const syllables = countSyllables(line);
            const truncatedLine = line.substring(0, 30) + (line.length > 30 ? '...' : '');

            const lineText = line.trim() === '' ? 'Boş Satır' : truncatedLine;

            const newDiv = document.createElement('div');
            
            const lineTextSpan = document.createElement('span');
            lineTextSpan.className = 'line-text';
            lineTextSpan.textContent = lineText;
            
            const countSpan = document.createElement('span');
            countSpan.className = 'count';
            countSpan.textContent = syllables;
            
            newDiv.appendChild(lineTextSpan);
            newDiv.appendChild(countSpan);
            
            syllableCounts.appendChild(newDiv);
        });

        lineNumbers.innerHTML = lineNumbersHTML;

        // Animate count update
        const counts = syllableCounts.querySelectorAll('.count');
        counts.forEach(count => {
            count.style.animation = 'none';
            count.offsetHeight; // Trigger reflow
            count.style.animation = '';
        });
    }

    function debounce(func, delay = 250) {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }

    const debouncedUpdate = debounce(updateUI);

    textarea.addEventListener('input', debouncedUpdate);

    textarea.addEventListener('scroll', () => {
        lineNumbers.scrollTop = textarea.scrollTop;
        syllableCounts.scrollTop = textarea.scrollTop;
    });

    clearBtn.addEventListener('click', () => {
        textarea.value = '';
        updateUI();
    });

    // Initial UI update for placeholder or existing text
    updateUI();
});
