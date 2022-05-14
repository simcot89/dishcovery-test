import Lockr from "lockr";
const LOCAL_STORAGE_PREFIX = "__vtra_";
Lockr.prefix = LOCAL_STORAGE_PREFIX;
const setItem = (key, value) => {
    Lockr.set(key, value);
};
const getItem = (key) => {
    return Lockr.get(key);
};
const removeItem = (key) => {
    Lockr.rm(key);
};
export default {
    setItem,
    getItem,
    removeItem
};
//# sourceMappingURL=LocalStorageUtils.js.map