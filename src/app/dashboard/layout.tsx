import Navbar from '@/components/common/Navbar';
import React from 'react'

type DashboardLayoutProps = {
  children: any;
  title?: string| undefined;
}
const DashboardLayout =({
  children,
  title,
}: DashboardLayoutProps) => {
  return (
    <html lang="en">
      <body>
        {/* <Navbar title={title}/> */}
        <div className='max-auto px-4'>
            {children}
        </div>
      </body>
    </html>
  );
}

export default DashboardLayout;