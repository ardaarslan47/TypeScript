"use strict";
var _Admin_isAdmin;
class Player {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this._score = 0;
        this.life = 10;
    }
    static createPlayer(first, last) {
        return new Player(first, last);
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("score must be positive");
        }
        this._score = newScore;
    }
    loseLife() {
        this.life -= 1;
        return this.life;
    }
    scoreUp() {
        this._score += 1;
        return this._score;
    }
}
class Admin extends Player {
    constructor(first, last, adminpowers) {
        super(first, last);
        _Admin_isAdmin.set(this, true);
        this.adminpowers = adminpowers;
    }
    static createAdmin(first, last) {
        return new Admin(first, last, []);
    }
    giveAdminPower(power) {
        this.adminpowers.push(...power);
    }
}
_Admin_isAdmin = new WeakMap();
const player1 = new Player("blue", "steele");
const player2 = new Player("arda", "arslan");
class Bike {
    constructor(color) {
        this.color = color;
        this.print = () => this.color;
    }
}
console.log((new Bike('reds')).print());
