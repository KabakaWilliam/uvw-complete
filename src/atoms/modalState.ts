import { atom } from "recoil";

const CurrentModalState = atom({
  key: "CurrentModalState",
  default: "hidden" as CurrentModaStates,
});

export default CurrentModalState;

declare global {
  type CurrentModaStates = "profileModal" | "hidden";
}
