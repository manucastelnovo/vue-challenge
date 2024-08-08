export interface Book {
  cover_i?: number; // El "?" indica que es opcional
  has_fulltext: boolean;
  edition_count: number;
  title: string;
  author_name: string[];
  first_publish_year: number;
  key: string;
  ia?: string[]; // Opcional
  author_key: string[];
  public_scan_b: boolean;
  isFavorite:boolean;
}
