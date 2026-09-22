import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
    variant?: ButtonVariant;
    href?: string;
    children: ReactNode;
    className?: string;
}

export default function Button ({
    variant = "primary",
    href,
    children,
    className = ""
}: ButtonProps) {
    const baseStyles = "px-6 py-3 transition-colors duration-300 inline-flex items-center justify-center font-body font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eucalyptus";
    const variantStyles = {
        primary: "bg-eucalyptus text-dark-purple border border-eucalyptus hover:bg-transparent hover:text-eucalyptus",
        secondary: "text-white border-b-2 border-eucalyptus hover:text-eucalyptus",
    };

    const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className || ""}`;

    if (href) {
        return (
            <a href={href} className={buttonClasses}>
                {children}
            </a>
        );
    }

    return (
        <button className={buttonClasses}>
            {children}
        </button>
    );
}