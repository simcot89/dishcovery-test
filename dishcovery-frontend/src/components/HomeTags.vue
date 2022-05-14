<template>
  <div v-if="isLoading">
    <common-loader :size="7" />
  </div>
  <div v-else class="sidebar">
    <p>Popular Tags</p>

    <div class="tag-list">
      <a
        v-for="(tag, index) in tags"
        :key="index"
        class="tag-pill tag-default"
        href="#"
        @click.prevent="selectTag(tag.name)"
      >
        {{ tag.name }}
        <span class="articles-count">
          {{ tag.articles_count }}
        </span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";

import CommonLoader from "@/components/CommonLoader.vue";
import Tags from "@/store/modules/Tags";

@Component({
  components: { CommonLoader }
})
export default class HomeTags extends Vue {
  tags: object[] = [];
  isLoading = false;

  async mounted(): Promise<void> {
    await this.getTags();
  }

  async getTags(): Promise<void> {
    this.isLoading = true;
    try {
      this.tags = await Tags.get();
    } finally {
      this.isLoading = false;
    }
  }

  @Emit("tag-selected")
  selectTag(tag: string): string {
    return tag;
  }
}
</script>

<style scoped>
.articles-count {
  background-color: white;
  color: #5cb85c;
  padding: 0 3px;
  border-radius: 50%;
}
</style>