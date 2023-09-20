import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-white text-black'>
            <div className="container py-8">
            <div className="flex flex-col items-center sm:flex-row gap-3 md:gap-0 justify-between mb-4">
                <div className='flex items-center gap-2'>
                    <Icon className='text-2xl border h-10 w-10 md:h-12 md:w-12 rounded-full p-2' icon="fa-solid:phone-alt" />
                    <div>
                        <p className="font-normal text-lg md:text-2xl">+880134567891</p>
                        <span className="text-xs text-gray-600">Working 8:00am-12am</span>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <Icon className='text-2xl border h-10 w-10 md:h-12 md:w-12 rounded-full p-2' icon="fa-brands:facebook-f" />
                    <Icon className='text-2xl border h-10 w-10 md:h-12 md:w-12 rounded-full p-2' icon="fa-brands:instagram" />
                    <Icon className='text-2xl border h-10 w-10 md:h-12 md:w-12 rounded-full p-2' icon="fa-brands:twitter" />
                </div>
            </div>
            <hr />
            <p className='mt-4 text-gray-700 text-center text-sm'>Copyright 2022 ©. All rights reserved. Powered by <Link className='underline'>FreshFoodRecipes.</Link></p>
        </div>
        </div>
    );
};

export default Footer;