import RealWorldApiInstance from "./RealWorldApiBase";
const PROFILES_PATH = "/profiles";
export const ProfileGet = async (username) => {
    const res = await RealWorldApiInstance.get(`${PROFILES_PATH}/${username}`);
    return res?.data?.profile;
};
export const ProfileFollow = async (username) => {
    const res = await RealWorldApiInstance.post(`${PROFILES_PATH}/${username}/follow`);
    return res?.data?.profile;
};
export const ProfileUnfollow = async (username) => {
    const res = await RealWorldApiInstance.delete(`${PROFILES_PATH}/${username}/follow`);
    return res?.data?.profile;
};
//# sourceMappingURL=RealWorldApiProfile.js.map