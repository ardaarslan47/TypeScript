interface IUser {
  username: string;
  id: number;
}

class User implements IUser {
  username: string;
  id: number;

  constructor(user: IUser) {
    this.username = user.username;
    this.id = user.id;
  }

  then(resolve: (r: IUser) => void) {
    resolve(this);
  }
}

const newUser = new User({
  username: "Arda",
  id: 32,
});

newUser.then((r) => {
  console.log(r.id);
});

interface UserWithPassword extends IUser {
  password: number;
}
