import { Extras } from "../Types/types";
import { UPPERCASE, LOWERCASE, NUMBERS, SYMBOLS } from "./const";
const upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const downLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const symbols = "!@#$%^&*()";

export const passwordGenerator = (
  length: number,
  strength: number,
  extras: Extras[]
) => {
  if (extras.length === 0) {
    return "";
  }

  let newPass: string = "";
  let passChar: string = extras.reduce((acc, cur, idx) => {
    if (cur.value === UPPERCASE) {
      acc += upLetters;
    }
    if (cur.value === LOWERCASE) {
      acc += downLetters;
    }
    if (cur.value === SYMBOLS) {
      acc += symbols;
    }
    if (cur.value === NUMBERS) {
      acc += numbers;
    }
    return acc;
  }, "");

  for (let i = 0; i < length; i++) {
    let randomIdx = Math.floor(Math.random() * passChar.length);

    newPass += passChar[randomIdx];
  }

  return newPass;
};
