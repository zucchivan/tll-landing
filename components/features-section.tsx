import { BookOpen, Users, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: BookOpen,
    title: "Personalized Curriculum",
    description:
      "Tailored learning paths designed around your goals, whether for business, travel, or academic success.",
  },
  {
    icon: Users,
    title: "Small Group Classes",
    description: "Maximum 6 students per class ensures personalized attention and more speaking opportunities.",
  },
  {
    icon: Award,
    title: "Certified Excellence",
    description: "Internationally recognized certificates and exam preparation for IELTS, TOEFL, and Cambridge.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-background py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#004aad]">Our Method</p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            A Smarter Way to Learn English
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Our proven methodology combines the best of traditional teaching with modern technology to accelerate your
            learning journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#004aad]/10 transition-colors group-hover:bg-[#004aad]">
                  <feature.icon className="h-7 w-7 text-[#004aad] transition-colors group-hover:text-[#F5F5F4]" />
                </div>
                <CardTitle className="text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
