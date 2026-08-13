const Badge = ({ children }) => {

    return (

        <span
            className="
                inline-flex
                items-center
                rounded-full
                bg-blue-500/10
                border
                border-blue-500/20
                px-4
                py-2
                text-sm
                text-blue-300
            "
        >

            {children}

        </span>

    );

};

export default Badge;