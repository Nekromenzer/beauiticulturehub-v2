import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export const metadata = {
  metadataBase: new URL("https://beauiticulturehub.com"),
  title: {
    default:
      "Beauiticulturehub - Beauty Tips, Trends & Expert Advice",
    template: "%s | Beauiticulturehub"
  },
  description:
    "Discover expert beauty insights, skincare secrets, makeup tutorials, and haircare tips at Beauiticulturehub. Your ultimate destination for beauty transformation.",
  keywords: [
    "beauty blog",
    "skincare tips",
    "makeup tutorials",
    "haircare advice",
    "beauty trends",
    "cosmetics",
    "beauty products"
  ],
  authors: [
    {
      name: "Beauiticulturehub Team",
      url: "https://beauiticulturehub.com"
    }
  ],
  creator: "Beauiticulturehub",
  publisher: "Beauiticulturehub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://beauiticulturehub.com",
    siteName: "Beauiticulturehub",
    title: "Beauiticulturehub - Beauty Tips, Trends & Expert Advice",
    description:
      "Discover expert beauty insights, skincare secrets, makeup tutorials, and haircare tips.",
    images: [
      {
        url: "/img/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Beauiticulturehub"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauiticulturehub - Beauty Tips & Expert Advice",
    description:
      "Your ultimate destination for beauty transformation",
    images: ["/img/og-default.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const analyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  const adsenseClientId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}>
      <body className="text-gray-800 antialiased dark:bg-black dark:text-gray-400">
        {adsenseClientId ? (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
            strategy="lazyOnload"
            crossOrigin="anonymous"
          />
        ) : null}
        <Providers>{children}</Providers>
      </body>
      {analyticsId ? <GoogleAnalytics gaId={analyticsId} /> : null}
    </html>
  );
}
