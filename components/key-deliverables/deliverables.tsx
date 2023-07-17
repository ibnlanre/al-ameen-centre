import { ComponentProps } from "react";
import Image from "next/image";

interface DeliverablesProps extends ComponentProps<"article"> {
  children: string;
  title: string;
}

const createSource = (value: string) => {
  return value
    .toLowerCase()
    .replace(/[^\s\w]/g, "")
    .replace(/\s+/g, "-");
};

export function Deliverables({ title, children }: DeliverablesProps) {
  const source = `./key-deliverables/${createSource(title)}.svg`;

  return (
    <article className="grid max-w-xs gap-4 justify-items-center auto-rows-[auto_1fr_max-content]">
      <figure className="grid p-3.5 place-content-center rounded-full bg-india-green aspect-square max-w-[4.5rem]">
        <Image
          alt={title}
          className="object-cover !static rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={source}
          fill
        />
      </figure>
      <h4 className="text-2xl font-semibold text-center uppercase">{title}</h4>
      <p className="font-medium text-center">{children}</p>
    </article>
  );
}
