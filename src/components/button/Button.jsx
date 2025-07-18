const Button = ({ 
    text, 
    onClick, 
    type = "button ", 
    color = "bg-sky-500",
    className = ""
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-full min-w-40 h-12 text-white text-xl font-semibold rounded-xl cursor-pointer ${color} ${className}`}
        >
            {text}
        </button>
    );
};
export default Button;
