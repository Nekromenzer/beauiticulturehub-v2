import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import About from "./about";

export const metadata = {
  title: "About Us - Beauiticulturehub",
  description:
    "Learn about Beauiticulturehub and our passionate team of beauty experts dedicated to helping you achieve your beauty goals.",
  alternates: {
    canonical: "https://beauiticulturehub.com/about"
  },
  openGraph: {
    title: "About Us - Beauiticulturehub",
    description: "Meet the team behind Beauiticulturehub",
    type: "website",
    url: "https://beauiticulturehub.com/about"
  }
};

export default async function AboutPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <About settings={settings} authors={authors} />;
}

// export const revalidate = 60;
