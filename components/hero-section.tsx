import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F4] py-20 lg:py-32">
      {/* Decorative background blob */}
      <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-[#004aad]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/4 rounded-full bg-[#ad004a]/10 blur-3xl" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#004aad]/10 px-4 py-2 text-sm font-medium text-[#004aad]">
              Unlock Your English Potential
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Master English with <span className="text-[#ad004a]">Confidence</span>
            </h1>
            <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Join thousands of successful learners who have transformed their English skills with our personalized,
              immersive approach. From business communication to everyday conversations, we connect you to fluency.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-[#ad004a] text-[#F5F5F4] hover:bg-[#8a003b]">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#004aad] text-[#004aad] hover:bg-[#004aad]/10 bg-transparent"
              >
                Explore Courses
              </Button>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 overflow-hidden rounded-full border-2 border-background">
                    <Image
                      src={`/professional-portrait.png?height=40&width=40&query=professional person portrait ${i}`}
                      alt={`Student ${i}`}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">2,500+</span>{" "}
                <span className="text-muted-foreground">students enrolled</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/big-ben-gd4042a5af-1920.jpg"
                alt="Big Ben and London skyline"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004aad]/20 to-transparent" />

              <Image
                src="/images/logo-201.png"
                alt="The Language Link Logo"
                width={200}
                height={200}
                className="absolute top-4 right-4 h-44 w-44 object-contain drop-shadow-lg"
              />
            </div>

            {/* Head Teacher Card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-background p-4 shadow-xl max-w-[220px]">
              <div className="flex flex-col gap-3">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-[#004aad]/20">
                  <Image
                    src="/professional-female-english-teacher-portrait-heads.jpg"
                    alt="Sarah Mitchell - Head Teacher"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Sarah Mitchell</p>
                  <p className="text-xs font-medium text-[#004aad]">Head Teacher</p>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    15+ years experience. CELTA & DELTA certified.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
