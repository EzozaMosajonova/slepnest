import React from "react";
import sifat3 from "../../../assets/sifat3.png";
import { useTranslation } from "react-i18next"; // Tarjima olish uchun
import { useNavigate } from "react-router";

const Sifat3 = () => {
  const { t } = useTranslation(); // Tarjima olish
  const navigate =useNavigate()
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-16 relative md:mt-0 mt-10">
      <div className="relative bg-[#48965d] text-white  h-[550px] md:h-auto rounded-3xl p-6 md:p-10 lg:p-16 shadow-[0_10px_60px_-15px_rgba(255,0,90,0.4)] ">

        {/* Rasm - ustki qatlamda markazga chiqarilgan */}
        <img
          src={sifat3}
          alt="Toza Uyqu Mahsulotlari"
          className="absolute left-1/2 top-10 md:top-1/2 md:left-1/2  transform -translate-x-1/2 -translate-y-1/2 z-20 w-[440px] sm:w-[550px] md:w-[680px] lg:w-[750px] "
        />

        {/* Kontent - rasm orqasida qolmasligi uchun z-30 */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center relative z-30">
          
          {/* Chap blok */}
          <div className="text-center md:text-left md:mt-0   mt-35 sm:mt-50 mb-5 md:mb-0">
            <h1 className="text-[3.5rem] sm:text-[5rem] font-extrabold leading-none">100%</h1>
            <p className="text-xl font-light mt-2">{t("characteristic.title")}</p>
          </div>

          {/* O‘rtadagi ustun - bo‘sh qoladi, rasm ustidan chiqadi */}
          <div className="hidden md:block"></div>

          {/* O‘ng blok */}
          <div className="text-center md:text-left mt-5 md:mt-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {t("characteristic.titleleft")}
            </h2>
            <p className="text-base sm:text-lg text-gray-200 mb-6">
            {t("characteristic.desc")}
            </p>
            <button onClick={() => navigate("/collection")} className="bg-white text-[#3c3849] font-semibold py-2 px-6 rounded-full shadow hover:bg-gray-100 transition">
            {t("characteristic.button")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sifat3;
