<script setup lang="ts">
import { ref } from 'vue'

import TheCounter from './components/TheCounter.vue'
import BlogArticle from './components/BlogArticle.vue'

const posts = ref([
  { id: 1, title: 'Blog #1', content: 'Lorem ipsum' },
  { id: 2, title: 'Blog #1', content: 'Lorem ipsum' },
  { id: 3, title: 'Blog #1', content: 'Lorem ipsum' },
])
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
    </div>
  </header>

  <main>
    <TheCounter title="Counter Component" />
    <BlogArticle v-for="post in posts" :key="post.id" :title="post.title" :content="post.content" />
    <!-- <TheWelcome /> -->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
