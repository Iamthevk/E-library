import React, { useState } from 'react';
import { books } from '../lib/data';
import BookCard from './BookCard';


const LayOut: React.FC = () => {
    const [query, setQuery] = useState('');
    const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(`Searching for: ${query}`);
    };
    return (
        <>
            <div className="mx-auto w-3/4">
                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        className=" border border-green-500 rounded-lg p-3 w-full"
                        placeholder="Search for a book..."
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                </form>
            </div>
            <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">

                {filteredBooks.map(fb =>
                    < BookCard key={fb.id} book={fb} />)
                }
            </div>

        </>
    );
};

export default LayOut;