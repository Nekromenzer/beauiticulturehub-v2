import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a small passionate team.</p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt="avatar"
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          Welcome to Beauiticulturehub, your ultimate destination for
          all things beauty! Dive into a world of expert insights,
          practical tips, and transformative tutorials designed to
          enhance your beauty journey. At Beauiticulturehub,
          we&lsquo;re passionate about empowering beauty enthusiasts
          with the knowledge and tools they need to look and feel
          their best. From skincare secrets to makeup mastery and
          haircare hacks, our blog covers a wide range of topics to
          cater to every aspect of your beauty routine.
        </p>
        <p>
          Discover the latest beauty trends, product reviews, and
          industry insights curated by our team of beauty experts.
          Whether you&lsquo;re a beauty novice or a seasoned pro,
          Beauiticulturehub is your go-to resource for all your beauty
          needs. Unlock your beauty potential and join our community
          of like-minded individuals on a journey to radiant
          confidence. Let Beauiticulturehub be your trusted companion
          in your pursuit of beauty excellence.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
