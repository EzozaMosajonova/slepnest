import React from "react";
import logo from "../../assets/Logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const { t } = useTranslation();

  const sendMessage = (event) => {
    event.preventDefault();

    const token = "8091527756:AAErWWMRg6UTuaI3RIVjiizXhwasqEIhlFQ";
    const chat_id = "6643238247";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const email = event.target.email.value.trim();

    if (!email) {
      toast.error("Iltimos, email kiriting!");
      return;
    }

    const messageContent = `Yangi obuna:\nEmail: ${email}`;

    axios
      .post(url, {
        chat_id: chat_id,
        text: messageContent,
      })
      .then(() => {
        toast.success("Xabar muvaffaqiyatli yuborildi!");
        event.target.reset();
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        toast.error("Xatolik yuz berdi. Keyinroq urinib ko‘ring.");
      });
  };

  return (
    <footer className="bg-white text-black md:mt-10 ">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {/* Logo va tavsif */}
        <div>
          <Link to="/">
          <img src={logo} alt="SleepNest" className="w-32 sm:w-40 md:w-48 mb-4 cursor-pointer" /></Link>
          <p className="text-base text-[16px] sm:text-lg md:text-xl text-gray-600">
            {t("footer.desc")}
          </p>
        </div>

        {/* Menyu */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            {t("footer.title1")}
          </h3>
          <ul className="space-y-1 text-gray-700 text-base sm:text-lg">
            <li><Link className="hover:text-red-500" to="/">{t("footer.menyuTitle")}</Link></li>
            <li><Link className="hover:text-red-500" to="/collection">{t("footer.menyuTitle2")}</Link></li>
            <li><Link className="hover:text-red-500" to="/about">{t("footer.menyuTitle3")}</Link></li>
            <li><Link className="hover:text-red-500" to="/contact">{t("footer.contact")}</Link></li>
          </ul>
        </div>

        {/* Kontaktlar */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            {t("footer.contact")}
          </h3>
          <ul className="text-base sm:text-lg text-gray-700 space-y-1">
            <li>{t("footer.adress")}</li>
            <li>{t("footer.email")}</li>
            <li>Telegram: sleepnest</li>
            <li>+998 94 033 72 12</li>
          </ul>
        </div>

        {/* Obuna */}
        <div>
          <h3 className="text-base sm:text-lg font-bold mb-2">
            {t("footer.emailTitle")}
          </h3>
          <form
            id="myform"
            onSubmit={sendMessage}
            className="flex items-center border border-gray-400 rounded-full overflow-hidden h-12"
          >
            <input
              id="email"
              name="email"
              type="email"
              placeholder={t("footer.emailTitle")}
              className="md:px-4 md:py-2 px-2 py-0  w-full text-sm outline-none text-gray-700"
            />
            <button
              type="submit"
              className="bg-red-600 text-white md:px-6 md:py-4 px-5 py-3 text-sm font-medium hover:bg-red-700 transition-all"
            >
              {t("footer.button")}
            </button>
          </form>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
            {t("footer.emaildesc")}
          </p>
        </div>
      </div>

      {/* Pastki qora chiziq */}
      <div className="bg-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6 sm:py-10">
          <div className="text-gray-500 font-medium flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[10px] sm:text-base md:text-lg">
              © 2024 MChJ Ekologik Toza Uyqu Mahsulotlari Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
