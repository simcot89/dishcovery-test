import { __decorate } from "tslib";
import { Action, getModule, Module, VuexModule } from "vuex-module-decorators";
import { TagsGet } from "@/services/realWorldApi/RealWorldApiTags";
import store from "../index";
import modulesNames from "../modulesNames";
let Tags = class Tags extends VuexModule {
    async get() {
        return await TagsGet();
    }
};
__decorate([
    Action({ rawError: true })
], Tags.prototype, "get", null);
Tags = __decorate([
    Module({ dynamic: true, namespaced: true, store, name: modulesNames.tags })
], Tags);
export default getModule(Tags);
//# sourceMappingURL=Tags.js.map