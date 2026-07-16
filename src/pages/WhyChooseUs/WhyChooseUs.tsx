import { motion } from "framer-motion";
import { whyChooseUST } from "./WhyChooseUST";
import { useLanguage } from "../../context/LanguageContext";


export default function WhyChooseUsData() {
    const { t, language } = useLanguage();

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
                        {t.whyChooseUs.sectionTitle}
                    </span>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">

                        {t.whyChooseUs.mainTitle}

                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">

                        {t.whyChooseUs.mainDesc}

                    </p>

                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {whyChooseUST.map((item, index) => {

                        const Icon = item.icon
                        ;
                        const title = language === 'fr' ? item.titleFr : item.titleEn;
                        const description = language === 'fr' ? item.descriptionFr : item.descriptionEn;

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

                                    {title}

                                </h3>

                                <p className="text-gray-600 leading-7">

                                    {description}

                                </p>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}