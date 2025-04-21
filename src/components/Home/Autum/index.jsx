import React from "react";
import { FaHeart } from "react-icons/fa";
import { useFavoriteStore } from "../../../store/uselikestore"; // Zustandan foydalanish
import { useNavigate } from "react-router-dom"; // useNavigate hooki navigatsiya uchun
import { useTranslation } from "react-i18next"; 
import safari from "../../../assets/safari.jpg";
import ametist from "../../../assets/ametist.jpg";
import shivali from "../../../assets/shivali.jpg";
import zumrad from "../../../assets/zumrad.jpg";
import malaxit from "../../../assets/malaxit.jpg";
import bahor from "../../../assets/bahor.jpg";
import kuz from "../../../assets/kuz.jpg";
import moviy from "../../../assets/moviy.jpg";
import suv from "../../../assets/suv.jpg";
import plaid from "../../../assets/plaid.jpg";

export const items = [
  { id: 11, name: ".desc1", img: safari },
  { id: 12, name: "autum.desc2", img: ametist },
  { id: 13, name: "autum.desc3", img: shivali },
  { id: 14, name: "autum.desc4", img: zumrad },
  { id: 15, name: "autum.desc5", img: malaxit },
  { id: 16, name: "autum.desc6", img: bahor },
  { id: 17, name: "autum.desc7", img: kuz },
  { id: 18, name: "autum.desc8", img: moviy },
  { id: 19, name: "autum.desc9", img: suv },
  { id: 20, name: "autum.desc10", img: plaid },
];

export default function Autum() {
  const { t } = useTranslation(); // Tarjima olish
  const { favorites, toggleFavorite } = useFavoriteStore(); // Zustand store dan foydalanish
  const navigate = useNavigate(); // Navigatsiya qilish uchun useNavigate hooki

  const goToItemDetail = (id) => {
    navigate(`/item/${id}`); // Mahsulotning batafsil sahifasiga o'tish
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-16 mt-20">
      <h1 className="md:text-5xl text-3xl mb-2 font-extrabold text-center">{t("autum.title")}</h1>
      <h1 className="md:text-xl text-lg mb-15 font-bold text-center">{t("autum.desc")}</h1>
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
              className="w-full md:h-44 h-34 object-cover rounded-xl shadow-md"
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
