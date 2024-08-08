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
            <div v-if="product.cover_edition_key">
              <img
                :src="`https://covers.openlibrary.org/b/olid/${product.cover_edition_key}.jpg`"
                :alt="`${product.title}`"
                class="h-full w-full  object-center lg:h-full lg:w-full"
              />
            </div>
            <div v-if="!product.cover_edition_key" class="w-full h-full flex items-center justify-center">
              <p class="mt-12">Sin imagen</p>
            </div>
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <div v-if="product.author_name">
                  <a :href="product.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.author_name[0] }}
                  </a>
                </div>
              </h3>
              <div v-if="product.subject">
                <p class="mt-1 text-sm text-gray-500">
                  {{ product.subject[0] }}
                </p>
              </div>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// Definir la prop `products`
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>
