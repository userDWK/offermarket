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
    category: "",
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
    category: "",
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

export const IsModal = atom({
  key: "isModal",
  default: false,
});

export const SellData = atom({
  key: "sellData",
  default: {},
});

export const PurchaseData = atom({
  key: "purchaseData",
  default: {},
});

export const IsResisted = atom({
  key: "isResisted",
  default: true,
});

export const HandleTime = atom({
  key: "handleTime",
  default: true,
});
