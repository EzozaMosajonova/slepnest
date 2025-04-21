import React from "react";
import { FaHeart } from "react-icons/fa";
import { useFavoriteStore } from "../../../store/uselikestore"; // Zustandan foydalanish
import { useNavigate } from "react-router-dom"; // useNavigate hooki navigatsiya uchun
import { useTranslation } from "react-i18next"; // Tarjima olish uchun
import kvadrat from "../../../assets/kvadrat.jpg";
import ikat from "../../../assets/ikat.jpg";
import davra from "../../../assets/davra.jpg";
import geometriya from "../../../assets/geometriya.jpg";
import tropik from "../../../assets/tropik.jpg";
import bambi from "../../../assets/bambi.jpg";
import vizantiya from "../../../assets/vizantiya.jpg";
import bog from "../../../assets/bog.jpg";
import pat from "../../../assets/pat.jpg";
import lavanda from "../../../assets/lavanda.jpg";

export const items = [
  { id: 1, name: "winter.desc1", img: kvadrat },
  { id: 2, name: "winter.desc2", img: ikat },
  { id: 3, name: "winter.desc3", img: davra },
  { id: 4, name: "winter.desc4", img: geometriya },
  { id: 5, name: "winter.desc5", img: tropik },
  { id: 6, name: "winter.desc6", img: bambi },
  { id: 7, name: "winter.desc7", img: vizantiya },
  { id: 8, name: "winter.desc8", img: bog },
  { id: 9, name: "winter.desc9", img: pat },
  { id: 10, name: "winter.desc10", img: lavanda },
];

export default function Qish() {
  const { t } = useTranslation(); // Tarjima olish
  const { favorites, toggleFavorite } = useFavoriteStore(); // Zustand store dan foydalanish
  const navigate = useNavigate(); // Navigatsiya qilish uchun useNavigate hooki

  const goToItemDetail = (id) => {
    navigate(`/item/${id}`); // Mahsulotning batafsil sahifasiga o'tish
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-16 mt-20">
      <h1 className="md:text-5xl text-3xl mb-2 font-extrabold text-center">{t("winter.title")}</h1>
      <h1 className="md:text-xl text-lg mb-15 font-bold text-center">{t("winter.desc")}</h1>
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
