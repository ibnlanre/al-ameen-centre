import Image from "next/image";
import Link from "next/link";

import { Button } from "../components/button";
import { Icon } from "@iconify/react";
import { ComponentProps, ReactNode } from "react";
import { cx } from "class-variance-authority";
import { KeyDeliverables } from "../components";

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

export default function Home() {
  
  return (
    <>
      <header className="sticky inset-x-0 top-0 z-50 flex justify-between w-full py-6 mx-auto bg-white max-w-screen-2xl px-28">
        <a
          className="flex items-center gap-2"
          href="https://al-ameen-centre.com"
          target="_self"
          rel="noopener noreferrer"
        >
          <Image
            src="/al-ameen-centre.jpg"
            alt="Al-Ameen Centre Logo"
            className="text-india-green"
            width={38}
            height={38}
            priority
          />
          <h1>Al-Ameen Centre for Quran Memorization</h1>
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
              <Link href="">Quran Programmes</Link>
            </li>
            <li>
              <Link href="">Resources</Link>
            </li>
          </ul>

          <Button className="text-white">Login</Button>
        </nav>
      </header>

      <section className="mx-auto py-14 max-w-screen-2xl px-[clamp(0.5rem,5vw,7rem)]">
        <div className="flex flex-col-reverse gap-10 text-white md:flex-row bg-india-green rounded-3xl p-[clamp(1rem,5vw,7rem)]">
          <article className="grid gap-6 lg:basis-3/5">
            <div className="flex items-center justify-end gap-[3vw]">
              <p className="grid gap-3 font-quran">
                <bdi className="text-[clamp(0.75rem,3vw,1.875rem)]">
                  قال رسول الله صلى الله عليه وسلم:
                </bdi>
                <bdi className="text-[clamp(1rem,4vw,3rem)]">
                  ”خيركم من تعلم القرآن وعلمه“
                </bdi>
              </p>

              <figure className="relative basis-1/5 lg:hidden">
                <Image
                  className="object-contain aspect-square !static"
                  alt="Masjid"
                  src="/flower-intro.png"
                  fill
                />
              </figure>
            </div>
            <h3 className="text-[clamp(1rem,2.25vw,1.875rem)]">
              The Messenger of Allah peace be upon him said:
            </h3>
            <p className="text-[clamp(1.5rem,3vw,3rem)] font-medium leading-tight">
              The best of you is he who learns the Qur'an and teaches it”
            </p>

            <section className="flex flex-wrap gap-3">
              <Button
                className="uppercase bg-white rounded-lg text-india-green text-[clamp(1rem,2vw,1.5rem)] px-[clamp(1rem,3vw,2.75rem)]"
                variant="filled"
                radius="lg"
              >
                ENROL NOW
              </Button>
              <Button
                className="uppercase text-[clamp(1rem,2vw,1.5rem)] px-[clamp(1rem,3vw,2.75rem)]"
                variant="outline"
                radius="lg"
              >
                FREE TRIAL
              </Button>
            </section>
          </article>
          <figure className="relative hidden lg:block md:basis-2/5">
            <Image
              className="object-contain aspect-square !static"
              alt="Masjid"
              src="/flower-intro.png"
              fill
            />
          </figure>
        </div>
      </section>

      <section className="flex items-center grid-cols-2 mx-auto gap-[clamp(1rem,5vw,7rem)] md:flex-row flex-col-reverse py-14 max-w-screen-2xl px-[clamp(0.5rem,5vw,7rem)]">
        <article className="grid flex-1 auto-rows-max gap-11">
          <div className="grid gap-2 auto-rows-max">
            <header className="grid auto-rows-max">
              <p className="pl-5 text-lg font-semibold uppercase border-l-2 border-india-green">
                About Us
              </p>
              <h2 className="text-5xl font-semibold leading-tight">
                Al-Ameen Quran Memorization Centre
              </h2>
            </header>

            <div className="grid gap-4 auto-rows-max">
              <p>
                Al-Ameen Quran Memorization Center is a reputable institution
                dedicated to promoting the understanding, recitation, and
                memorization of the Holy Quran. With a passion for spreading the
                divine message of the Quran, we provide a supportive and
                nurturing environment for learners of all ages and backgrounds.
              </p>

              <p>
                At Al-Ameen Quran Center, our mission is to facilitate a deep
                connection between individuals and the Quran, fostering a love
                for the Book of Allah and enabling students to develop a strong
                relationship with its teachings. We strive to equip our students
                with the knowledge, skills, and spiritual guidance necessary to
                become true ambassadors of the Quranic principles.
              </p>
            </div>
          </div>

          <Button className="font-medium text-white" size="large">
            Contact Us
          </Button>
        </article>
        <figure className="relative flex-1">
          <Image
            className="object-contain aspect-square !static"
            alt="Masjid"
            src="/quran.png"
            fill
          />
        </figure>
      </section>

      <KeyDeliverables />

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
