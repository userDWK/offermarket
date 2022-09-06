import { atom } from "recoil";

export const IsLoggedIn = atom({
  key: "isLoggedIn",
  default: false,
});

export const UserObj = atom({
  key: "userObj",
  default: {},
});
