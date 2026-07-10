// StepsPage.tsx


import React from "react";
import { useLanguage } from '../../context/LanguageContext'

interface Step {
  title: string;
  description: string;
}

interface StepsPageProps {
  heading: string;
  subheading?: string;
  steps: Step[];
  imageUrl?: string;
}

const StepsPage: React.FC<StepsPageProps> = ({ heading, subheading, steps, imageUrl }) => {
  const { t } = useLanguage()

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={heading}
          className="w-full h-56 object-cover rounded-xl mb-6 shadow-sm"
        />
      )}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{heading}</h1>
      {subheading && <p className="text-gray-500 mb-8">{subheading}</p>}

      <div className="space-y-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">
              {index + 1}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {t.prepare.stepPrefix} {index + 1} : {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsPage;