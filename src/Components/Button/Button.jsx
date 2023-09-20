const Button = ({onClick,disabled,className,fullWidth,children}) => {
    return (
        <div>
            <button onClick={onClick} disabled={disabled} className={`flex text-white items-center gap-2 hover:gap-3 duration-100 ${fullWidth? 'w-full justify-center': '' } ${className} bg-orange-500 text-xs md:text-base hover:bg-orange-600 font-semibold py-2 px-3 md:px-4 rounded`}>{children}</button>
        </div>
    );
};

export default Button;