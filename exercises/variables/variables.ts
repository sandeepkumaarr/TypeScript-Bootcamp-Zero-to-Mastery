//singlequote and doublequote
const courseName = "typeScript";

//Backticks - Template literals
const courseName2 = `typeScript`;

//Numbers
const amount = 10;
//Decimals
const fraction = 10.002;
//Exponents
const oneThousand = 1e3;
//octal
const allPermissions = 0o777;
//hexByte
const hexByte = 0xff;
//binary
const binary = 0b0100001;
//Big integer
const bigInt = 9000n;

//Booleans
const yes = true;
const no = false;

//Completely missing
const missing = undefined;

//we know its missing
const empty = null;

let someNumber = 0;
someNumber = 1;
someNumber = 2;

//Variable shadowing
{
  let someNumber = 10;
}

//Uninitialized variables
let hello;
