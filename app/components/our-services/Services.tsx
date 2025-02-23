import { Button } from "@radix-ui/themes";
import Image from "next/image";
import servicesImage from '@/public/faq-banner-image.png'
export default function Services() {
  return (
    <section className="bg-background text-white lg:py-40 py-28 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Content */}
        <div className="text-right">
          <p className="text-[##EFF0F6] text-lg mb-2">خدماتنا</p>
          <h2 className="text-4xl md:text-3xl font-bold text-foreground mb-4">
            معاً نحو عطاءٍ يغير الحياة
          </h2>
          <p className="text-[##D1D2D5] leading-relaxed mb-6">
            نقدم مجموعة من الخدمات الإبداعية التي تساعدك في تحقيق الأثر
            الإيجابي مستعينًا بمكان تركز فيه الجهود، بناءً على رؤية واضحة
            لاستدامة أي مساعدة أو دعم كان. نقدم حلولًا تلائم احتياجات المجتمع،
            بهدف تحقيق التنمية المستدامة.
          </p>
          <Button className="bg-foreground hover:bg-red-800 transition-colors text-white py-2 px-16 rounded-full shadow-md">
            تبرع الآن
          </Button>
        </div>

        {/* Image */}
        <div className="w-full h-full flex justify-center md:justify-end">
          <Image
            src={servicesImage}
            alt="Teamwork Hands"
            width={500}
            height={337}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
