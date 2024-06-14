/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import React from 'react';

const Providers = ({ children }: ThemeProviderProps) => {
  return (
    // @ts-ignore
    <NextThemesProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
    </NextThemesProvider>
  );
};

export default Providers;
