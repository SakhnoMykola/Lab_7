//Завдання_№1
function checknumber(arg) {
    if (typeof arg === 'number' && !isNaN(arg)) {
        return arg % 2 === 0 ? 'парне' : 'непарне';
    }
    return '';
}

console.log(checknumber(2));    // Виведе 'парне'
console.log(checknumber(3));    // Виведе 'непарне'
console.log(checknumber("a"));  // Виведе ''

//Завдання_№2
function primenumbers(n) {
    if (n <= 1) { 
        return false;
    }
    if (n <= 3) { 
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function arrayprimenumbers() {
    let array = [];
    let n = 1;
    while (array.length < 5) {
        if (primenumbers(n)) {
            array.push(n);
        }
        n++;
    }
    return array.reduce((sum, array) => sum + array, 0);
}

console.log(arrayprimenumbers()); // Виведе 28

//Завдання_№3
function sumseries(n) {
    let sum = 0;
    let currentNumber = 0;
    for (let i = 1; i <= n; i++) {
        currentNumber = currentNumber * 10 + 1;
        sum += currentNumber;
    }
    return sum;
}

console.log(sumseries(6)); // Виведе 123456

