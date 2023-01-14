import React from 'react';
import { Book } from '../lib/book';
import Image from 'next/image';
interface Props {
    book: Book;
}

const BookCard: React.FC<Props> = ({ book }) => {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden mb-8  ">
            <img className="w-1/4 h-48 object-cover mx-auto " width={300} height={300} src={book.coverUrl} alt={book.title} />
            <div className="p-4 text-center ">
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-lg">{book.title}</h3>
                <div className="text-gray-600 mb-2">{book.author}</div>
            </div>
            <p className="mx-auto text-gray-700 text-sm text-center leading-relaxed w-3/4">{book.description}</p>

        </div>
    );
};

export default BookCard;