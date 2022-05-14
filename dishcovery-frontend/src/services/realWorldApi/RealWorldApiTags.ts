import RealWorldApiInstance from "./RealWorldApiBase";

const TAGS_PATH = "/tags";

export const TagsGet = async (): Promise<object[]> => {
  const res = await RealWorldApiInstance.get(TAGS_PATH);
  return res?.data?.tags as object[];
};
