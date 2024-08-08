<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <CenteredCard />
  <ListOfBooks :products="productsToShow" />
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useBooksStore } from "~/store/store.ts";

const store = useBooksStore();
const isInitialLoad = ref(true); 


const productsToShow = computed(() => {
  if (isInitialLoad.value ) {
    return [];
  }
  return store.books;
});

watch(
  () => store.books,
  (newBooks) => {
    if (isInitialLoad.value && newBooks.length > 0) {
      isInitialLoad.value = false; 
    }
  }
);

</script>
