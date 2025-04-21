import { useTranslation } from "react-i18next"; // Tarjima olish uchun

// Mahsulotlarning rasmlari
import kvadrat from "../assets/kvadrat.jpg";
import ikat from "../assets/ikat.jpg";
import davra from "../assets/davra.jpg";
import geometriya from "../assets/geometriya.jpg";
import tropik from "../assets/tropik.jpg";
import bambi from "../assets/bambi.jpg";
import vizantiya from "../assets/vizantiya.jpg";
import bog from "../assets/bog.jpg";
import pat from "../assets/pat.jpg";
import lavanda from "../assets/lavanda.jpg";
import safari from "../assets/safari.jpg";
import ametist from "../assets/ametist.jpg";
import shivali from "../assets/shivali.jpg";
import zumrad from "../assets/zumrad.jpg";
import malaxit from "../assets/malaxit.jpg";
import bahor from "../assets/bahor.jpg";
import kuz from "../assets/kuz.jpg";
import moviy from "../assets/moviy.jpg";
import suv from "../assets/suv.jpg";
import plaid from "../assets/plaid.jpg";
import vintage from "../assets/vintage.jpg";
import summer2 from "../assets/summer2.jpg";
import fransuz from "../assets/fransuz.jpg";
import qoy from "../assets/qoy.jpg";
import alp from "../assets/alp.jpg";
import ilhom from "../assets/ilhom.jpg";
import yashil from "../assets/yashil.jpg";
import togli from "../assets/togli.jpg";
import sakura from "../assets/sakura.jpg";
import zaytun from "../assets/zaytun.jpg";

const useItems = () => {
  const { t } = useTranslation(); // Tarjima olish

  // Barcha to'plamlar
  const winterItems = [
    { id: 1, name: t("winter.desc1"), img: kvadrat, category: "qish" },
    { id: 2, name: t("winter.desc2"), img: ikat, category: "qish" },
    { id: 3, name: t("winter.desc3"), img: davra, category: "qish" },
    { id: 4, name: t("winter.desc4"), img: geometriya, category: "qish" },
    { id: 5, name: t("winter.desc5"), img: tropik, category: "qish" },
    { id: 6, name: t("winter.desc6"), img: bambi, category: "qish" },
    { id: 7, name: t("winter.desc7"), img: vizantiya, category: "qish" },
    { id: 8, name: t("winter.desc8"), img: bog, category: "qish" },
    { id: 9, name: t("winter.desc9"), img: pat, category: "qish" },
    { id: 10, name: t("winter.desc10"), img: lavanda, category: "qish" },
  ];

  const autumnItems = [
    { id: 11, name: t("autum.desc1"), img: safari, category: "kuz" },
    { id: 12, name: t("autum.desc2"), img: ametist, category: "kuz" },
    { id: 13, name: t("autum.desc3"), img: shivali, category: "kuz" },
    { id: 14, name: t("autum.desc4"), img: zumrad, category: "kuz" },
    { id: 15, name: t("autum.desc5"), img: malaxit, category: "kuz" },
    { id: 16, name: t("autum.desc6"), img: bahor, category: "kuz" },
    { id: 17, name: t("autum.desc7"), img: kuz, category: "kuz" },
    { id: 18, name: t("autum.desc8"), img: moviy, category: "kuz" },
    { id: 19, name: t("autum.desc9"), img: suv, category: "kuz" },
    { id: 20, name: t("autum.desc10"), img: plaid, category: "kuz" },
  ];

  const summerItems = [
    { id: 21, name: t("summer.desc1"), img: vintage, category: "yoz" },
    { id: 22, name: t("summer.desc2"), img: summer2, category: "yoz" },
    { id: 23, name: t("summer.desc3"), img: fransuz, category: "yoz" },
    { id: 24, name: t("summer.desc4"), img: qoy, category: "yoz" },
    { id: 25, name: t("summer.desc5"), img: alp, category: "yoz" },
    { id: 26, name: t("summer.desc6"), img: ilhom, category: "yoz" },
    { id: 27, name: t("summer.desc7"), img: yashil, category: "yoz" },
    { id: 28, name: t("summer.desc8"), img: togli, category: "yoz" },
    { id: 29, name: t("summer.desc9"), img: sakura, category: "yoz" },
    { id: 30, name: t("summer.desc10"), img: zaytun, category: "yoz" },
  ];

  // Barcha to'plamlarni bitta massivga birlashtirish
  const allItems = [
    ...winterItems,
    ...autumnItems,
    ...summerItems,
  ];

  return allItems;
};

export default useItems;
