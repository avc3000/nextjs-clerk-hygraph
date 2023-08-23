import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';

const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]'>
      <Image src='/logo.png' alt='logo' width={100} height={100} />
      <div className='hidden md:flex gap-5 font-serif text-lg'>
        <h2 className='hover:border-2 border-blue-500 hover:text-blue-500 p-2 px-3 cursor-pointer rounded-full'>Home</h2>
        <h2 className='hover:border-2 border-blue-500 hover:text-blue-500 p-2 px-3 cursor-pointer rounded-full'>History</h2>
        <h2 className='hover:border-2 border-blue-500 hover:text-blue-500 p-2 px-3 cursor-pointer rounded-full'>Contact Us</h2>        
      </div>
      <UserButton />
    </div>
  )
}

export default NavBar;