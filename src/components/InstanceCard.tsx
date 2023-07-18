import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  subject: string;
  place: string;
  client: string;
  logoCss: string;
  logo: StaticImageData;
  photo: StaticImageData;
}
export default function InstanceCard({
  subject,
  place,
  client,
  logo,
  photo,
  logoCss,
}: Props) {
  return (
    <div className="flex-none lg:flex-auto">
      <div className="flex flex-col items-start gap-3 shrink py-4 w-96 lg:w-full">
        <div className="flex items-end h-12">
          <Image
            src={logo}
            width={10}
            height={10}
            priority
            alt=""
            className={logoCss}
          />
        </div>
        <Image
          src={photo}
          alt="itlog Logo"
          width={480}
          height={360}
          className="aspect-video object-cover rounded-xl overflow-hidden"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-medium tracking-tighter">{subject}</h3>
          <p className="text-black/70 flex gap-2 items-center">
            <span className="font-medium">{client}</span>
            <span className="h-3 border-l-2 border-gray-300"></span>
            <span>{place}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
