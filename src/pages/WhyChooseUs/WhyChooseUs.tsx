import { motion } from "framer-motion";
import { whyChooseUST } from "./WhyChooseUST";


export default function WhyChooseUsData() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-orange-50">

            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >

                    <span className="text-orange-600 font-semibold uppercase tracking-widest">
                        Pourquoi nous choisir ?
                    </span>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">

                        La qualité au cœur de chacun de nos produits

                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">

                        Chez <span className="font-semibold text-orange-600">BIKOAN SARL</span>,
                        nous mettons notre expertise au service de la fabrication de snacks
                        savoureux, sains et de qualité afin d'offrir une expérience unique à
                        chacun de nos consommateurs.

                    </p>

                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {whyChooseUST.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div

                                key={index}

                                initial={{ opacity: 0, y: 50 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                transition={{
                                    duration: .6,
                                    delay: index * .15
                                }}

                                viewport={{ once: true }}

                                whileHover={{
                                    y: -10
                                }}

                                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-orange-100"

                            >

                                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">

                                    <Icon
                                        size={32}
                                        className="text-orange-600"
                                    />

                                </div>

                                <h3 className="text-2xl font-bold mb-4">

                                    {item.title}

                                </h3>

                                <p className="text-gray-600 leading-7">

                                    {item.description}

                                </p>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}