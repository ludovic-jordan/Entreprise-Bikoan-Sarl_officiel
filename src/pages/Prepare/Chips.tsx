// ChipsPage.tsx
import React, { useState } from "react";
import StepsPage from "./StepPages";
import { useLanguage } from '../../context/LanguageContext'

const saltySteps = [
  { title: "Éplucher", description: "Épluchez les plantains ou pommes de terre et rincez-les à l'eau claire." },
  { title: "Trancher", description: "Coupez en fines rondelles régulières à l'aide d'un couteau ou d'une mandoline." },
  { title: "Assaisonner", description: "Saupoudrez de sel fin et mélangez délicatement pour bien répartir." },
  { title: "Chauffer l'huile", description: "Faites chauffer l'huile dans une poêle profonde à feu moyen-vif." },
  { title: "Frire", description: "Plongez les tranches dans l'huile chaude et faites frire jusqu'à ce qu'elles soient dorées et croustillantes." },
  { title: "Égoutter", description: "Retirez et posez sur du papier absorbant pour enlever l'excès d'huile." },
];

const sweetSteps = [
  { title: "Éplucher", description: "Épluchez des plantains bien mûrs et rincez-les." },
  { title: "Trancher", description: "Coupez en fines rondelles ou en lamelles allongées." },
  { title: "Chauffer l'huile", description: "Faites chauffer l'huile à feu moyen dans une poêle profonde." },
  { title: "Frire", description: "Faites frire les tranches jusqu'à obtenir une belle couleur dorée." },
  { title: "Égoutter", description: "Posez sur du papier absorbant pour retirer l'excès d'huile." },
  { title: "Saupoudrer", description: "Ajoutez un peu de sucre en poudre ou du miel pendant que c'est encore chaud." },
];

const ChipsPage: React.FC = () => {
  const { t } = useLanguage()
  const [type, setType] = useState<"salty" | "sweet">("salty")

  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 pt-8 flex justify-center gap-3">
        <button
          onClick={() => setType("salty")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            type === "salty" ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-600"
          }`}
        >
          {t.prepare.chips.saltyLabel}
        </button>
        <button
          onClick={() => setType("sweet")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            type === "sweet" ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-600"
          }`}
        >
          {t.prepare.chips.sweetLabel}
        </button>
      </div>

      <StepsPage
        heading={type === "salty" ? t.prepare.chips.headingSalty : t.prepare.chips.headingSweet}
        subheading={t.prepare.chips.subheading}
        steps={type === "salty" ? saltySteps : sweetSteps}
      />
    </div>
  )
};

export default ChipsPage;