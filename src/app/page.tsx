import { Metadata } from 'next';
import * as React from 'react';
import '@/lib/env';

export const metadata: Metadata = {
  title: 'Home',
};

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

import { Button } from '@/components/ui/button';

import Logo from '~/svg/Logo.svg';

const cards = [
  {
    name: 'Machine Learning',
    description: 'Learn the basics of machine...',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Calculus and Statistics',
    description: 'Learn and enhance your abil...',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Project Management',
    description: 'Become a seasoned project...',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'UI/UX Design',
    description: 'Become a seasoned project...',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function HomePage() {
  return (
    <main>
      <div className='mx-auto max-w-lg px-4 md:px-6 py-12'>
        <div>
          <div className='text-center'>
            <Logo className='w-10 mx-auto' />
            <h2 className='mt-2 text-lg font-medium text-gray-900'>Hello</h2>
            <p className='mt-1 text-sm text-gray-500'>
              Welcome to <span className='italic'>Genie</span>, your AI-powered
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
            <Button className='ml-4'>Start learning</Button>
          </form>
        </div>
        <div className='mt-10'>
          <h3 className='text-xs tracking-tighter font-medium text-gray-500 uppercase'>
            You can start with the following topics
          </h3>
          <ul
            role='list'
            className='mt-4 divide-y divide-gray-200 border-t border-b border-gray-200'
          >
            {cards.map((card, cardIdx) => (
              <li
                key={cardIdx}
                className='flex items-center justify-between space-x-3 py-4'
              >
                <div className='flex min-w-0 flex-1 items-center space-x-3'>
                  <div className='flex-shrink-0'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className='h-10 w-10 rounded-md'
                      src={card.imageUrl}
                      alt=''
                    />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <p className='truncate text-sm font-normal text-gray-900'>
                      {card.name}
                    </p>
                    <p className='truncate text-sm font-normal text-gray-500'>
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className='flex-shrink-0'>
                  <button
                    type='button'
                    className='inline-flex items-center rounded-full border border-transparent bg-gray-100 py-2 px-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    <span className='text-sm text-gray-900'>
                      Start learning
                    </span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
