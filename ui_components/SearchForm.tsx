import React, { useState } from 'react';

const SearchForm: React.FC = () => {
    const [query, setQuery] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(`Searching for: ${query}`);
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                className="border rounded-lg p-2 w-full"
                placeholder="Search for a book..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
        </form>
    );
};

export default SearchForm;