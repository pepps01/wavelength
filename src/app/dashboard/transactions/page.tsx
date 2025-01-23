import FalseResponse from '@/components/common/FalseResponse'
import DashboardLayout from '../layout';
import RootLayout from '@/app/layout';
import Image from 'next/image';
import Navigator from '@/components/specific/Navigator';

function page() {
    const status = false;
  return (
     <RootLayout title='auth'>
        <div className='mx-auto max-w-[100px] '>
              <Image
                  className="dark:invert flex justify-self-center"
                  src="/Googles.png"
                  alt="Company Logo"
                  width={100}
                  height={50}
                  priority
                 />
        </div>
            <div className='text-lg text-center text-amber-950 mt-4'>You don't have any transactions yet</div>

            <Navigator/>

    </RootLayout>
  )
}

export default page