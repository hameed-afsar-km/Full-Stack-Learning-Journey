function showVar() {
    let x = 10;
    const y = 20;
    document.getElementById("var-output").innerText =
        `let x = ${x}, const y = ${y}`;
}

function showType() {
    let value = "Hello";
    document.getElementById("var-output").innerText =
        `typeof "Hello" → ${typeof value}`;
}

function normalFn() {
    document.getElementById("fn-output").innerText =
        "Normal function executed";
}

const arrowFn = () => {
    document.getElementById("fn-output").innerText =
        "Arrow function executed";
};

const numbers = [1, 2, 3, 4, 5];

function mapExample() {
    const result = numbers.map(n => n * 2);
    document.getElementById("array-output").innerText =
        `map → ${result}`;
}

function filterExample() {
    const result = numbers.filter(n => n > 2);
    document.getElementById("array-output").innerText =
        `filter → ${result}`;
}

function reduceExample() {
    const result = numbers.reduce((a, b) => a + b, 0);
    document.getElementById("array-output").innerText =
        `reduce → ${result}`;
}

function objectExample() {
    const user = {
        name: "JS Dev",
        greet() {
            return `Hello, ${this.name}`;
        }
    };
    document.getElementById("object-output").innerText =
        user.greet();
}

function destructure() {
    const user = { name: "Alex", age: 25 };
    const { name, age } = user;
    document.getElementById("object-output").innerText =
        `Name: ${name}, Age: ${age}`;
}

function scopeTest() {
    let a = "Outer";
    {
        let a = "Inner";
        document.getElementById("scope-output").innerText =
            `Block scope: ${a}`;
    }
}

function closureTest() {
    function counter() {
        let count = 0;
        return function () {
            count++;
            return count;
        };
    }
    const c = counter();
    document.getElementById("scope-output").innerText =
        `Closure count: ${c()}`;
}

document.getElementById("domBtn").addEventListener("click", () => {
    document.getElementById("dom-output").innerText =
        "DOM event handled!";
});
