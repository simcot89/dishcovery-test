import { __decorate } from "tslib";
import Vue from "vue";
import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { ProfileFollow, ProfileGet, ProfileUnfollow } from "@/services/realWorldApi/RealWorldApiProfile";
import store from "../index";
import modulesNames from "../modulesNames";
let Profile = class Profile extends VuexModule {
    constructor() {
        super(...arguments);
        this._profilesCache = {};
    }
    get profilesCache() {
        return this._profilesCache;
    }
    addProfileToCache(profile) {
        Vue.set(this._profilesCache, profile.username, profile);
    }
    async get(username) {
        const res = await ProfileGet(username);
        this.addProfileToCache(res);
        return res;
    }
    async follow(username) {
        const res = await ProfileFollow(username);
        this.addProfileToCache(res);
        return res;
    }
    async unFollow(username) {
        const res = await ProfileUnfollow(username);
        this.addProfileToCache(res);
        return res;
    }
};
__decorate([
    Mutation
], Profile.prototype, "addProfileToCache", null);
__decorate([
    Action({ rawError: true })
], Profile.prototype, "get", null);
__decorate([
    Action({ rawError: true })
], Profile.prototype, "follow", null);
__decorate([
    Action({ rawError: true })
], Profile.prototype, "unFollow", null);
Profile = __decorate([
    Module({ dynamic: true, namespaced: true, store, name: modulesNames.profile })
], Profile);
export default getModule(Profile);
//# sourceMappingURL=Profile.js.map