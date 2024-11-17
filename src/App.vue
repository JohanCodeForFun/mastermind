<script setup lang="ts">
import { ref } from 'vue'

import TheCounter from './components/TheCounter.vue'
import BlogArticle from './components/BlogArticle.vue'

const posts = ref([
  { id: 1, title: 'Blog #1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  {
    id: 2,
    title: 'Blog #2',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    title: 'Blog #3',
    content:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 4,
    title: 'Blog #4',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 5,
    title: 'Blog #5',
    content:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
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
