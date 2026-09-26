import { NextIntlClientProvider } from 'next-intl';
import React from 'react';

const nextIntlProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
};

export default nextIntlProvider;
