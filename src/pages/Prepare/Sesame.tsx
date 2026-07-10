// SesamePage.tsx
import React from "react";
import StepsPage from "./StepPages";
import { useLanguage } from "../../context/LanguageContext";

const SesamePage: React.FC = () => {
  const { t } = useLanguage()
  const steps = t.prepare.sesame.steps

  return (
    <StepsPage
      heading={t.prepare.sesame.heading}
      subheading={t.prepare.sesame.subheading}
      steps={steps}
    />
  )
};

export default SesamePage;