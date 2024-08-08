<template>
  <ListOfBooks :products="products" />
</template>

<script setup>
import { useBooksStore } from "~/store/store.ts";
const store = useBooksStore();

const products = store.favorites;




</script>
