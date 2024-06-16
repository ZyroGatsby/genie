'use client'; // Error components must be Client Components

import Link from 'next/link';
import * as React from 'react';

import { Button, buttonVariants } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <main className='h-screen justify-center flex items-center'>
      <div className='min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
        <div className='mx-auto max-w-max'>
          <main className='sm:flex'>
            <p className='text-4xl font-bold tracking-tight text-primary sm:text-5xl'>
              500
            </p>
            <div className='sm:ml-6'>
              <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                  Oops, something went wrong!
                </h1>
                <p className='mt-1 text-base text-gray-500'>
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
                <Button variant='default' onClick={reset}>
                  Go back home
                </Button>
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
