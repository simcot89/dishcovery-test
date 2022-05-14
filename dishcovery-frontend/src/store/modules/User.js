import { __decorate } from "tslib";
import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { UserGetCurrent, UserLogin, UserRegister, UserUpdate } from "@/services/realWorldApi/RealWorldApiUser";
import LocalStorageUtils from "@/utils/LocalStorageUtils";
import store from "../index";
import modulesNames from "../modulesNames";
import { TransformICurrentUserToIUser } from "../transformers/IUserTransformers";
const AUTH_TOKEN_KEY = "realWorldAuthToken";
let User = class User extends VuexModule {
    constructor() {
        super(...arguments);
        this._currentUser = null;
        this._authToken = LocalStorageUtils.getItem(AUTH_TOKEN_KEY);
    }
    get currentUser() {
        return this._currentUser;
    }
    get authToken() {
        return this._authToken || "";
    }
    get isLoggedIn() {
        return !!this._currentUser;
    }
    SET_CURRENT_USER(currentUser) {
        this._currentUser = currentUser;
    }
    SET_AUTH_TOKEN(authToken) {
        if (authToken) {
            this._authToken = authToken;
            LocalStorageUtils.setItem(AUTH_TOKEN_KEY, authToken);
        }
        else {
            this._authToken = undefined;
            LocalStorageUtils.removeItem(AUTH_TOKEN_KEY);
        }
    }
    setFromIUser(user) {
        this.SET_CURRENT_USER(TransformICurrentUserToIUser(user));
        this.SET_AUTH_TOKEN(user.token);
    }
    async fetchCurrentUser() {
        const res = await UserGetCurrent();
        this.setFromIUser(res);
    }
    async login(params) {
        const res = await UserLogin(params);
        this.setFromIUser(res);
    }
    async register(params) {
        const res = await UserRegister(params);
        this.setFromIUser(res);
    }
    async update(params) {
        const res = await UserUpdate(params);
        this.setFromIUser(res);
    }
    logout() {
        this.SET_AUTH_TOKEN(undefined);
        this.SET_CURRENT_USER(undefined);
    }
    async completeAuth() {
        if (this.authToken && !this.isLoggedIn) {
            await this.fetchCurrentUser();
        }
    }
};
__decorate([
    Mutation
], User.prototype, "SET_CURRENT_USER", null);
__decorate([
    Mutation
], User.prototype, "SET_AUTH_TOKEN", null);
__decorate([
    Action({ rawError: true })
], User.prototype, "setFromIUser", null);
__decorate([
    Action({ rawError: true })
], User.prototype, "fetchCurrentUser", null);
__decorate([
    Action({ rawError: true })
], User.prototype, "login", null);
__decorate([
    Action({ rawError: true })
], User.prototype, "register", null);
__decorate([
    Action({ rawError: true })
], User.prototype, "update", null);
__decorate([
    Action({ rawError: true })
], User.prototype, "logout", null);
__decorate([
    Action({ rawError: true })
], User.prototype, "completeAuth", null);
User = __decorate([
    Module({ dynamic: true, namespaced: true, store, name: modulesNames.user })
], User);
export default getModule(User);
//# sourceMappingURL=User.js.map