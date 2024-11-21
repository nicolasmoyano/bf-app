import { ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export const IconButton = ({
  icon,
  className = "",
  variant = "primary",
  onClick,
  ...props
}: IconButtonProps) => {
  const variants = {
    primary: "bg-green-600 hover:bg-green-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    outline: "border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50",
  };

  return (
    <button
      className={`
        p-2 
        rounded-full 
        transition-colors 
        ${variants[variant]}
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {icon}
    </button>
  );
};
