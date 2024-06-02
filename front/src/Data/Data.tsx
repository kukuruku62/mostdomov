import { IDataList } from "../types/IFooter";



export const hospitalData: IDataList = {
  titleList: "Mobilný hospic Most domov",
  subtitleList: "Sprevádzanie zomierajúcich pacientov a ich rodín.",
  items: [
    { title: "Kód poskytovateľa:", text: "P01142630201" },
    { title: "Lekárka:", text: "Mudr. Zuzana Hajster Vozárová" },
    { title: "Zdr. sestra:", text: "Mgr. Simona Hornáčková, dipl.s." },
    { title: "Adresa:", text: "91701 Trnava, Malženická cesta 3" },
  ],
};

export const organizationData: IDataList = {
  titleList: "Most domov, o.z.",
  subtitleList: "Vzdelávanie, osvetové aktivity, spolupráca, prevádzka.",
  items: [
    { title: "IČO:", text: "54894247" },
    { title: "DIČ:", text: "2122166673" },
    { title: "IBAN:", text: "SK 0000 0000 0000 0000" },
    { title: "Adresa:", text: "84105 Bratislava, Veternicová 3116/22" },
  ],
};

export const contacts = {
  phone: "0918666685",
  email: "info@mostdomov.sk",
  openHours: "PO – PI: 8:00 – 16:00",
} as const;