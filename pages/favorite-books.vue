<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        List of books
      </h2>

      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative"
        >
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              :src="`https://covers.openlibrary.org/a/olid/${product.key}.jpg`"
              :alt="product.imageAlt"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.author_name }} primero
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.title }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.subject }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBooksStore } from "~/store/store.ts";
const store = useBooksStore();

const query = ref("The Lord of the Rings");
const searchBooks = async () => {
  await store.searchBooks(query.value);
};

const addToFavorites = (book) => {
  store.addToFavorites(book);
};
searchBooks();
const products = store.books;
const totalBooksFound = store.totalBooksFound;
console.log(products[1]);




// const products = [
//   {
//     id: 1,
//     name: 'Basic Tee',
//     href: '#',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'Black',
//   },
//   // More products...
// ]
</script>
