import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const themeColor = atom({
  key: "themeColor",
  default: null,
  effects_UNSTABLE: [persistAtom]
});
