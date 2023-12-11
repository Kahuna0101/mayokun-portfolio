import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";

function AreaCard({ about }) {
  return (
    <Card className="flex max-w-sm w-full justify-start items-start flex-col m-6 rounded-t-xl transition-transform duration-500 transform hover:scale-110">
      <div className="relative w-full h-[25vh]">
        <Image
        src={about.image}
        alt={about.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-xl"
      />
      </div>

      <CardHeader>
        <CardTitle>{about.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="p-text line-clamp-6">{about.description}</p>
      </CardContent>
    </Card>
  );
}

export default AreaCard;
