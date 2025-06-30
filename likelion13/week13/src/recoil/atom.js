import { atom } from "recoil";

export const userNameAtom = atom ({
    key: "userName",
    default: "아기사자",
});

export const emailAtom = atom ({
    key: "email",
    default: "likelion@cau.ac.kr",
});

export const isSubmittedAtom = atom ({
    key: "isSubmitted",
    default: false,
});

export const favoriteSeasonAtom = atom({
    key: "favoriteSeason",
    default: "봄",
});

export const phoneNumAtom = atom({
    key: "phoneNum",
    default: "",
});