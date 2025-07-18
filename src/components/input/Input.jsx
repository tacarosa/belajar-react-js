import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const Input = ({ id, placeholder, type = "text", value, onChange, label }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

    return (
        <div className={`${type === "password" && "relative"}`}>
            {label && <label className="font-semibold">{label}</label>}
            <input
                id={id}
                type={inputType}
                className={`border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#FF64A0] w-full mt-2 h-12 ${type === "password" ? "pr-12" : ""}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />

            {type === "password" && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 pt-8 flex items-center text-gray-400 hover:text-gray-700 focus:outline-none"
                    aria-label="eye-icon"
                >
                    <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        size="lg"
                    />
                </button>
            )}
        </div>
    );
};


export default Input;
