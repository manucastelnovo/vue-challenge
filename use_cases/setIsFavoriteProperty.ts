import type { Book } from "~/models/book"

export function setIsFavoriteProperty(searchedBookList:Book[],favoriteBook:Book[]) {
    return searchedBookList.map((value: any) => {
        return {
            ...value, isFavorite:
            favoriteBook.some((fav: Book) => fav.key == value.key)
        }
    })
};