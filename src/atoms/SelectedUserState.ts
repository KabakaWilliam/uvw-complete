import { Profile } from "@prisma/client";
import { atom } from "recoil";

const SelectedUserState = atom({
  key: "SelectedUserState",
  default: {} as Profile,
});

export default SelectedUserState;
