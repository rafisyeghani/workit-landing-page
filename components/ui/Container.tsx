import type { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const base = "mx-auto w-full max-w-[1114px] px-6 lg:px-8";

export default function Container({ children, className = "" }: ContainerProps) {
    return (
        <div className={`${base} ${className}`}>
            {children}
        </div>
    );
}