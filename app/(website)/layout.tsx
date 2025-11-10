import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    metadataBase: new URL(
      settings?.url || "https://beauiticulturehub.com"
    ),
    title: {
      default: settings?.title || "Beauiticulturehub - Beauty Blog",
      template: "%s | Beauiticulturehub"
    },
    description:
      settings?.description ||
      "Expert beauty tips, skincare advice, makeup tutorials and haircare guides. Transform your beauty routine with Beauiticulturehub.",
    keywords: [
      "beauty tips",
      "skincare routine",
      "makeup tutorials",
      "haircare tips",
      "beauty products",
      "cosmetics reviews",
      "beauty trends",
      "natural beauty",
      "beauty blog"
    ],
    authors: [{ name: "Beauiticulturehub Team" }],
    creator: "Beauiticulturehub",
    publisher: "Beauiticulturehub",
    alternates: {
      canonical: settings?.url || "https://beauiticulturehub.com",
      types: {
        "application/rss+xml":
          "https://beauiticulturehub.com/feed.xml"
      }
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: settings?.url || "https://beauiticulturehub.com",
      siteName: "Beauiticulturehub",
      title: settings?.title || "Beauiticulturehub - Beauty Blog",
      description:
        settings?.description || "Expert beauty insights and tips",
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/og-default.jpg",
          width: 1200,
          height: 630,
          alt: "Beauiticulturehub"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: settings?.title || "Beauiticulturehub",
      description: settings?.description || "Expert beauty insights",
      images: [
        urlForImage(settings?.openGraphImage)?.src ||
          "/img/og-default.jpg"
      ]
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
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      <Navbar {...settings} />

      <div>{children}</div>

      <Footer {...settings} />
    </>
  );
}
// enable revalidate for all pages in this layout
export const revalidate = 3600;
