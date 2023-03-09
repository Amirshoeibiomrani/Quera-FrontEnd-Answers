let n = parseInt(readline());

let a = 0;
let b = 1;
let c;

let str = "";

if (n == 1) {
    console.log(a);
}
else {
    str += (a + ", " + b + ", ");
    for (let i = 0; i < n - 2; i++) {
        c = a + b;
        a = b;
        b = c;
        if (i != n - 3) {
            str += (b + ", ");
        }
        else {
            str += b;
        }
    }
    console.log(str);
}

//Second Method
// let n = parseInt(readline());

// let arr = [];

// for (let i = 0; i < n; i++) {
//     if (i == 0) {
//         arr[i] = 0;
//     }
//     else if (i == 1) {
//         arr[i] = 1;
//     }
//     else {
//         arr[i] = arr[i - 2] + arr[i - 1];
//     }
// }

// console.log(arr.join(", "));
