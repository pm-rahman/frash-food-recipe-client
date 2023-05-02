import Button from "../Button/Button";
import { Icon } from '@iconify/react';

const Background = ({children}) => {
    return (
        <div className="h-96 overflow-hidden relative flex items-center">
            <img className="absolute -top-24 -z-30" src="https://i.ibb.co/dL1J3VM/bannar-image.jpg" alt="" />
            <div className="bg-sky-950 opacity-40 h-full w-full absolute top-0 -z-20"></div>
            <div className="text-slate-100 px-32">
                {children}
            </div>
        </div>
    );
};

export default Background;