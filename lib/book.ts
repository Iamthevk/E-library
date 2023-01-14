export interface Book {
    id: string;
    title: string;
    author: string;
    isbn: string;
    coverUrl: string;
    description: string;
    borrowDate?: Date;
    returnDate?: Date;
  }