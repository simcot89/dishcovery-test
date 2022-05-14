import RealWorldApiInstance from "./RealWorldApiBase";
const USER_PATH = "/user";
const USERS_PATH = "/users";
export const UserLogin = async (params) => {
    const res = await RealWorldApiInstance.post(`${USERS_PATH}/login`, {
        user: params
    });
    return res?.data?.user;
};
export const UserRegister = async (params) => {
    const res = await RealWorldApiInstance.post(USERS_PATH, { user: params });
    return res?.data?.user;
};
export const UserGetCurrent = async () => {
    const res = await RealWorldApiInstance.get(USER_PATH);
    return res?.data?.user;
};
export const UserUpdate = async (params) => {
    const res = await RealWorldApiInstance.put(USER_PATH, { user: params });
    return res?.data?.user;
};
//# sourceMappingURL=RealWorldApiUser.js.map