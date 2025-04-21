import React from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { BiMessageDetail } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

const Contact = () => {
    const { t } = useTranslation();

    const sendMessage = (event) => {
        event.preventDefault();

        const token = "8091527756:AAErWWMRg6UTuaI3RIVjiizXhwasqEIhlFQ";
        const chat_id = "6643238247";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        const number = document.getElementById("number").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!number || !email || !message) {
            alert("Iltimos, barcha majburiy maydonlarni to‘ldiring!");
            return;
        }

        const messageContent = `
📝 Yangi xabar:
📞 Telefon: ${number}
📧 Email: ${email}
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
        <div className="container max-w-[1440px] mx-auto px-4 py-12 md:mt-20 mt-10">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
                {/* Contact Form - Chap taraf */}
                <form data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    id="myform"
                    onSubmit={sendMessage}
                    className="w-full lg:w-1/2 space-y-4"
                >
                    <h2 className="text-black font-extrabold text-3xl md:text-5xl  mb-10">
                        {t("contact.title")}
                    </h2>

                    <input
                        id="email"
                        type="email"
                        placeholder={t("contact.email")}
                        className="w-full border border-red-200 rounded-lg px-4 py-3 focus:outline-none"
                        required
                    />
                    <input
                        id="number"
                        type="tel"
                        placeholder={t("contact.tel")}
                        pattern="^\+998\d{9}$"
                        title="Telefon raqam +998 bilan boshlanib, jami 9 ta raqamdan iborat bo‘lishi kerak"
                        className="w-full border border-red-200 rounded-lg px-4 py-3 focus:outline-none"
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
                        placeholder={t("contact.message")}
                        rows="5"
                        className="w-full border border-red-200 rounded-lg px-4 py-3 focus:outline-none resize-none"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-red-500 text-white  font-bold py-3 px-10 rounded-lg  cursor-pointer  transition-all"
                    >
                        {t("contact.button")}
                    </button>
                </form>

                {/* Google Map - O‘ng taraf */}
                <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.6556565564183!2d69.28311557587605!3d41.338100571306114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5f1f5cfd49%3A0x110bc2a5ed9856b7!2sLIMSA!5e0!3m2!1sru!2s!4v1745156732902!5m2!1sru!2s"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            {/* Aloqa ma'lumotlari */}
            <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-4 mt-10 md:mt-20">
                {/* Email */}
                <div className="flex items-start gap-3 md:w-1/3">
                    <BiMessageDetail className="text-red-500 text-3xl" />
                    <div className="flex items-center justify-between">
                        <p className="text-black text-base md:text-xl font-medium">Email:</p>
                        <p className="text-gray-700 text-sm md:text-[14px]">sleepnest@gmail.com</p>
                    </div>
                </div>

                {/* Telefon */}
                <div className="flex items-start gap-3 md:w-1/3">
                    <BsTelephone className="text-red-500 text-3xl" />
                    <div className="flex items-center justify-between">
                        <h1 className="text-black text-base md:text-xl font-medium">Tel:</h1>
                        <p className="text-gray-700 text-sm md:text-[14px]">
                            +998 94 033 72 12           +998 91 777 73 68
                        </p>
                    </div>
                </div>

                {/* Manzil */}
                <div className="flex items-start gap-3 md:w-1/3">
                    <SlLocationPin className="text-red-500 text-3xl" />
                    <div className="flex items-center justify-between">
                        <p className="text-gray-700 text-sm md:text-[14px]">{t("contact.adress")}</p>
                    </div>
                </div>
            </div>


            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default Contact;
