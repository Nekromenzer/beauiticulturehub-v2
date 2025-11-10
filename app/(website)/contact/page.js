import { getSettings } from "@/lib/sanity/client";
import Contact from "./contact";

export const metadata = {
  title: "Contact Us - Beauiticulturehub",
  description:
    "Get in touch with Beauiticulturehub. We are here to help with your beauty questions and feedback.",
  alternates: {
    canonical: "https://beauiticulturehub.com/contact"
  },
  openGraph: {
    title: "Contact Us - Beauiticulturehub",
    description: "Get in touch with our beauty experts",
    type: "website",
    url: "https://beauiticulturehub.com/contact"
  }
};

export default async function ContactPage() {
  const settings = await getSettings();
  return <Contact settings={settings} />;
}

// export const revalidate = 60;
