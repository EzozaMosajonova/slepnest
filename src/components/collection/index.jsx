import React, { useState } from "react";
import useItems from "../../item/item";
import { FaHeart } from "react-icons/fa";
import { useFavoriteStore } from "../../store/uselikestore";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";



const Collection = () => {
    const { t } = useTranslation(); // Tarjima olish
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const allItems = useItems();
  const { favorites, toggleFavorite } = useFavoriteStore();
  const navigate = useNavigate();

  const goToItemDetail = (id) => {
    navigate(`/item/${id}`);
  };
  const categories = [

    { key: "all", label: t("category.desc") },
    { key: "qish", label: t("category.winter") },
    { key: "kuz", label: t("category.autum") },
    { key: "yoz", label: t("category.summer") },
  ];

  const filteredProducts = allItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-16 md:mt-23 mt-13">
      {/* Mobil (va umumiy) qidiruv va kategoriya tugmalari */}
      <div className="w-full flex flex-col gap-4 md:hidden">
        {/* Qidiruv */}
        {/* Kategoriyalar (mobil tugmalar) */}
        <div className="overflow-x-auto no-scrollbar mb-10">
          <div className="flex gap-3 w-max mt-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`whitespace-nowrap px-2 py-2 rounded-full font-normal text-[12px] transition-all ${selectedCategory === cat.key
                  ? "bg-red-600 text-white"
                  : "bg-black text-white hover:bg-red-600"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Desktop panel (chap menyu) */}
      <div className="flex md:flex-row flex-col gap-6">
        <div className="hidden md:block w-full md:w-[250px]">
          <h2 className="text-2xl font-bold mb-4">To‘plam</h2>
          {categories.map((cat) => (
            <p
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`cursor-pointer mb-2 text-lg font-medium transition ${selectedCategory === cat.key
                ? "text-[#c29d58] font-bold"
                : "text-black hover:text-[#c29d58]"
                }`}
            >
              {cat.label}
            </p>
          ))}
        </div>

        {/* Mahsulotlar ro'yxati */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer hover:scale-105 transition rounded-2xl"
              onClick={() => goToItemDetail(item.id)}
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-[170px] object-cover rounded-2xl"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(item);
                  }}
                  className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:scale-110 transition"
                >
                  <FaHeart
                    className={`text-xl ${favorites.some((fav) => fav.id === item.id)
                      ? "text-red-500"
                      : "text-gray-400"
                      }`}
                  />
                </button>
              </div>
              <p className="text-center text-lg font-semibold py-3">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
