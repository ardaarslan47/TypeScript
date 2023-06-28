export default class User {
    constructor(username, password, type) {
        this.username = username;
        this.password = password;
        this.type = type;
    }
    logout() {
        console.log(`${this.username}: logs out!!!`);
    }
}
export function userHelper() {
    console.log("usserhelper");
}
