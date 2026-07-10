import React from "react";
import { useLanguage } from '../../context/LanguageContext'

const GoogleMapEmbed: React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-md border border-gray-200">
      <iframe
        title={t.localisation.title}
        src="https://www.google.com/maps?q=3.8966165,11.5429234&hl=fr&z=17&output=embed"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[250px] sm:h-[300px] md:h-[350px]"
      />
    </div>
  );
};

export default GoogleMapEmbed;
       