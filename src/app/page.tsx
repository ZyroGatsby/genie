'use client';

import * as React from 'react';
import '@/lib/env';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';

export default function HomePage() {
  return (
    <main>
      <div className='mx-auto max-w-lg'>
        <div>
          <div className='text-center'>
            <Logo className='w-10 mx-auto' />
            <h2 className='mt-2 text-lg font-medium text-gray-900'>Hello</h2>
            <p className='mt-1 text-sm text-gray-500'>
              Welcome to <span className='italics'>Genie</span>, your AI-powered
              quiz creation assistant. Get started by entering what you would
              like to learn.
            </p>
          </div>
          <form action='#' className='mt-6 flex'>
            <label htmlFor='what-to-learn' className='sr-only'>
              What do you want to learn today?
            </label>
            <input
              type='text'
              name='what-to-learn'
              id='what-to-learn'
              className='block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm'
              placeholder='What do you want to learn today?'
            />
            <button
              type='submit'
              className='ml-4 flex-shrink-0 rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Start learning
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
