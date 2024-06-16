import { Metadata } from 'next';
import Link from 'next/link';
import * as React from 'react';

import { buttonVariants } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main className='h-screen justify-center flex items-center bg-white'>
      <div className='min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
        <div className='mx-auto max-w-max'>
          <main className='sm:flex'>
            <p className='text-4xl font-bold tracking-tight text-main sm:text-5xl'>
              404
            </p>
            <div className='sm:ml-6'>
              <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                  Page not found
                </h1>
                <p className='mt-1 text-base text-gray-500'>
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
                <Link href='/' className={buttonVariants({ variant: 'link' })}>
                  Go back home
                </Link>
                <Link
                  href='mailto:zyro.kamson@gmail.com'
                  className={buttonVariants({ variant: 'default' })}
                >
                  Contact support
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
}
