import React from "react";

const InputCard = ({Icon,type,loading,name,value,placeholder,onChange}) => {
    return (
        <div className="relative group">
          <Icon className="absolute right-4 top-4 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
          <input
            type={type}
            name={name}
            required
            disabled={loading}
            value={value}
            onChange={onChange}
            className={` disable:opacity-50 cursor-not-allow w-full block px-20 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-gray-800 transition-all duration-300`}
            placeholder={placeholder}
          />
        </div>
    );
};

export default InputCard;