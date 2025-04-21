import React from "react";
import { useParams } from "react-router-dom";
import { newsItems } from "../News/index";

export default function SingleNews() {
  const { id } = useParams();
  const item = newsItems.find((i) => i.id === parseInt(id));

  if (!item) return <div className="text-center p-8">Yangilik topilmadi.</div>;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <img src={item.img} alt={item.title} className="rounded-xl w-full h-72 object-cover" />
      <div className="text-sm text-gray-500 mt-2">
        {item.date} — {item.author}
      </div>
      <h1 className="text-2xl font-bold mt-2">{item.title}</h1>
      <p className="mt-4 text-gray-700">{item.content}</p>
    </div>
  );
}
