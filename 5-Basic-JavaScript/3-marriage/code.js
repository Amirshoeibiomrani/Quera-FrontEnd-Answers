const A = +readline();
const B = +readline();
const C = +readline();

const isGood = A % 2 == 0 || (B % 2 == 0 && C % 2 == 0);

if (isGood) {
  console.log("good");
} else {
  console.log("bad");
}
