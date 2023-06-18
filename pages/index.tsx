import Image from "next/image";
import Link from "next/link";

import { Button } from "@/button";
import { Icon } from "@iconify/react";
import { ComponentProps } from "react";
import { cx } from "class-variance-authority";

interface ServiceProps extends ComponentProps<"article"> {
  src: string;
  alt: string;
  children: string;
  link: string;
}

function Service({ src, alt, children, link }: ServiceProps) {
  return (
    <article className="grid max-w-xs gap-4 justify-items-center auto-rows-[auto_1fr_max-content]">
      <Image
        className="object-cover !static rounded-lg aspect-square"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={src}
        alt={alt}
        fill
      />
      <h4 className="text-2xl font-medium text-center">{children}</h4>
      <a
        className="self-end"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="large">Visit Website</Button>
      </a>
    </article>
  );
}

interface ArticleProps extends ComponentProps<"article"> {
  src: string;
  alt: string;
  children: string;
  link: string;
}

function Article({ src, alt, children, link }: ArticleProps) {
  return (
    <article className="grid max-w-xs gap-4 justify-items-center auto-rows-[auto_1fr_max-content]">
      <Image
        className="object-cover !static rounded-lg aspect-square"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={src}
        alt={alt}
        fill
      />
      <h4 className="text-2xl font-medium text-center">{children}</h4>
      <a
        className="self-end"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="large">Visit Website</Button>
      </a>
    </article>
  );
}

interface HeaderProps extends ComponentProps<"header"> {}

function Header({ className = "border-india-green", children }: HeaderProps) {
  return (
    <header className="grid gap-4 mx-auto justify-items-center">
      <h2 className="text-5xl font-bold">{children}</h2>
      <hr className={cx("max-w-[11rem] border-t-[0.2rem] w-full", className)} />
    </header>
  );
}

const QUICK_LINKS = [{}];

export default function Home() {
  return (
    <>
      <header className="sticky inset-x-0 top-0 z-50 flex justify-between w-full py-6 mx-auto max-w-screen-2xl px-28">
        <a
          className="flex items-center gap-2"
          href="https://al-ameen-centre.com"
          target="_self"
          rel="noopener noreferrer"
        >
          <Image
            src="/al-ameen-centre.svg"
            alt="Al-Ameen Centre Logo"
            className="text-india-green"
            width={38}
            height={38}
            priority
          />
          <h1>Al-Ameen Centre</h1>
        </a>

        <nav className="flex items-center gap-10">
          <ul className="flex gap-10">
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">About Us</Link>
            </li>
            <li>
              <Link href="">Our Programs</Link>
            </li>
          </ul>

          <address className="flex items-center gap-1.5 not-italic">
            <span className="p-2 text-xl rounded-full bg-india-green">
              <Icon icon="material-symbols:call" />
            </span>
            <a href="tel:+234-9074248867">+234-9074248867</a>
          </address>

          <Button>Donate Now</Button>
        </nav>
      </header>

      <section className="grid grid-cols-2 gap-10 mx-auto py-14 max-w-screen-2xl px-28">
        <article className="grid gap-6 py-12">
          <h2 className="font-bold text-[4.25rem] leading-tight">
            Welcome to <span className="whitespace-nowrap">Al-Ameen</span>{" "}
            Centre
          </h2>
          <h3 className="text-5xl font-semibold">
            Building a One-Stop Centre of Islamic Excellence
          </h3>
          <p className="text-lg">
            At Al-Ameen Centre, we strive to create a community hub that fosters
            Islamic excellence and provides a comprehensive range of services to
            meet the diverse needs of our community. Join us on this journey and
            be our honored guest.
          </p>
          <Button variant="primary" size="large">
            Join Us
          </Button>
        </article>
        <figure className="relative">
          <Image className="object-cover" alt="Masjid" src="/masjid.jpg" fill />
        </figure>
      </section>

      <section className="grid gap-10 mx-auto py-14 max-w-screen-2xl px-28">
        <Header>Our Services</Header>

        <div className="flex flex-wrap justify-center gap-12 xl:gap-6 xl:justify-between">
          <Service
            src="/reading-quran.jpg"
            alt="people reading the Qur'an"
            link=""
          >
            Al-Ameen Centre for Quran Memorisation
          </Service>
          <Service
            src="/estate-compound.jpg"
            alt="estate compound with masjid behind"
            link=""
          >
            Al-Ameen Estate
          </Service>
          <Service
            src="/laptop-on-desk.jpg"
            alt="macbook laptop on the desk"
            link=""
          >
            Al-Ameen Tech Hub
          </Service>
        </div>
      </section>

      <section className="bg-india-green py-14">
        <div className="grid gap-10 mx-auto max-w-screen-2xl px-28">
          <Header className="border-white">Latest Articles</Header>
        </div>
      </section>

      <footer>
        <section>
          <div>
            <header>
              <h5>Quick Links</h5>
              <hr className="w-full border-t max-w-[4.75rem]" />
            </header>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Our Programmes</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <header>
              <h5>Useful Links</h5>
              <hr className="w-full border-t max-w-[4.75rem]" />
            </header>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Disclaimer</li>
              <li>Support</li>
            </ul>
          </div>
        </section>

        <time>
          Copyright © Al-Ameen Centrre ${new Date().getUTCFullYear()}. All
          rights reserved.
        </time>
      </footer>
    </>
  );
}
