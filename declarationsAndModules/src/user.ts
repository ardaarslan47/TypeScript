import { type Person, type typeOfP } from "./type";

export default class User implements Person {
  constructor(
    public username: string,
    public password: number,
    public type: typeOfP
  ) {}
  logout() {
    console.log(`${this.username}: logs out!!!`);
  }
}

export function userHelper() {
  console.log("usserhelper");
}
