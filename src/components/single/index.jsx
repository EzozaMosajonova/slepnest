import React from "react";
import { useParams } from "react-router-dom";
import useItems from "../../item/item.js"; // ✅ to‘g‘ri import
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function Single() {
    const { t } = useTranslation();
    const { id } = useParams();

    const items = useItems(); // ✅ custom hookni chaqirish
    const item = items.find((i) => i.id === parseInt(id));

    if (!item) return <div className="p-6 text-center text-gray-500">Mahsulot topilmadi.</div>;
    const sendMessage = (event) => {
        event.preventDefault();

        const token = "8091527756:AAErWWMRg6UTuaI3RIVjiizXhwasqEIhlFQ";
        const chat_id = "6643238247";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        const name = document.getElementById("name").value.trim();
        const number = document.getElementById("number").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !number || !message) {
            alert("Iltimos, barcha majburiy maydonlarni to‘ldiring!");
            return;
        }

        const messageContent = `
📝 Yangi xabar:
📞 Telefon: ${name}
📧 number: ${number}
💬 Xabar: ${message}
`;

        axios
            .post(url, {
                chat_id: chat_id,
                text: messageContent,
            })
            .then(() => {
                toast.success("Xabar muvaffaqiyatli yuborildi!");
                document.getElementById("myform").reset();
            })
            .catch((error) => {
                console.error("Xabar yuborishda xatolik:", error);
                toast.error("Xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko‘ring.");
            });
    };

    return (
        <div className="max-w-[1420px] mx-auto px-4 py-10 space-y-16 md:mt-20 mt-10">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2">
                    <img
                        src={item.img}
                        alt={item.name}
                        className="rounded-xl shadow-md w-full h-auto object-cover"
                    />
                </div>
                <div className="w-full lg:w-1/2 space-y-4">
                    <h1 className="text-3xl font-bold">{item.name}</h1>
                    <table className="w-full text-left border mt-4 text-base md:text-lg">
                        <tbody>
                            <tr><td className="border px-3 py-2">{t("product.cardTitle1")}</td><td className="border px-3 py-2">{t("product.cardDesc1")}</td></tr>
                            <tr><td className="border px-3 py-2">{t("product.cardTitle2")}</td><td className="border px-3 py-2">{t("product.cardDesc2")}</td></tr>
                            <tr><td className="border px-3 py-2">{t("product.cardTitle3")}</td><td className="border px-3 py-2">{t("product.cardDesc3")}</td></tr>
                            <tr><td className="border px-3 py-2">{t("product.cardTitle4")}</td><td className="border px-3 py-2">{t("product.cardDesc4")}</td></tr>
                            <tr><td className="border px-3 py-2">{t("product.cardTitle5")}</td><td className="border px-3 py-2">{t("product.cardDesc5")}</td></tr>
                            <tr><td className="border px-3 py-2">{t("product.cardTitle6")}</td><td className="border px-3 py-2">{t("product.cardDesc6")}</td></tr>
                            <tr><td className="border px-3 py-2"></td><td className="border px-3 py-2"></td></tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2">
                    <h2 className="text-xl font-bold mb-2">{t("comment.title")}</h2>
                    <p className="text-gray-500">{t("comment.desc")}</p>
                </div>

                <div className="w-full lg:w-1/2 space-y-3">
                    <h2 className="text-xl font-bold">{t("comment.titleForm")}</h2>

                    <div>
                        <label className="block text-sm mb-1">{t("comment.stars")}</label>
                        <div className="flex gap-1 text-xl text-gray-400">
                            {"★★★★★".split("").map((star, index) => (
                                <span key={index}>☆</span>
                            ))}
                        </div>
                    </div>

                    <form
                        id="myform"
                        onSubmit={sendMessage}
                        className="space-y-4">
                        <input
                            id="name"
                            type="text"
                            placeholder={t("comment.desc1")}
                            className="w-full border rounded-md p-2"
                        />
                        <input
                        id="number"
                        type="tel"
                        placeholder={t("contact.tel")}
                        pattern="^\+998\d{9}$"
                        title="Telefon raqam +998 bilan boshlanib, jami 9 ta raqamdan iborat bo‘lishi kerak"
                        className="w-full border  rounded-lg px-4 py-3 focus:outline-none"
                        required
                        defaultValue="+998"
                        onFocus={(e) => {
                            if (!e.target.value.startsWith("+998")) {
                                e.target.value = "+998";
                            }
                        }}
                        onChange={(e) => {
                            const cleaned = e.target.value.replace(/[^\d]/g, "");
                            e.target.value = "+998" + cleaned.slice(3, 12);
                        }}
                    />
                        <textarea
                            id="message"
                            placeholder={t("comment.desc3")}
                            rows="4"
                            className="w-full border rounded-md p-2"
                        ></textarea>

                        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold">
                            {t("comment.button")}
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}
