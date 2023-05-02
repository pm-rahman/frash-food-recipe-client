import Button from "../Button/Button";
import { Icon } from '@iconify/react';

const Background = () => {
    return (
        <div className="h-96 overflow-hidden relative flex items-center">
            <img className="absolute -top-24 -z-20" src="https://i.ibb.co/dL1J3VM/bannar-image.jpg" alt="" />
            <div className="bg-sky-950 opacity-40 h-full w-full absolute top-0 -z-10"></div>
            <div className="text-slate-100 px-32">
                <span className="text-semibold text-sm font-normal flex items-center gap-2">EXCLUSIVE OFFER <span className="bg-sky-500 py-1 px-4 rounded-full">25% OFF</span></span>
                <h4 className="text-4xl font-semibold py-3">Our Spatial Discount<p className="flex gap-2"> Week is <span className="flex items-end"><Icon className="text-2xl" icon="fa-solid:running" /><Icon className="text-3xl" icon="fa-solid:running" /><Icon icon="fa-solid:running" /></span></p></h4>
                <p className="font-medium text-lg mb-4">Only this week. Don't miss</p>
                <Button><span className="flex items-center gap-2">Shop Now <Icon icon="fa-solid:long-arrow-alt-right" /></span></Button>
            </div>
        </div>
    );
};

export default Background;