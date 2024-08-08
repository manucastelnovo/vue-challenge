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
          :key="product.key"
          class="group relative"
        >
          <button
            @click="product.isFavorite ? removeFavorite(product) : addFavorite(product) "
            class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <div v-if="!product.isFavorite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
            <div v-if="product.isFavorite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </button>
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <div v-if="product.cover_edition_key">
              <img
                :src="`https://covers.openlibrary.org/b/olid/${product.cover_edition_key}.jpg`"
                :alt="`${product.title}`"
                class="h-full w-full object-center lg:h-full lg:w-full"
              />
            </div>
            <div
              v-if="!product.cover_edition_key"
              class="w-full h-full flex items-center justify-center"
            >
              <p class="mt-12">Sin imagen</p>
            </div>
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <div v-if="product.author_name">
                  <a :href="product.href">
                    <span aria-hidden="true" class="inset-0" />
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
import { useBooksStore } from "~/store/store.ts";

const store = useBooksStore();

const addFavorite = async (product) => {
  await store.addFavorite(product)
};

const removeFavorite = async (product)=>{
  await store.removeFromFavorites(product)
};

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>
