import { Select } from "./modules/select/select";
import "./modules/select/selectStyle.scss";

const select = new Select("#select", {
  placeholder: "Select an element",
  selectedId: "",
  data: [
    { id: "1", value: "React" },
    { id: "2", value: "Angular" },
    { id: "3", value: "Vue" },
    { id: "4", value: "React Native" },
    { id: "5", value: "Next" },
    { id: "6", value: "Nest" },
  ],
  onSelect(item) {
    console.log("Selected item", item);
  },
});

window.s = select;
