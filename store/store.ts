import { defineStore } from 'pinia'
import axios from 'axios';
import type { Book } from '~/models/book';

export const useBooksStore = defineStore('books', {
    state: () => ({
        books: [],
        //TODO: ver este tema para que retorne una lista vacia si no tiene localstorage
        favorites: []
    }),

    actions: {
        async searchBooks(query: string, type: string) {
            try {
                const response = await axios.get(`https://openlibrary.org/search.json?${type}=${query}&limit=10`);
                console.log(`https://openlibrary.org/search.json?${type}=${query}`)
                this.books = response.data.docs
                console.log(type)
                console.log(this.books)
            } catch (error) {
                console.error('Error fetching books', error);
            }
        },
        // addFavorite(book:Book){
        //     if(!this.favorites.some((fav: Book) => fav.key === book.key)){
        //         this.favorites.push(book)
        //     }
        // },  
        // removeFromFavorites(book:Book) {
        //     this.favorites = this.favorites.filter((fav: Book) => fav.key !== book.key);
        //     localStorage.setItem('favorites', JSON.stringify(this.favorites));
        //   },
    }
})