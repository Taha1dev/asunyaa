import Link from "next/link"
import { Facebook, Linkedin, MessageCircle, Twitter } from 'lucide-react'
import Image from "next/image"
import footerImage from '@/public/asunya-logo.png'
import chat from '@/public/svg/chat.svg'
export default function Footer() {
  return (
    <footer dir="rtl" className="bg-background text-white py-12 dir-rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Association Column */}
          <div className="space-y-4">
            <Image src={footerImage} alt="asunya logo" />
            {/* Bank Details */}
            <div className="mt-6 space-y-2 text-sm text-gray-300">
              <p>DGÖK e.V. حساب Sparkasse-Aachen</p>
              <p>رقم الحساب: 07 207 7140</p>
              <p>رقم البنك: 00 500 390</p>
              <p>الحساب المصرفي الدولي: DE02 390 500 001 072 077 140</p>
              <p>BIC: AACSDE33XXX</p>
            </div>
          </div>

          {/* Association Links Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 border-b-2 border-foreground w-fit">الجمعية</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-red-500">من نحن</Link></li>
              <li><Link href="#" className="hover:text-red-500">الخدمات</Link></li>
              <li><Link href="#" className="hover:text-red-500">المشاريع</Link></li>
              <li><Link href="#" className="hover:text-red-500">الفعاليات</Link></li>
              <li><Link href="#" className="hover:text-red-500">المعرض</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 border-b-2 border-foreground w-fit">الدعم</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-red-500">الأسئلة الشائعة</Link></li>
              <li><Link href="#" className="hover:text-red-500">الشروط والأحكام</Link></li>
              <li><Link href="#" className="hover:text-red-500">سياسة الخصوصية</Link></li>
              <li><Link href="#" className="hover:text-red-500">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Address Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 border-b-2 border-foreground w-fit">العنوان</h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center gap-2">
                <span className="text-red-500">●</span>
                Jülicher Straße 250 52070 آخن
              </p>
              <p className="flex items-center gap-2">
                <span className="text-red-500">●</span>
                contact@asunya.org :بريد إلكتروني
              </p>
              <p className="flex items-center gap-2">
                <span className="text-red-500">●</span>
                هاتف: 49 241 750 869 16+
              </p>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <Link href="#" className="rounded bg-white hover:bg-white/90 transition-colors p-2 text-foreground">
                <Linkedin className="size-7 p-1" />
              </Link>
              <Link href="#" className="rounded bg-white hover:bg-white/90 transition-colors p-2 text-foreground">
                <Twitter className="size-7 p-1" />
              </Link>
              <Link href="#" className="rounded bg-white hover:bg-white/90 transition-colors p-2 text-foreground">
                <Facebook className="size-7 p-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Donation Buttons */}
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center my-8 gap-4">
          <button className="rounded-full bg-foreground px-6 py-3 w-fit sm:w-auto text-center transition-colors lg:self-auto self-start">تبرع الآن</button>
          <button className="rounded-full bg-foreground p-4 w-fit text-center transition-colors lg:self-auto self-end ">
            <Image src={chat} alt="chat icon" />
          </button>
        </div>

        {/* Divider */}
        <div className="container mx-auto">
          <hr className="border-t border-gray-700" />
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-400 mt-8">
          <p>جميع الحقوق محفوظة © Asunya {new Date().getFullYear()}</p>
          <Link href="#" className="text-white hover:text-red-500 transition-colors">
            Powered by ProTech
          </Link>
        </div>
      </div>
    </footer>
  )
}
