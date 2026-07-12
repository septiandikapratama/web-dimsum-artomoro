export type Outlet = {
  num: string;
  name: string;
  address: string;
  whatsapp: string;
  lat: number;
  lng: number;
  isMain?: boolean;
};

export const outlets: Outlet[] = [
  {
    num: "01",
    name: "Artomoro 53 Sekampung",
    address:
      "Teras Alfamart Dam 53, Jl. Raya Batanghari, Selo Rejo, Kec. Batanghari, Kabupaten Lampung Timur",
    whatsapp: "0831-6802-8473",
    lat: -5.133689154513996,
    lng: 105.41034052035268,
  },
  {
    num: "02",
    name: "Artomoro 54 Sekampung",
    address: "Pojok Indomaret 48, Jl. Raya Sidomulyo, Kec. Sekampung, Kab. Lampung Timur",
    whatsapp: "0877-1477-8815",
    lat: -5.151284481995554,
    lng: 105.40468277364711,
  },
  {
    num: "03",
    name: "Artomoro Batanghari",
    address: "Jl Raya Batanghari, Kec. Batanghari, Kab. Lampung Timur",
    whatsapp: "0813-9307-3293",
    lat: -5.14023170415348,
    lng: 105.37542503091927,
  },
  {
    num: "04",
    name: "Artomoro Simpang Kampus",
    address: "Jl. Ki Hajar Dewantara No.5, Iringmulyo, Kec. Metro Timur, Kota Metro, Lampung",
    whatsapp: "0878-6280-6718",
    lat: -5.119558418382373,
    lng: 105.32107039762845,
    isMain: true,
  },
  {
    num: "05",
    name: "Artomoro 29 Banjarsari",
    address:
      "Dekat Bunderan 29, Jl. Pattimura No.29, Banjarsari, Kec. Metro Utara, Kota Metro, Lampung",
    whatsapp: "0857-8942-4387",
    lat: -5.094116928978837,
    lng: 105.2836368268575,
  },
  {
    num: "06",
    name: "Artomoro Way Halim",
    address: "Jl. Urip Sumoharjo No.117, Way Halim Permai, Kec. Sukarame, Kota Bandar Lampung",
    whatsapp: "0857-6472-2971",
    lat: -5.391711506682683,
    lng: 105.2804399432473,
  },
];
