import { SliderItem } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";

export const renderItem = (item: SliderItem, isMoreView: boolean | any) => (
  <div className="bg-variant border-2 border-border rounded-2xl overflow-hidden">
    <div className="relative h-48 p-4">
      <Image src={item.image} alt={item.title} className="object-cover w-full h-48 rounded-[10px]" />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
      <p className="text-grays mb-4">{item.description}</p>
      {!isMoreView ? (
        <div className="space-y-2">
          <div className="relative overflow-hidden bg-[#e9e9ee] rounded-full w-full h-2">
            <div
              className="bg-foreground w-full h-full rounded-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
              style={{ transform: `translateX(${100 - item.progress}%)` }}
            />
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-grays">الحالي ${item.current}</span>
            <span className="text-grays">المطلوب ${item.target}</span>
          </div>
        </div>
      ) : (
        <Link className="underline text-foreground" href={''}>
          المزيد
        </Link>
      )}
    </div>
  </div>
);