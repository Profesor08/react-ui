import { observable } from "mobx";

class AppStore {
  @observable theme: ThemeType = "light";
  @observable navActive: boolean = false;
}

export default new AppStore();
