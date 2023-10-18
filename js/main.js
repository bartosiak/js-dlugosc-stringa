let stringOne = "Uwielbiam JavaScript";
let stringTwo = "Jestem świetnym programistą";

function longerString(a, b) {
    if (a.length > b.length) {
        return a;
    } else {
        return b;
    }
}

console.log(longerString(stringOne, stringTwo));
