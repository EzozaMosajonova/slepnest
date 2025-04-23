// pages/Favorites.jsx
import React from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useFavoriteStore } from "../../store/uselikestore";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Favorites() {
    const { t } = useTranslation();
    const { favorites, toggleFavorite } = useFavoriteStore();
    const navigate = useNavigate();

    const goToItemDetail = (id) => {
        navigate(`/item/${id}`);
    };

    if (favorites.length === 0) {
        return <div className="p-6 text-center text-gray-500">{t("favorites.empty") || "Afsus sevimlilar yo'q"}</div>;
    }

    return (
        <div className="py-6 max-w-[1440px] mx-auto px-4 mt-25">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {favorites.map((item) => (
                    <div
                        key={item.id}
                        className="relative group cursor-pointer hover:scale-110 transition"
                        onClick={() => goToItemDetail(item.id)}
                    >
                        <Link to={`/item/${item.id}`}>
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full md:h-44 h-30 object-cover rounded-xl shadow-md"
                            />
                        </Link>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite(item);
                            }}
                            className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:scale-110 transition"
                        >
                            <FaHeart
                                className={`text-xl ${favorites.some((fav) => fav.id === item.id) ? "text-red-500" : "text-gray-400"
                                    }`}
                            />
                        </button>
                        <h1 className="mt-2 text-center font-semibold text-sm">
                            {t(item.name)}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
}
