<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CenteredCard />
  <ListOfBooks :products="products" />
</template>

<script setup>
import { computed } from "vue";
import { ref } from "vue";
import { useBooksStore } from "~/store/store.ts";
const store = useBooksStore();
const products = computed(() => store.books);
</script>
