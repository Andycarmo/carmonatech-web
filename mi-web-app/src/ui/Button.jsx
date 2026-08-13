import { motion } from "framer-motion";

const Button = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    className = "",
}) => {

    const styles = {

        primary:
            "bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/20",

        secondary:
            "bg-white/10 hover:bg-white/20 border border-white/10 text-white",

        ghost:
            "bg-transparent hover:bg-white/10 text-white"

    };

    return (

        <motion.button

            whileHover={{ scale: 1.05 }}

            whileTap={{ scale: .96 }}

            transition={{
                duration: .2
            }}

            type={type}

            onClick={onClick}

            className={`
                px-8
                py-4
                rounded-2xl
                font-semibold
                transition-all
                duration-300
                ${styles[variant]}
                ${className}
            `}
        >

            {children}

        </motion.button>

    );

};

export default Button;