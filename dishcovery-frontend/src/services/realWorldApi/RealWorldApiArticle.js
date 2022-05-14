import RealWorldApiInstance from "./RealWorldApiBase";
const ARTICLES_PATH = "/articles";
export const ArticleGetList = async (params) => {
    const res = await RealWorldApiInstance.get(ARTICLES_PATH, { params });
    return res?.data;
};
export const ArticleGetFeed = async (params) => {
    const res = await RealWorldApiInstance.get(`${ARTICLES_PATH}/feed`, {
        params
    });
    return res?.data;
};
export const ArticleGet = async (slug) => {
    const res = await RealWorldApiInstance.get(`${ARTICLES_PATH}/${slug}`);
    return res?.data?.article;
};
export const ArticleCreate = async (params) => {
    const res = await RealWorldApiInstance.post(ARTICLES_PATH, {
        article: params
    });
    return res?.data?.article;
};
export const ArticleUpdate = async (slug, params) => {
    const res = await RealWorldApiInstance.put(`${ARTICLES_PATH}/${slug}`, {
        article: params
    });
    return res?.data?.article;
};
export const ArticleDelete = async (slug) => {
    const res = await RealWorldApiInstance.delete(`${ARTICLES_PATH}/${slug}`);
    return res?.data?.article;
};
export const ArticleAddComment = async (slug, params) => {
    const res = await RealWorldApiInstance.post(`${ARTICLES_PATH}/${slug}/comments`, {
        comment: params
    });
    return res?.data?.comment;
};
export const ArticleGetComments = async (slug) => {
    const res = await RealWorldApiInstance.get(`${ARTICLES_PATH}/${slug}/comments`);
    return res?.data?.comments;
};
export const ArticleDeleteComment = async (slug, commentId) => {
    await RealWorldApiInstance.delete(`${ARTICLES_PATH}/${slug}/comments/${commentId}`);
};
export const ArticleAddToFavorites = async (slug) => {
    const res = await RealWorldApiInstance.post(`${ARTICLES_PATH}/${slug}/favorite`);
    return res?.data?.article;
};
export const ArticleRemoveFromFavorites = async (slug) => {
    const res = await RealWorldApiInstance.delete(`${ARTICLES_PATH}/${slug}/favorite`);
    return res?.data?.article;
};
//# sourceMappingURL=RealWorldApiArticle.js.map