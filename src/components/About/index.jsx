import React from 'react';
import { useTranslation } from 'react-i18next';
import AboutImg from "../../assets/about.png";

const About = () => {
  const { t } = useTranslation(); // Tarjima olish

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:py-16 py-6 md:mt-20 mt-10">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        {/* Text Qismi */}
        <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" className="w-full lg:w-[40%]">
          <h1 className="md:text-4xl text-2xl font-bold text-black">{t("about.title")}</h1>
          <p className="md:text-xl text-gray-500 font-semibold mt-3">{t("about.desc1")}</p>
          <p className="md:text-xl text-gray-500 font-semibold mt-3">{t("about.desc2")}</p>
          <p className="md:text-xl text-gray-500 font-semibold mt-3">{t("about.desc3")}</p>
          <p className="md:text-xl text-gray-500 font-semibold mt-3">{t("about.desc4")}</p>
          <p className="md:text-xl text-gray-500 font-semibold mt-3">{t("about.desc5")}</p>
          <p className="md:text-xl text-gray-500 font-semibold mt-3">{t("about.desc6")}</p>
        </div>

        {/* Rasm Qismi */}
        <div data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
         className="w-full lg:w-[55%]">
          <img src={AboutImg} alt="IMG" className="w-full rounded-2xl " />
        </div>
      </div>
    </div>
  );
};

export default About;
