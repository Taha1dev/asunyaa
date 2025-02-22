import {
  NavigationMenu, Item,
  Link as NavigationLink, List
} from "@radix-ui/react-navigation-menu"
import {
  Dialog,
  Trigger,
  Portal,
  Overlay,
  Content,
  Close
} from "@radix-ui/react-dialog"
import { Menu, X } from 'lucide-react'
import { cva } from "class-variance-authority"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from '@/public/asunya-logo.png'
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

const navigationTrigger = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      active: {
        true: "bg-accent text-accent-foreground",
        false: "text-primary",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
)

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isEnglish, setIsEnglish] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-nav backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center w-full">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Image src={logo} alt="Logo" />
          </Link>
          <NavigationMenu className="relative flex" dir={isEnglish ? "ltr" : "rtl"}>
            <List className="flex flex-row items-center gap-1 p-1">
              {navItems.map((item) => (
                <Item key={item.href}>
                  <NavigationLink asChild>
                    <a
                      href={item.href}
                      className={navigationTrigger()}
                    >
                      {isEnglish ? item.labelEn : item.label}
                    </a>
                  </NavigationLink>
                </Item>
              ))}
            </List>
          </NavigationMenu>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <Trigger asChild>
            <button
              className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 md:hidden"
              aria-label="Toggle Menu"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </button>
          </Trigger>
          <Portal>
            <Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
            <Content className="fixed inset-y-0 left-0 z-50 h-full w-full gap-4 border-r bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <a href="/" className="-m-1.5 p-1.5">
                    <Image src={logo} alt="Logo" />
                  </a>
                  <Close className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close</span>
                  </Close>
                </div>
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary hover:bg-accent"
                    >
                      {isEnglish ? item.labelEn : item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </Content>
          </Portal>
        </Dialog>

        <div className="flex items-center justify-between space-x-2 md:justify-end">
          <button
            onClick={() => setIsEnglish(!isEnglish)}
            className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            {isEnglish ? "عربي" : "EN"}
          </button>
        </div>
      </div>
    </header>
  )
}
