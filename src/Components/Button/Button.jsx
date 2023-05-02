const Button = ({children}) => {
    return (
        <div>
            <button className="bg-sky-500 hover:bg-sky-600 font-semibold py-2 px-6 rounded text-white">{children}</button>
        </div>
    );
};

export default Button;