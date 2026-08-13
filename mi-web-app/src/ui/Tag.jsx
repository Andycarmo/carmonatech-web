const Tag = ({ children }) => {

    return (

        <div
            className="
                rounded-xl
                bg-white/5
                px-4
                py-2
                text-sm
                border
                border-white/10
            "
        >

            {children}

        </div>

    );

};

export default Tag;