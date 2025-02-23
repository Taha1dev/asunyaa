"use client"

import {
  Dialog,
  Trigger,
  Portal,
  Overlay,
  Content,
  Close
} from "@radix-ui/react-dialog"
import { Menu, X } from 'lucide-react'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from '@/public/asunya-logo.png'
const LanguageSwitcher = dynamic(() => import('./LanguageSwitcher'),
  { ssr: false });

import dynamic from "next/dynamic"
import { Button } from "@radix-ui/themes"
const navItems = [
  { label: "الرئيسة", labelEn: "Home", href: "/" },
  { label: "الخدمات", labelEn: "Services", href: "/services" },
  { label: "زكاة المال", labelEn: "Zakat", href: "/zakat" },
  { label: "التبرع العام", labelEn: "Donate", href: "/donate" },
  { label: "الصفحة الجارية", labelEn: "Current Page", href: "/current" },
  { label: "حول الجمعية", labelEn: "About Us", href: "/about" },
  { label: "الأسئلة الشائعة", labelEn: "FAQ", href: "/faq" },
  { label: "اتصل بنا", labelEn: "Contact", href: "/contact" },
]


export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-navbg bg-opacity-70 border-b  backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between w-full px-4">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" />
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-white hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button>
            تبرع الآن
          </Button>
          <LanguageSwitcher />
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <Trigger asChild>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-accent md:hidden"
                aria-label="Toggle Menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </Trigger>
            <Portal>
              <Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
              <Content className="fixed inset-y-0 left-0 z-50 size-full max-w-sm gap-4 border-r bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center justify-between">
                    <Link href="/" className="-m-1.5 p-1.5">
                      <Image src={logo} alt="Logo" />
                    </Link>
                    <Close className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close</span>
                    </Close>
                  </div>
                  <nav className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-accent"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </Content>
            </Portal>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
