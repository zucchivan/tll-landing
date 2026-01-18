import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria Garcia",
    role: "Business Professional",
    image: "/professional-woman-portrait.png",
    quote:
      "The Language Link transformed my business English. I went from struggling in meetings to leading presentations with confidence.",
  },
  {
    name: "Ahmed Hassan",
    role: "University Student",
    image: "/young-man-student.png",
    quote: "Thanks to their IELTS preparation course, I scored 8.0 and got accepted to my dream university in London!",
  },
  {
    name: "Sophie Chen",
    role: "Marketing Manager",
    image: "/asian-woman-professional-portrait.png",
    quote:
      "The small class sizes made all the difference. I actually got to practice speaking instead of just listening to lectures.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#F5F5F4] py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#ad004a]">Testimonials</p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Hear From Our Students
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Join thousands of satisfied learners who have achieved their English goals with us.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-none bg-background shadow-lg">
              <CardContent className="p-8">
                <Quote className="mb-4 h-8 w-8 text-[#004aad]/30" />
                <p className="mb-6 text-pretty leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
