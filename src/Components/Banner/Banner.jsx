import Button from "../Button/Button";
import { Icon } from '@iconify/react';

const Banner = ({ children }) => {
    return (
        <>
            <div className="sm:h-64 md:h-96 py-6 sm:py-0 rounded-lg overflow-hidden relative flex items-center">
            <img className="absolute hidden md:block min-w-full min-h-full" src="https://i.ibb.co/dL1J3VM/Banner-image.jpg" alt="" />
            <img className="absolute md:hidden block min-h-full min-w-full -top-15" src="https://i.ibb.co/cQbw5vt/mobile-bannar.jpg" alt="" />
            <div className="bg-black opacity-30 h-full w-full absolute top-0"></div>
            <div className="text-white px-10 md:px-20 relative z-10">
                {children}
            </div>
        </div>
        </>
    );
};

export default Banner;