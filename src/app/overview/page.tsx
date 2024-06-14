import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Overview',
};

export default function OverviewPage() {
  return (
    <main>
      <section>
        <div className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
          Overview Page
        </div>
      </section>
    </main>
  );
}
