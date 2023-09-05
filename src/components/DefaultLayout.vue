<template>
    <div class="bg-gray-100 h-full">
        <HeaderComponent />
        <main>
        <RouterView />
        </main>
    </div>
</template>

<script setup>
    import HeaderComponent from './HeaderComponent.vue';
    import { RouterView } from 'vue-router'
</script>