import { Deliverables } from "./deliverables";

export function KeyDeliverables() {
    return (
      <section className="flex items-center grid-cols-2 mx-auto gap-[clamp(1rem,5vw,7rem)] md:flex-row flex-col-reverse py-14 max-w-screen-2xl px-[clamp(0.5rem,5vw,7rem)]">
        <header className="grid text-center auto-rows-max justify-items-center">
          <p className="pl-5 text-lg font-semibold uppercase border-l-2 border-india-green">
            KEY DELIVERABLES
          </p>
          <h2 className="text-5xl font-semibold leading-tight">
            Why you should choose us
          </h2>
          <p>
            Unleashing the Power of Quranic Excellence: Why Choose Us for Your
            Quran memorization journey
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-12 xl:gap-6 xl:justify-between">
          <Deliverables title="Experienced Instructors">
            We have a team of experienced and knowledgeable instructors who are
            well-versed in the art of Quranic memorization
          </Deliverables>
          <Deliverables title="Structured Curriculum">
            Our Quran Memorization program follows a well-structured curriculum
            designed to facilitate a gradual and systematic memorization
            process.
          </Deliverables>
          <Deliverables title="Emphasis on Tajweed">
            Our instructors pay special attention to Tajweed, helping students
            develop a beautiful and accurate recitation style.
          </Deliverables>
          <Deliverables title="Condusive Environment">
            We create a positive atmosphere where students feel motivated,
            inspired, and empowered to excel in their memorization journey.
          </Deliverables>
          <Deliverables title="Revision and Evaluation">
            We incorporates regular revision sessions and evaluations to
            reinforce memorization, ensuring that students retain what they have
            learned.
          </Deliverables>
          <Deliverables title="Online Qur'an Learning">
            We offers online Quran learning programs, allowing students to learn
            from the comfort of their homes.
          </Deliverables>
        </div>
      </section>
    );
}