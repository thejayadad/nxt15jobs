'use client';
import Link from 'next/link';
import React from 'react';
import { FiX } from 'react-icons/fi';

const SearchReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if(form) form.reset();
    }
  return (
    <button
      type='button'
      onClick={reset}
      className='text-gray-500 hover:text-primary transition duration-300'
    >
        <Link href='/'>
        <FiX className='text-2xl' />
        </Link>
    </button>
  );
};

export default SearchReset;
