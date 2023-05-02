import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <div className="px-32 py-8">
            <div className="flex justify-between mb-4">
                <div className='flex items-center gap-2'>
                    <Icon className='text-2xl border h-12 w-12 rounded-full p-2' icon="fa-solid:phone-alt" />
                    <div>
                        <p className="font-normal text-2xl">+880134567891</p>
                        <span className="text-xs text-gray-500">Working 8:00am-12am</span>
                    </div>
                </div>
                <div className='flex'>
                    <Icon className='text-2xl border h-12 w-12 rounded-full p-2' icon="fa-brands:facebook-f" />
                    <Icon className='text-2xl border h-12 w-12 rounded-full p-2' icon="fa-brands:instagram" />
                    <Icon className='text-2xl border h-12 w-12 rounded-full p-2' icon="fa-brands:twitter" />
                </div>
            </div>
            <hr />
            <p className='mt-4 text-gray-700 text-center text-sm'>Copyright 2022 ©. All rights reserved. Powered by Favorite Food Zone.</p>
        </div>
    );
};

export default Footer;