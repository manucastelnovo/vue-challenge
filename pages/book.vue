<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="overflow-hidden rounded-lg bg-white shadow flex justify-center">
        <div class="px-4 py-5 sm:p-6 w-1/4">

            <div
                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <div v-if="product.key">
                    <img :src="`https://covers.openlibrary.org/b/olid/${product.key}.jpg`" :alt="`${product.title}`"
                        class="h-full w-full object-center lg:h-full lg:w-full" />
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
                                <span aria-hidden="true" class="inset-0" />
                                {{ product.author }}
                            </a>
                        </div>
                    </h3>

                </div>
                <p class="text-sm font-medium text-gray-900">{{ product.title }}</p>
                <p class="text-sm font-medium text-gray-900">{{ product.author[0] }}</p>

            </div>




            <!-- Content goes here -->
        </div>
    </div>


</template>

<script setup>
import { useBooksStore } from "~/store/store.ts";
import { useRoute } from 'vue-router';
const store = useBooksStore();



const route = useRoute();
const product = route.query;
console.log(product)
</script>