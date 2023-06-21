var User = /** @class */ (function () {
    function User(user) {
        this.username = user.username;
        this.id = user.id;
    }
    User.prototype.then = function (resolve) {
        resolve(this);
    };
    return User;
}());
var newUser = new User({
    username: "Arda",
    id: 32,
});
newUser.then(function (r) {
    console.log(r.id);
});
