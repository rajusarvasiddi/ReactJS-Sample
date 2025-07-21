import React, { ReactNode } from "react";

interface PlaceholderProps {
    message?: string;
    icon?: ReactNode
}

const Placeholder: React.FC<PlaceholderProps> = ({
        message = "Nothing to display here", 
        icon
    }) => {
    return <>
        <div className="flex flex-col items-center justify-center text-gray-500 p-8 text-center">
            {icon && <div className="mb-4">{icon}</div>}
            <h1 className="text-xl font-semibold">{message}</h1>
        </div>
    </>
}

export default Placeholder;