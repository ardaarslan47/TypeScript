type HTTPResponse = [number, string?];
const goodRes: HTTPResponse = [200, "OK!"];

enum Responses {
  OK = 200,
  UNDEFINED = 401,
  NOTFOUND = 404,
  SERVERERROR = 500,
}

const myStatus = (status: Responses) => {
  const Status = {
    code: status,
    msg: "HEY",
    then: function (onFulfilled: Function) {
      onFulfilled( [Status.code, Status.msg] );
    },
  };
  return Status;
};

myStatus(Responses.OK).then((r: object) => console.log(r[0], r[1]));
// myStatus(500).then((r: object) => console.log(r));
