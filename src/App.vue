<script setup>
  import Header from '@/components/Header.vue'
</script>

<template>
  <div class="h-screen overflow-y-auto bg-slate-900">
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="moveUp" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
  .moveUp-enter-active,
  .moveUp-leave-active {
    transition: opacity 500ms, transform 500ms;
  }
  .moveUp-enter,
  .moveUp-leave-to {
    opacity: 0;
    transform: translateX(-30%);
  }
  .moveUp-enter-active {
    animation: fadeIn 500ms ease-in;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .moveUp-leave-active {
    animation: fadeOut 500ms ease-in;
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
