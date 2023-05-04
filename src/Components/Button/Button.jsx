const Button = ({fullWidth,children}) => {
    return (
        <div>
            <button className={`${fullWidth? 'w-full': '' } bg-sky-500 text-xs md:text-base hover:bg-sky-600 font-semibold py-2 md:py-3 px-4 md:px-6 rounded text-white`}>{children}</button>
        </div>
    );
};

export default Button;