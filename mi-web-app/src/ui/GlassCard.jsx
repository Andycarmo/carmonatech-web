import { motion } from "framer-motion";

const GlassCard = ({ children, className = "" }) => {

    return (

        <motion.div

            whileHover={{

                y: -8,

            }}

            transition={{

                duration: .3

            }}

            className={`
                backdrop-blur-xl
                bg-white/[0.04]
                border
                border-white/10
                rounded-3xl
                p-8
                shadow-2xl
                ${className}
            `}
        >

            {children}

        </motion.div>

    );

};

export default GlassCard;