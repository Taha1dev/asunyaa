import Image from 'next/image'
import React from 'react'
import faqImage from '@/public/faq.png'
export default function FAQ() {
  return (
    <section className="bg-background text-white ">
      <div className="flex flex-col md:flex-row items-center gap-8 ">
        <div className="w-full flex-grow text-right py-16 px-6 md:px-12 lg:px-20">
          <p className="text-red-500 text-sm mb-2">سؤال وإجابات</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            نساعدهم ليعيشون حياة أفضل
          </h2>

          {/* Accordion */}
          <div className="space-y-4">
            <details className="group">
              <summary className="cursor-pointer bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                <span>كيف يمكنني المساهمة في أحد المشاريع؟</span>
                <span className="group-open:hidden">−</span>
                <span className="hidden group-open:inline">+</span>
              </summary>
              <p className="p-4 text-gray-300">
                يمكنك التبرع مباشرة عبر موقعنا الإلكتروني، أو من خلال وسائل الدعم
                المتوفرة. ستجد تفاصيل كل مشروع وخيارات المساهمة عند تصفح المشاريع.
              </p>
            </details>

            <details className="group">
              <summary className="cursor-pointer bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                <span>ما هي أنواع المشاريع التي تقدمها أسبوعيًا؟</span>
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">−</span>
              </summary>
              <p className="p-4 text-gray-300">
                نقدم مشاريع إغاثية، تعليمية، وصحية حسب احتياجات المجتمع.
              </p>
            </details>

            <details className="group">
              <summary className="cursor-pointer bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                <span>هل التبرعات آمنة وتصل إلى المستفيدين؟</span>
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">−</span>
              </summary>
              <p className="p-4 text-gray-300">
                نعم، نحرص على توجيه التبرعات بأمان وشفافية للمحتاجين عبر شركائنا
                الموثوقين.
              </p>
            </details>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={faqImage}
            alt="Happy Kids"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
