import RealWorldApiInstance from "./RealWorldApiBase";
const TAGS_PATH = "/tags";
export const TagsGet = async () => {
    const res = await RealWorldApiInstance.get(TAGS_PATH);
    return res?.data?.tags;
};
//# sourceMappingURL=RealWorldApiTags.js.map