<template>
  <NuxtLayout>
  <AppHeader/>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"

const pinia = createPinia();

pinia.use(piniaPluginPersistedState)
</script>