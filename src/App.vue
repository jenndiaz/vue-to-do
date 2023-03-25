<script setup>
import AppHeader from './components/AppHeader.vue'
import ToDoSection from './components/ToDoSection.vue'
import HoneyDew from './components/icons/melon.png'
</script>

<template>
  <header>
    <div class="wrapper">
      <img :src="HoneyDew" />
      <AppHeader msg="Your HoneyDo List!" />
    </div>
  </header>

  <main>
    <ToDoSection />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

img {
  height: 8rem;
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
    flex-direction: column;
    align-items: center;
  }
}
</style>
