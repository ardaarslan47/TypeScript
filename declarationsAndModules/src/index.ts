// import _ from "lodash";
import { sample as chooseOne } from "./utils.js";
import User, { userHelper } from "./user.js";

// _.sample<number>([1, 34, 123]);

console.log(chooseOne([1, 2, 3]));

const arda = new User("Arda", 142863521, 'admin');
arda.logout();
userHelper()

// axios
//   .get("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     console.log("heey");
//     // console.log(res.data);
//   })
//   .catch((e) => {
//     console.log("booo", e);
//   });
