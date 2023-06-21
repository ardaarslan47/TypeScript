interface IUser {
    name: string,
    id: number
}

const printId = (user: IUser): void => {
    console.log(user.id);
}