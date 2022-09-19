import { atom } from "recoil";

export const IsLoggedIn = atom({
  key: "isLoggedIn",
  default: false,
});

export const UserObj = atom({
  key: "userObj",
  default: {},
});

export const Message = atom({
  key: "message",
  default: {
    message: "",
    type: "",
    page: "/",
  },
});

export const SellItem = atom({
  key: "sellItem",
  default: {
    // category: "",
    // productName: "",
    // salePrice: 0,
    // sellPrice: 0,
    // img: "",
    // resistDate: null,
  },
});

export const PurchaseItem = atom({
  key: "purchaseItem",
  default: {
    // category: "",
    // productName: "",
    // purchasePrice: 0,
    // img: "",
    // resistDate: null,
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

export const DisSellPage = atom({
  key: "disSellPage",
  default: 1,
});

export const DisPurchasePage = atom({
  key: "disPurchasePage",
  default: 1,
});

export const PageLine = atom({
  key: "pageLine",
  default: 1,
});

export const SelectProduct = atom({
  key: "selectProduct",
  default: {},
});
