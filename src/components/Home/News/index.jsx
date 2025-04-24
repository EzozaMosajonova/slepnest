import React from "react";
import { useNavigate } from "react-router-dom";
import News1 from "../../../assets/news1.png"
import News2 from "../../../assets/news2.png"
import News3 from "../../../assets/news3.png"
import { useTranslation } from "react-i18next";


export const newsItems = [
  {
    id: 1,
    date: "10/05/2024",
    author: "news.cardSubtitir",
    title: "news.cardTitle",
    desc: "news.cardDesc",
    img: News1,
    titleBt:"news.titleBt"
  },
  {
    id: 2,
    date: "10/05/2024",
    author: "news.cardSubtitir",
    title: "news.cardTitle2",
    desc: "news.cardDesc2",
    img: News2,
    titleBt:"news.titleBt"
  },
  {
    id: 3,
    date: "10/05/2024",
    author: "news.cardSubtitir",
    title: "news.cardTitle3",
    desc: "news.cardDesc3",
    img: News3,
    titleBt:"news.titleBt"
  }
];


export default function News() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-16 mt-0">
      <h1 className="md:text-5xl text-3xl mb-2 font-extrabold text-center">{t("news.title")}</h1>
      <h1 className="md:text-xl text-lg mb-15 font-bold text-center">{t("news.desc")}</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/news/${item.id}`)}
            className="cursor-pointer"
          >
            <img
              src={item.img}
              alt={t(item.title)} // Tarjima
              className="rounded-xl w-full h-52 object-cover"
            />
            <div className="text-sm mt-2 text-gray-500">
              {item.date} — {t(item.author)} {/* Tarjima */}
            </div>
            <h2 className="text-lg font-bold mt-1">{t(item.title)}</h2> {/* Tarjima */}
            <p className="text-gray-600">{t(item.desc)}</p> {/* Tarjima */}
          </div>
        ))}
      </div>
    </div>
  );
}
