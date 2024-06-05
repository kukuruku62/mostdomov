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

export const mobileHospitalData = [
  {
    title: "Ponúkame:",
    items: [
      "Odborná paliatívna medicína a starostlivosť v domácom prostredí.",
      "Pokojný, rešpektujúci a empatický prístup.",
      "Materiálno-technologické zabezpečenie lekárskej a ošetrovateľskej starostlivosti.",
      "Podpora a sprevádzanie pacienta a celej jeho rodiny.",
      "Vytvorenie pocitu istoty a bezpečia pre pacienta a jeho rodinu na ich poslednej spoločnej ceste, v domácom prostredí.",
    ],
  },
  {
    title: "Komu sú naše služby/ domáca paliatívna starostlivosť určené:",
    items: [
      "Pacientom s nevyliečiteľným onkologickým, ako i iným ochorením s ukončenou kauzálnou liečbou, ktorí túžia stráviť záver života doma so svojimi blízkymi.",
      "Rodine, ktorá má možnosť vytvoriť podmienky, aby ich blízky zomieral doma a vedia mu zabezpečiť 24 hodinovú opatrovateľskú starostlivosť.",
    ],
  },
  {
    title: "Ako pri domácej paliatívnej starostlivosti postupujeme:",
    items: [
      "Prijatie pacienta do starostlivosti – formálne úkony.",
      "Vyšetrenie pacienta lekárom v domácom prostredí.",
      "Úprava liečby, aby symptómy, ktoré sprevádzajú umieranie boli kontrolované, pacient nemal bolesti a netrpel.",
      "Zaučenie rodinných príslušníkov do ošetrovateľských úkonov nevyhnutných pre zvládanie situácií, ktoré záver života sprevádzajú.",
      "Pravidelné návštevy lekára a/ alebo sestry – kontrola, prípadná úprava liečby, sprevádzanie, podpora pacienta a rodiny.",
      "Telefonické konzultácie podľa potreby.",
      "Psychologická a spirituálna podpora v situácii, ktorá nie je jednoduchá pre umierajúceho, ale ani pre rodinu opatrujúcu svojho blízkeho.",
      "Sociálna poradňa – podľa špecifických potrieb rodiny.",
      "Odľahčovacia služba – v prípade potreby rodiny.",
    ],
    detailTitle:
      "Návštevy v domácom prostredí – sprevádzanie a ošetrovanie po dohode s pacientom a jeho rodinou:",
    detailText: "Pondelok – Piatok  od 8:30 – 16:00 , prípadne dohoda.",
  },
  {
    title: "Kontaktujte nás:",
    items: [
      "Ak Váš blízky potrebuje paliatívnu starostlivosť a túži stráviť posledné chvíle v domácom prostredí.",
      "Ak potrebujete konzultovať zdravotný stav nevyliečiteľne chorého pacienta a ďalšie kroky.",
      "Ak máte akékoľvek otázky ohľadne paliatívnej starostlivosti a sprevádzaní zomierajúcich, či už v domácom prostredí alebo zdravotníckom zariadení.",
    ],
  },
];

export const serviseData = [
  {
    title: "Kto sú naši klienti:",
    items: [
      "Ľudia s vážnym ochorením v závere života.",
      "Ľudia so zdravotným postihnutím.",
      "Ľudia v seniorskom veku so zníženou sebestačnosťou.",
    ],
  },
  {
    title: "Čo vám ponúkame:",
    items: [
      "Pomoc pri zvládaní bežných úkonov starostlivosti o vlastnú osobu (napr. podávanie jedla, obliekanie, presun na lôžko)",
      "Pomoc pri osobnej hygiene (napr. kúpanie, umývanie vlasov, použitie WC)",
      "Socioterapeutické činnosti (napr. trénovanie pamäte).",
      "Aktivizačné činnosti (napr. predčítanie)",
      "Zdravotnícke úkony (napr. podávanie liekov, infúzie, preväzy) podľa dohody a potreby.",
      "Masáže",
      "V prípade nestabilného alebo zhoršujúceho sa zdravotného stavu je zdravotná sestra schopná poskytnúť bezodkladnú zdravotnú starostlivosť a požadované zdravotné úkony.",
    ],
  },
  {
    title: "Čo potrebujete vedieť:",
    items: [
      "Pre splnenie podmienky odľahčiť ošetrujúcej osobe je potrebné, aby bol ošetrujúci so svojim blízkym v pravidelnom kontakte najmenej 3x týždenne.",
      "V prípade nestabilného alebo zhoršujúceho sa zdravotného stavu, alebo ak sú vyžadované zdravotnícke úkony, je prítomnosť ošetrujúcej osoby nevyhnutná počas poskytovania odľahčovacej služby.",
      "Odľahčovaciu službu a služby mobilného hospicu je možné kombinovať, zároveň však na seba nie sú viazané.",
    ],
  },
  {
    title: "Naše ciele:",
    items: [
      "Zastúpiť starajúcu osobu, umožniť jej priestor na odpočinok, vybavenie osobných záležitostí, sebarealizáciu a predísť tým jej možnému preťaženiu a sociálnej izolácii.",
      "Umožniť klientovi zostať vo svojom prirodzenom prostredí.",
    ],
  },
  {
    title: "Aké sú naše zásady:",
    items: [
      "Zachovanie dôstojnosti klienta.",
      "Diskrétnosť.",
      "Nestrannosť a rovný prístup.",
      "Rešpekt k navyknutému spôsobu života klientov a k ich právu na súkromie.",
    ],
  },
];
