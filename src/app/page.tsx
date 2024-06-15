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

import Footer from '@/components/sections/footer';
import Hero from '@/components/sections/hero';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Footer />
    </main>
  );
}
