import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => {

    return (

        <motion.div

            initial={{ opacity: 0, y: 40 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ duration: .7 }}

            className="mb-20 text-center"

        >

            <p className="uppercase tracking-[8px] text-blue-400 text-sm mb-4">

                {subtitle}

            </p>

            <h2 className="text-5xl font-bold">

                {title}

            </h2>

        </motion.div>

    );

};

export default SectionTitle;