import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function PhotoSlider({ works }) {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {works.map((work) => (
          <figure key={work.title} className="shrink-0">
            <div className="overflow-hidden rounded-md relative w-[70vh] h-[45vh]">
              <Image
                src={work.image}
                alt={work.title}
                className="aspect-[3/4] h-fit w-fit object-cover"
                fill
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Title:{" "}
              <span className="font-semibold text-foreground">
                {work.title}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal"/>
    </ScrollArea>
  )
}