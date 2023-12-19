import "@styles/Global.scss";
import Styles_Sorteio from "@styles/SorteioBack.module.scss";
import Link from "next/link";
import localFont from "next/font/local";

export const metadata = {
  title: {
    default: "Green Mind",
    template: "%s | Green Mind",
  },
  applicationName: "GreenMind",
  description:
    "Organização sem fins lucrativos sobre sustentabilidade e educação ambiental",
  keywords: ["Green Mind", "sustentabilidade", "educação", "ambiente"],
  authors: [{ name: "Miguel Teixeira" }],
  creator: "Miguel Teixeira",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: ["Sustainability", "Environment"],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

// Carregamento das Fontes

const Warownia = localFont({
  src: [
    {
      path: "../Styles/Fonts/warownia-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../Styles/Fonts/warowniablk-webfont.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--Warownia",
  //display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`${Styles_Sorteio.bodyBackground} ${Warownia.variable}`}>
        {/*  <nav>
          <Link href="/equipa">Equipa</Link>
          <Link href="/arquivo">Arquivo</Link>
          <Link href="/publicacoes">Publicações</Link>
          <Link href="/sorteio">Sorteio</Link>
        </nav> */}
        {children}
      </body>
    </html>
  );
}

/* export default function SorteioLayout({ children }) {
  return <section>test</section>;
} */
