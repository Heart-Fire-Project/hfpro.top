---
layout: page
title: 浏览作品
---

<script setup>
import { data } from "../.vitepress/maps.zhHans.data.ts";
const maps = [...data].reverse();

import { computed } from 'vue'
const classes = computed(() => ["maps", `count-${maps.length}`])

import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import VPBadge from 'vitepress/dist/client/theme-default/components/VPBadge.vue';
</script>

<div :class="classes">
  <div class="container">
    <article v-for="(map, index) in maps" :key="index" class="map">
      <div class="info">
        <VPLink :href="map.url">
          <img class="image" :src="map.frontmatter.img" :alt="map.frontmatter.title" />
          <div class="data">
            <h1 v-if="map.frontmatter.title" class="name"> 
              {{ map.frontmatter.title }}
            </h1>
            <VPLink :href="map.frontmatter.profile" no-icon>
              <i v-if="map.frontmatter.author" class="author">
                由 {{ map.frontmatter.author }} 创作
              </i>
            </VPLink>
            <br />
            <VPBadge v-if="map.frontmatter.version" type="danger" :text="map.frontmatter.version" />
            <VPLink :href="map.url+'#respack'">
              <VPBadge v-if="map.frontmatter.respack" type="warning" :text="map.frontmatter.respack" />
            </VPLink>
            <VPBadge v-if="map.frontmatter.referer" type="tip" :text="map.frontmatter.referer" />
            <p class="desc" v-html="map.frontmatter.desc" />
          </div>
        </VPLink>
      </div>
      <div class="sp">
        <VPLink v-if="map.frontmatter.download" class="sp-link" :href="map.frontmatter.download" no-icon>
          <span class="vpi-arrow-down sp-icon" />下载
        </VPLink>
      </div>
    </article>
  </div>
</div>

<style scoped>
@media (min-width: 375px) {
  .maps .container {
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  }
}

.maps.count-1 .container {
  max-width: 368px;
}
.maps.count-2 .container {
  max-width: calc(368px * 2 + 24px);
}

.maps .container {
  display: grid;
  margin: 0 auto;
  max-width: calc(368px * 3 + 36px);
}

.map {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 32px;
}

.info {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  flex-grow: 1;
  background-color: var(--vp-c-bg-soft);
}

.data {
  margin: 24px;
  text-align: left;
}

.image {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  position: relative;
  width: 100%;
  top: 0;
  right: auto;
  bottom: 0;
  left: auto;
  object-fit: cover;
}

.name {
  letter-spacing: 0.15px;
  line-height: 28px;
  font-size: 20px;
  margin: 0;
  font-weight: 600;
}

.author {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.desc {
  padding-top: 8px;
  max-width: 288px;
  font-size: 16px;
  margin: 0 auto;
}

.desc :deep(a) {
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration-style: dotted;
  transition: color 0.25s;
}

.sp-link {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-sponsor);
  background-color: var(--vp-c-bg-soft);
  transition: color 0.25s, background-color 0.25s;
}

.sp .sp-link.link:hover,
.sp .sp-link.link:focus {
  outline: none;
  color: var(--vp-c-white);
  background-color: var(--vp-c-sponsor);
}

.sp-icon {
  margin-right: 8px;
  font-size: 16px;
}
</style>
