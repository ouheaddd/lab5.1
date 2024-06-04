function checkBrackets(str) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of str) {
        if (brackets[char]) {
            stack.push(brackets[char]);
        } else if (Object.values(brackets).includes(char)) {
            if (stack.pop() !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

const examples = [
    'function someFn() { return [1, 2, 3]; }', // правильный код
    'function anotherFn() { return [1, 2, 3; }', // неправильный код
    'if (a > b) { console.log(a); } else { console.log(b); }', // правильный код
    'for (let i = 0; i < 10; i++) { console.log(i); }', // правильный код
    'while (true { console.log("loop"); }' // неправильный код
];

examples.forEach(example => {
    console.log(`${example}: ${checkBrackets(example)}`);
});

document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.getElementById('10');
    examples.forEach(example => {
        const result = checkBrackets(example);
        outputDiv.innerHTML += `<p>${example}: ${result}</p>`;
    });
});
