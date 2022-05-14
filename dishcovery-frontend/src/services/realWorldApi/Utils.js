import { capitalizeFirstLetter } from "@/utils/StringUtils";
export const transformErrors = (rawErrors) => {
    const errors = Object.entries(rawErrors || { unknown: ["Unknown error occurred"] });
    const res = [];
    errors.forEach(entry => {
        const key = entry[0];
        const value = entry[1];
        value.forEach(error => {
            res.push(`${capitalizeFirstLetter(key)} ${error}`);
        });
    });
    return res;
};
//# sourceMappingURL=Utils.js.map