import React from 'react';
import Form from 'next/form';
import SearchReset from './search-reset';
import { FiSearch } from 'react-icons/fi';

const SearchForm = ({ query }: { query?: string }) => {

  return (
    <Form
      action='/'
      scroll={false}
      className='flex items-center space-x-4 p-4  border border-gray-300 rounded-lg shadow-lg'
    >
      {/* Search Input */}
      <input
        name='query'
        defaultValue={query}
        className='w-full px-4 py-2 rounded-md border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary'
        placeholder='Search Travel Destinations...'
      />

      {/* Search Reset Button */}
      <div className='flex items-center'>
        {query && (
          <SearchReset />
        )}
        <button className='text-secondary'>
            <FiSearch size={30} />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
