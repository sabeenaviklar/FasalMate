import React from 'react';
import Image from 'next/image';

const Features = () => {
  return (
    <section className="border-2 border-red-500 flex-col flexCenter overflow-hiddenbg-feature-bg 
    bg-center bg-no-repeat py-24" >
      <div className="max-container padding-container relative w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
            <Image
                src="/mobile.png"
                alt="phone"
                width={800}
                height={900}
                className='feature-phone'
            />
            </div>
          

          <div className="z-20 flex w-full flex-col lg:w-[60%]">
            <div className='relative'>
             <Image
                src="/iconFarmer.png"
                alt="camp"
                width={50}
                height={50}
                className='py-[18px] absolute left-[-5px] top[10px] w-10 lg:w-[50px]'
             />
             <h2 className="py-[50px] bold-40 lg:bold-64"> Our Features </h2>

            </div>

          </div>
       

      </div>

    </section>
  )
}

export default Features