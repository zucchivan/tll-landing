import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  courses: [
    { label: "General English", href: "#" },
    { label: "Business English", href: "#" },
    { label: "IELTS Preparation", href: "#" },
    { label: "Kids & Teens", href: "#" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Free Resources", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Student Portal", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/images/logo-201.png"
                alt="The Language Link Logo"
                width={160}
                height={53}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mb-6 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              Connecting people to fluency through personalized, immersive English education. Your journey to confidence
              starts here.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#004aad]/10 text-[#004aad] transition-colors hover:bg-[#004aad] hover:text-[#F5F5F4]"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-[#004aad]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Courses</h3>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-[#004aad]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-[#004aad]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Language Link. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-[#004aad]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-[#004aad]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
