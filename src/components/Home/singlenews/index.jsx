import React from "react";
import { useParams } from "react-router-dom";
import { newsItems } from "../News/index";
import { useTranslation } from 'react-i18next';

// Bitta yangilik sahifasi komponenti
export default function SingleNews() {
  const { t } = useTranslation(); // Tilni tarjima qilish hook
  const { id } = useParams(); // URL'dan yangilik ID sini olish
  const item = newsItems.find((i) => i.id === parseInt(id)); // ID bo‘yicha yangilikni topish

  if (!item) {
    return <div className="text-center py-20">Yangilik topilmadi</div>;
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-6 md:mt-25 mt-15">
      <div className="w-[50%] mx-auto">
        {/* Yangilik rasmi */}
      <img
        src={item.img}
        alt={t(item.title)}
        className="rounded-xl w-full h-72 object-cover"
      />

      {/* Sana va muallif */}
      <div className="text-sm text-gray-500 mt-2">
        {item.date} — {t(item.author)}
      </div>

      {/* Sarlavha */}
      <h1 className="text-2xl font-bold mt-2">{t(item.title)}</h1>

      {/* Kontent */}
      <p className="mt-4 text-gray-700">{t(item.titleBt)}</p>
      </div>
    </div>
  );
}
