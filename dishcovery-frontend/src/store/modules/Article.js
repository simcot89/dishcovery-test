import { __decorate } from "tslib";
import Vue from "vue";
import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { ArticleAddComment, ArticleAddToFavorites, ArticleCreate, ArticleDelete, ArticleDeleteComment, ArticleGet, ArticleGetComments, ArticleGetFeed, ArticleGetList, ArticleRemoveFromFavorites, ArticleUpdate } from "@/services/realWorldApi/RealWorldApiArticle";
import store from "../index";
import Profile from "../modules/Profile";
import modulesNames from "../modulesNames";
let Article = class Article extends VuexModule {
    constructor() {
        super(...arguments);
        this._articlesCache = {};
        this._commentsCache = {};
    }
    get articlesCache() {
        return this._articlesCache;
    }
    get commentsCache() {
        return this._commentsCache;
    }
    addArticleToCache(article) {
        const cachedArticle = this._articlesCache[article.slug];
        if (!cachedArticle || article.updatedAt >= cachedArticle.updatedAt) {
            Vue.set(this._articlesCache, article.slug, article);
        }
        Profile.addProfileToCache(article.author);
    }
    clearArticlesCache() {
        this._articlesCache = {};
    }
    removeArticleFromCache(slug) {
        Vue.delete(this._articlesCache, slug);
    }
    addCommentToCache(payload) {
        if (!this._commentsCache[payload.slug]) {
            Vue.set(this._commentsCache, payload.slug, {});
        }
        Vue.set(this._commentsCache[payload.slug], payload.comment.id, payload.comment);
        Profile.addProfileToCache(payload.comment.author);
    }
    clearCommentsCache() {
        this._commentsCache = {};
    }
    removeCommentFromCache(payload) {
        Vue.delete(this._commentsCache[payload.slug], payload.id);
    }
    addMultipleCommentsToCache(payload) {
        payload.comments.forEach(comment => this.addCommentToCache({ slug: payload.slug, comment }));
    }
    addMultipleArticlesToCache(articles) {
        articles.forEach(article => this.addArticleToCache(article));
    }
    async fetchSingle(slug) {
        const res = await ArticleGet(slug);
        this.addArticleToCache(res);
    }
    async getFeed(params = { limit: 20, offset: 0 }) {
        const res = await ArticleGetFeed(params);
        this.clearArticlesCache();
        this.addMultipleArticlesToCache(res.articles);
        return res;
    }
    async getList(params) {
        const res = await ArticleGetList(params);
        this.clearArticlesCache();
        this.addMultipleArticlesToCache(res.articles);
        return res;
    }
    async create(params) {
        const res = await ArticleCreate(params);
        this.addArticleToCache(res);
        return res;
    }
    async update(payload) {
        const res = await ArticleUpdate(payload.slug, payload.params);
        this.addArticleToCache(res);
        return res;
    }
    async delete(slug) {
        await ArticleDelete(slug);
        this.removeArticleFromCache(slug);
    }
    async addToFavorites(slug) {
        const res = await ArticleAddToFavorites(slug);
        this.addArticleToCache(res);
    }
    async removeFromFavorites(slug) {
        const res = await ArticleRemoveFromFavorites(slug);
        this.addArticleToCache(res);
    }
    async fetchComments(slug) {
        const comments = await ArticleGetComments(slug);
        this.addMultipleCommentsToCache({ slug, comments });
    }
    async addComment(payload) {
        const comment = await ArticleAddComment(payload.slug, payload.params);
        this.addCommentToCache({ slug: payload.slug, comment });
    }
    async deleteComment(payload) {
        await ArticleDeleteComment(payload.slug, payload.commentId);
        this.removeCommentFromCache({ slug: payload.slug, id: payload.commentId });
    }
};
__decorate([
    Mutation
], Article.prototype, "addArticleToCache", null);
__decorate([
    Mutation
], Article.prototype, "clearArticlesCache", null);
__decorate([
    Mutation
], Article.prototype, "removeArticleFromCache", null);
__decorate([
    Mutation
], Article.prototype, "addCommentToCache", null);
__decorate([
    Mutation
], Article.prototype, "clearCommentsCache", null);
__decorate([
    Mutation
], Article.prototype, "removeCommentFromCache", null);
__decorate([
    Action({ rawError: true })
], Article.prototype, "addMultipleCommentsToCache", null);
__decorate([
    Action({ rawError: true })
], Article.prototype, "addMultipleArticlesToCache", null);
__decorate([
    Action({ rawError: true })
], Article.prototype, "fetchSingle", null);
__decorate([
    Action({ rawError: true })
], Article.prototype, "getFeed", null);
__decorate([
    Action({ rawError: true })
], Article.prototype, "getList", null);
__decorate([
    Action({ rawError: true })
], Article.prototype, "create", null);
__decorate([
    Action({ rawError: true })
], Article.prototype, "update", null);
__decorate([
    Action({ rawError: true })
], Article.prototype, "delete", null);
__decorate([
    Action({ rawError: true })
], Article.prototype, "addToFavorites", null);
__decorate([
    Action({ rawError: true })
], Article.prototype, "removeFromFavorites", null);
__decorate([
    Action({ rawError: true })
], Article.prototype, "fetchComments", null);
__decorate([
    Action({ rawError: true })
], Article.prototype, "addComment", null);
__decorate([
    Action({ rawError: true })
], Article.prototype, "deleteComment", null);
Article = __decorate([
    Module({ dynamic: true, namespaced: true, store, name: modulesNames.article })
], Article);
export default getModule(Article);
//# sourceMappingURL=Article.js.map