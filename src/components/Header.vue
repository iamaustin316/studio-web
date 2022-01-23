<template>
  <header class="flex justify-between bg-slate-900 p-4 absolute w-full">
    <h1 class="text-sm text-white">Austin Studio</h1>
    <nav class="flex gap-6 justify-end ">
      <router-link class="text-sm text-sky-50 hover:text-sky-200 transiton-all duration-300" to="/">首頁</router-link>
      <router-link class="text-sm text-sky-50 hover:text-sky-200 transiton-all duration-300" to="/about">關於</router-link>
      <router-link class="text-sm text-sky-50 hover:text-sky-200 transiton-all duration-300" to="/work">作品</router-link>
    </nav>
  </header>
</template>