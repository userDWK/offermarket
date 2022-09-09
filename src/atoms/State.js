import { atom } from "recoil";

export const IsLoggedIn = atom({
  key: "isLoggedIn",
  default: false,
});

export const UserObj = atom({
  key: "userObj",
  default: {},
});

export const SellItem = atom({
  key: "sellItem",
  default: {
    productName: "",
    salePrice: 0,
    sellPrice: 0,
    img: "",
    resistdate: null,
  },
});

export const PurchaseItem = atom({
  key: "purchaseItem",
  default: {
    productName: "",
    purchasePrice: 0,
    img: "",
    resistdate: null,
  },
});

export const Today = atom({
  key: "todayTime",
  default: "",
});
