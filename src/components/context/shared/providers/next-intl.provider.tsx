import React from 'react';

const NextIntlProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextIntlProvider>{children}</NextIntlProvider>;
};

export default NextIntlProvider;
