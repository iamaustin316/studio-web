<template>
    <div>
        <h1 class="text-3xl font-extrabold text-gray-500">Home</h1>
        <p>store name herer: <span class="pl-4 text-lg">{{ name }}</span></p>
        <input v-model="newName" class="rounded border-dashed border-4 p-2 mr-4" type="text" ref="nameinput">
        <button @click.native="saveName" class="text-2xl">Change Name</button>
    </div>
</template>

<script setup>
    console.log('yoooooooooooooooooo')
    import { useStore } from 'vuex';
    import { computed, ref } from 'vue';
    import { useRouter } from 'vue-router';
    const store = useStore()
    const name = computed(() => {
        return store.state.user.name
    })
    const nameinput = ref(null)
    const router = useRouter()
    const newName = ref('')
    const saveName = () => {
        if(!newName.value) {
            alert("請輸入")
            return false
        }
        store.dispatch('saveName', newName.value)
        newName.value = ""
        router.push('/about')
    }
</script>