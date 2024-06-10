'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';

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
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <Logo className='w-16' />
          <h1 className='mt-4'>Genie</h1>
          <p className='mt-2 text-sm text-gray-800'>
            Building for Productivity - HackOps 1.0{' '}
          </p>
          <p className='mt-4 text-sm text-gray-700'>
            <ArrowLink href='https://github.com/ZyroGatsby/genie'>
              See the repository
            </ArrowLink>
          </p>

          <ArrowLink className='mt-4' href='https://pipeops.io/'>
            Deploy with PipeOps
          </ArrowLink>

          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://github.com/ZyroGatsby'>
              ZyroGatsby
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
