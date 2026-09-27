import { Link } from '@/i18n/navigation';
import React from 'react';

const NotFound = () => {
  return (
    <html>
      <body>
        <div>not found</div>
        <Link href={'/'}>Navigate to Home</Link>
      </body>
    </html>
  );
};

export default NotFound;
