"use client";
import bookLeft from "@/assets/app/icons/book-left.jpeg";
import NextImage from "@/components/ui/image";
import { cn } from "@/utils";
import { Quote, Wind } from "lucide-react";
import { useState } from "react";
const qoutes = [
  "The minute I heard my first love story, I started looking for you, not knowing how blind that was.",
  "The minute I heard my first love story, I started looking for you, not knowing how asfjasd that was.",
  "The minute I heard my first love story, I started looking knowing how blind that was.The minute I heard my first love story, I started looking knowing how blind that was.The minute I heard my first love story, I started looking knowing how blind that was.The minute I heard my first love story, I started looking knowing how blind that was.The minute I heard my first love story, I started looking knowing how blind that was.The minute I heard my first love story, I started looking knowing how blind that was.",
];
const getRandomQoute = (qoutes: string[]) =>
  qoutes[Math.floor(Math.random() * qoutes.length)];
export const QuoteCard = ({
  quoteClass = "text-lg",
  btnBottom = "bottom-8",
  btnRight = "right-12",
  btnLeft = "left-12",
}: {
  quoteClass?: string;
  btnLeft?: string;
  btnBottom?: string;
  btnRight?: string;
}) => {
  const [qoute, setQoute] = useState<string>(qoutes[0]);
  return (
    <div className="relative w-full max-md:w-10/12">
      <NextImage alt="rumi-book-left-home" className="w-full" src={bookLeft} />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
        <div className={cn("w-9/12", quoteClass)}>
          <Quote size={20} />
          <p className="flex flex-col">
            <span className="line-clamp-5">{qoute}</span>
          </p>
        </div>

        <button
          onClick={() => setQoute(getRandomQoute(qoutes))}
          className={`w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center absolute ${btnBottom} hover:bg-primary-600 duration-200 ${btnLeft}`}
        >
          <Wind className="rotate-180" />
        </button>
        <button
          onClick={() => setQoute(getRandomQoute(qoutes))}
          className={`w-10 h-10 bg-secondary-700 rounded-full flex items-center justify-center absolute ${btnBottom} hover:bg-secondary-600 duration-200 ${btnRight}`}
        >
          <Wind />
        </button>
      </div>
    </div>
  );
};
