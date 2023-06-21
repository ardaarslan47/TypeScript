var goodRes = [200, "OK!"];
var Responses;
(function (Responses) {
    Responses[Responses["OK"] = 200] = "OK";
    Responses[Responses["UNDEFINED"] = 401] = "UNDEFINED";
    Responses[Responses["NOTFOUND"] = 404] = "NOTFOUND";
    Responses[Responses["SERVERERROR"] = 500] = "SERVERERROR";
})(Responses || (Responses = {}));
var myStatus = function (status) {
    var Status = {
        code: status,
        msg: "HEY",
        then: function (onFulfilled) {
            onFulfilled([Status.code, Status.msg]);
        },
    };
    return Status;
};
myStatus(Responses.OK).then(function (r) { return console.log(r[0], r[1]); });
// myStatus(500).then((r: object) => console.log(r));
