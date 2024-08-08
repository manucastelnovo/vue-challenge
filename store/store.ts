import { defineStore } from 'pinia'
import axios from 'axios';
import type { Book } from '~/models/book';
import { setIsFavoriteProperty } from '~/use_cases/setIsFavoriteProperty';

const API_URL = "https://openlibrary.org/search.json"

export const useBooksStore = defineStore('books', {
    
    state: () => {
        return {
            books: [] as Book[],
            favorites: [] as Book[]
        }
    },
    actions: {
        async searchBooks(query: string, type: string) {
            try {
                const response = await axios.get(`${API_URL}?${type}=${query}&limit=10`);
                this.books = setIsFavoriteProperty(response.data.docs,this.favorites)
            } catch (error) {
                console.error('Error fetching books', error);
            }
        },
        addFavorite(book: Book) {
            if (!this.favorites.some((fav: Book) => fav.key === book.key)) {
                book.isFavorite = true;
                this.favorites = [...this.favorites, book]
            }
        },
        removeFromFavorites(book:Book) {
            this.favorites = this.favorites.filter((fav: Book) => fav.key !== book.key);
            this.books = setIsFavoriteProperty(this.books,this.favorites)
          },
    },
    persist: {
        storage: persistedState.localStorage,
      },

})