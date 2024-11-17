<script setup lang="ts">
defineProps(['title', 'content'])
</script>
<template>
  <h3>{{ title }}</h3>
  <p>{{ content }}</p>
</template>
