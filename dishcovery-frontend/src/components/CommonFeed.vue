<template>
  <div>
    <div class="feed-toggle">
      <ul class="nav nav-pills outline-active">
        <li v-for="tab in tabs" :key="tab.id" class="nav-item">
          <a
            :class="['nav-link', { active: activeTabId === tab.id }]"
            href="#"
            @click.prevent="onTabChanged(tab.id)"
          >
            {{ tab.title }}
          </a>
        </li>
      </ul>
    </div>

    <common-loader v-if="isLoading" />

    <div v-else>
      <div
        id="top-rated-container"
        v-if="articles.topRated.length && currentPage == 1"
      >
        <div class="title">Most Rated</div>
        <article-preview
          v-for="article in articles.topRated"
          :key="article.slug"
          :article="article"
        />
      </div>

      <article-preview
        v-for="article in articles.others"
        :key="article.slug"
        :article="article"
      />
    </div>

    <div v-if="feed.articlesCount === 0 && !isLoading" class="article-preview">
      No articles are here... yet.
    </div>

    <common-pagination
      v-show="!isLoading"
      :total-items="feed.articlesCount"
      :items-per-page="itemsPerPage"
      :current-page="currentPage"
      @page-changed="onPageChanged"
    />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

import ArticlePreview from "@/components/ArticlePreview.vue";
import CommonLoader from "@/components/CommonLoader.vue";
import CommonPagination from "@/components/CommonPagination.vue";
import { IArticle, IArticleList } from "@/services/realWorldApi/models";
import Article from "@/store/modules/Article";

export interface IFeedTab {
  id: string;
  title: string;
}

@Component({
  components: {
    CommonLoader,
    ArticlePreview,
    CommonPagination
  }
})
export default class CommonFeed extends Vue {
  @Prop({ required: true }) tabs!: IFeedTab[];
  @Prop({ default: "" }) activeTabId!: string;
  @Prop({ default: false }) isLoading!: boolean;
  @Prop({ required: true }) feed!: IArticleList;
  @Prop({ required: true }) itemsPerPage!: number;
  @Prop({ required: true }) currentPage!: number;

  get articlesCache(): Record<string, IArticle> {
    return Article.articlesCache;
  }

  get articles(): {} {
    if (this.currentPage == 1) {
      return {
        topRated: this.feed.articles
          .slice(0, 3)
          .map((article) => this.articlesCache[article.slug] || article),
        others: this.feed.articles
          .slice(3, this.feed.articles.length)
          .map((article) => this.articlesCache[article.slug] || article)
      };
    } else {
      return {
        topRated: [],
        others: this.feed.articles.map(
          (article) => this.articlesCache[article.slug] || article
        )
      };
    }
  }

  @Emit("tab-changed")
  onTabChanged(tabId: string): string {
    return tabId;
  }
  @Emit("page-changed")
  onPageChanged(page: number): number {
    return page;
  }
}
</script>
<style scoped>
#top-rated-container {
  background-color: #f3f3f3;
  margin: 20px 0px;
}
#top-rated-container .title {
  padding: 20px;
}
#top-rated-container .article-preview {
  padding: 1.5rem 1rem;
}
</style>