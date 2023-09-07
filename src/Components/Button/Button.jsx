const Button = ({className,fullWidth,children}) => {
    return (
        <div>
            <button className={`${fullWidth? 'w-full': '' } ${className} bg-emerald-600 text-xs md:text-base hover:bg-emerald-600 font-semibold py-1 md:py-1 px-3 md:px-4 rounded text-white`}>{children}</button>
        </div>
    );
};

export default Button;