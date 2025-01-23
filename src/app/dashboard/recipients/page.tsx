import DashboardLayout from '../layout'
import ControlButton from '@/components/specific/ControlButton'
import Button from '@/components/specific/Button'
import RootLayout from '@/app/layout';
import Image from 'next/image';
import Link from 'next/link';
import Navigator from '@/components/specific/Navigator';

function page() {
    const data = 0; 
  return (
     <RootLayout title='auth'>
        <div className='mx-auto max-w-[400px] text-center'>
              <Image
                  className="dark:invert flex justify-self-center"
                  src="/Googles.png"
                  alt="Company Logo"
                  width={100}
                  height={50}
                  priority
                 />
            <div className='text-lg text-center text-amber-950 mt-4 mb-8'>You don't have any recipients yet</div>
            {/* <ControlButton buttonName='Add New Recipients'/> */}
            <Link href={"/dashboard/recipients/add"} className='w-100 py-3 px-3 text-white rounded-full mt-8 bg-purple-800 hover:opacity-5 hover:cursor-pointer '>Add New Recipients</Link>
        <Navigator/>
        </div>


    </RootLayout>
  )
}

export default page