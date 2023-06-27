class Player {
  protected _score: number = 0;
  protected life: number = 10;
  constructor(readonly first: string, readonly last: string) {}
  static createPlayer(first: string, last: string): Player {
    return new Player(first, last);
  }
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  get score(): number {
    return this._score;
  }
  set score(newScore) {
    if (newScore < 0) {
      throw new Error("score must be positive");
    }
    this._score = newScore;
  }
  loseLife(): number {
    this.life -= 1;
    return this.life;
  }
  scoreUp(): number {
    this._score += 1;
    return this._score;
  }
}

class Admin extends Player {
  #isAdmin: boolean = true;
  adminpowers: string[];
  constructor(first: string, last: string, adminpowers: string[]) {
    super(first, last);
    this.adminpowers = adminpowers;
  }
  static createAdmin(first: string, last: string): Admin {
    return new Admin(first, last, []);
  }
  giveAdminPower(power: string[]) {
    this.adminpowers.push(...power);
  }
}

const player1 = new Player("blue", "steele");
const player2 = new Player("arda", "arslan");

interface Colorful {
  color: string;
  print(): string | number;
}
class Bike implements Colorful {
  constructor(public color: string) {}
  print = (): string => this.color 
}

console.log((new Bike('reds')).print());
