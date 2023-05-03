import Button from "../Button/Button";
import { Icon } from '@iconify/react';

const Banner = ({ children }) => {
    return (
        <div className="sm:h-64 md:h-96 py-6 sm:py-0 overflow-hidden relative flex items-center">
            <img className="absolute hidden md:block min-w-full min-h-full -z-30" src="https://i.ibb.co/dL1J3VM/Banner-image.jpg" alt="" />
            <img className="absolute md:hidden block min-h-full min-w-full -top-15 -z-30" src="https://i.ibb.co/Rvpd9Fs/mobile-bannar.jpg" alt="" />
            <div className="bg-sky-950 opacity-40 h-full w-full absolute top-0 -z-20"></div>
            <div className="text-slate-100 px-6 sm:px-20 md:px-32">
                {children}
            </div>
        </div>
    );
};

export default Banner;