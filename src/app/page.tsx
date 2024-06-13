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
import { Input } from '@/components/ui/input';

import Logo from '~/svg/Logo.svg';

const cards = [
  {
    name: 'Machine Learning',
    description: 'Learn the basics of machine...',
    imageUrl:
      'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHwy',
  },
  {
    name: 'Calculus and Statistics',
    description: 'Learn and enhance your abil...',
    imageUrl:
      'https://images.unsplash.com/photo-1634117622592-114e3024ff27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhdGlzdGljc3xlbnwwfHwwfHx8Mg%3D%3D',
  },
  {
    name: 'Project Management',
    description: 'Become a seasoned project...',
    imageUrl:
      'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDI%3D',
  },
  {
    name: 'UI/UX Design',
    description: 'Become a seasoned project...',
    imageUrl:
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFVJJTJGVVglMjBkZXNpZ258ZW58MHx8MHx8fDI%3D',
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
            <Input type='text' placeholder='What do you want to learn today?' />
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
                      className='h-10 w-10 rounded-sm'
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
                  <Button className='rounded-full font-normal' variant='secondary'>Start learning</Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
