import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <div className="  bg-gray-800 flex justify-between p-5 shadow-lg">
      <Image src={"/knowledge.png"} width={40} height={20} alt="logo" />

      <Button>Get Started</Button>
    </div>
  );
}

export default Header