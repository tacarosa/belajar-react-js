const Input = ({ placeholder, type = "text", value, onChange, label }) => {
    return (
        <div className="mb-2">
            {label && <label className="font-semibold">{label}</label>}
            <input
                type={type}
                className="border border-gray-300 rounded-md p-2 
                focus:outline-none focus:ring-2 focus:ring-[#FF64A0] w-full mt-2 h-12"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
