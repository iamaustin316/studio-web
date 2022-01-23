<template>
    <div>
        <p>{{ name }}</p>
        <router-link to="/">home</router-link>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    const store = useStore()
    const name = computed(() => {
        return store.state.user.name
    })
</script>