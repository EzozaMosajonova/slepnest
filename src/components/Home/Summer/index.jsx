import React from "react";
import { FaHeart } from "react-icons/fa";
import { useFavoriteStore } from "../../../store/uselikestore"; // Zustandan foydalanish
import { useNavigate } from "react-router-dom"; // useNavigate hooki navigatsiya uchun
import { useTranslation } from "react-i18next"; // Tarjima olish uchun
import vintage from "../../../assets/vintage.jpg";
import summer2 from "../../../assets/summer2.jpg";
import fransuz from "../../../assets/fransuz.jpg";
import qoy from "../../../assets/qoy.jpg";
import alp from "../../../assets/alp.jpg";
import ilhom from "../../../assets/ilhom.jpg";
import yashil from "../../../assets/yashil.jpg";
import togli from "../../../assets/togli.jpg";
import sakura from "../../../assets/sakura.jpg";
import zaytun from "../../../assets/zaytun.jpg";

export const items = [
  { id: 21, name: "summer.desc1", img: vintage },
  { id: 22, name: "summer.desc2", img: summer2 },
  { id: 23, name: "summer.desc3", img: fransuz },
  { id: 24, name: "summer.desc4", img: qoy },
  { id: 25, name: "summer.desc5", img: alp },
  { id: 26, name: "summer.desc6", img: ilhom },
  { id: 27, name: "summer.desc7", img: yashil },
  { id: 28, name: "summer.desc8", img: togli },
  { id: 29, name: "summer.desc9", img: sakura },
  { id: 30, name: "summer.desc10", img: zaytun },
];

export default function Summer() {
  const { t } = useTranslation(); // Tarjima olish
  const { favorites, toggleFavorite } = useFavoriteStore(); // Zustand store dan foydalanish
  const navigate = useNavigate(); // Navigatsiya qilish uchun useNavigate hooki

  const goToItemDetail = (id) => {
    navigate(`/item/${id}`); // Mahsulotning batafsil sahifasiga o'tish
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-16 mt-20">
      <h1 className="md:text-5xl text-3xl mb-2 font-extrabold text-center">{t("summer.title")}</h1>
      <h1 className="md:text-xl text-lg mb-15 font-bold text-center">{t("summer.desc")}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative group cursor-pointer hover:scale-110 transition"
            onClick={() => goToItemDetail(item.id)} // Divga bosilganda batafsil sahifaga o'tish
          >
            <img
              src={item.img}
              alt={t(item.name)} // Tarjima qilingan nomni ko'rsatish
              className="w-full h-44 object-cover rounded-xl shadow-md"
            />
            <button
              onClick={(e) => {
                e.stopPropagation(); // Divni bosganda mahsulotni tanlashni to'xtatadi
                toggleFavorite(item); // Tanlangan mahsulotni sevimlilar ro'yxatiga qo'shish
              }}
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:scale-110 transition"
            >
              <FaHeart
                className={`text-xl ${
                  favorites.some((fav) => fav.id === item.id) ? "text-red-500" : "text-gray-400"
                }`}
              />
            </button>
            <div className="mt-2 text-black font-semibold md:text-xl text-lg hover:text-red-400">
              {t(item.name)} {/* Tarjima qilingan nomni ko'rsatish */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
