<template>
    <router-link :to="{ name: 'Home' }">Strona domowa</router-link>&nbsp;
    <router-link :to="{ name: 'View' }">Komponent</router-link>&nbsp;
    <router-view></router-view>
</template>

<script setup>
    import Home from './views/Home.vue'
    import View from './views/View.vue'
</script>

<style>
</style>