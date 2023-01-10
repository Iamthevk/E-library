import React from 'react';
import { Book } from '../lib/book';
import Image from 'next/image';
interface Props {
    book: Book;
}

const BookCard: React.FC<Props> = ({ book }) => {
    console.log({ book })
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden mb-4">
            <img className="w-full h-48 object-cover" width={300} height={300} src={book.coverUrl} alt={book.title} />
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{book.title}</h3>
                <div className="text-gray-600 mb-2">{book.author}</div>
                <p className="text-gray-700 text-sm leading-relaxed">{book.description}</p>
            </div>
        </div>
    );
};

export default BookCard;