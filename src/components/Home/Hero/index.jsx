import React from "react";
import BannerImg from "../../../assets/heroImg.png";
import { useTranslation } from "react-i18next";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineHeadphones } from "react-icons/md";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-8 mt-20">
      {/* Hero Banner */}
      <div className="relative w-ful  bg-[#dec895] rounded-3xl md:rounded-4xl lg:rounded-[50px]">
        {/* Matn qismi */}
        <div className="absolute top-8 right-5 md:top-12 md:right-10 lg:top-20 lg:right-16 text-right z-10 flex flex-col gap-3 md:gap-6 lg:gap-8">
          <h3 className="text-lg md:text-2xl lg:text-3xl font-bold">{t("hero.title1")}</h3>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-medium">{t("hero.title2")}</h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">{t("hero.title3")}</h1>
        </div>

        {/* Banner rasmi */}
        <img
          src={BannerImg}
          alt="Yotoq to‘plami"
          className="md:block  absolute bottom-0 left-0 top-0 md:left-0 md:-bottom-28 w-full h-auto md:w-[90%] object-cover " />

        {/* Banner balandligi */}
        <div className="h-[260px] sm:h-[450px] md:h-[540px] lg:h-[550px]"></div>
      </div>

      {/* Xizmatlar bo‘limi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:mt-35 mt-15">
        {/* Har bir xizmat */}
        {[
          {
            icon: <CiDeliveryTruck className="text-red-400 text-[80px]" />,
            title: t("delivery.title"),
            desc: t("delivery.desc"),
          },
          {
            icon: <AiOutlineFileProtect className="text-red-400 text-[80px]" />,
            title: t("guarantee.title"),
            desc: t("guarantee.desc"),
          },
          {
            icon: <MdOutlineHeadphones className="text-red-400 text-[80px]" />,
            title: t("help.title"),
            desc: t("help.desc"),
          },
          {
            icon: <IoWalletOutline className="text-red-400 text-[80px]" />,
            title: t("price.title"),
            desc: t("price.desc"),
          },
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            {item.icon}
            <div>
              <h1 className="text-lg lg:text-xl font-bold">{item.title}</h1>
              <p className="text-gray-500 text-base lg:text-lg">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Hero;
