import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Perfect for casual learners",
    price: "29",
    period: "month",
    features: [
      "2 group classes per week",
      "Access to learning materials",
      "Progress tracking dashboard",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Most popular for serious learners",
    price: "79",
    period: "month",
    features: [
      "Unlimited group classes",
      "2 private sessions per month",
      "All learning materials",
      "Priority support",
      "Conversation club access",
      "Certificate of completion",
    ],
    popular: true,
  },
  {
    name: "Executive",
    description: "For business professionals",
    price: "149",
    period: "month",
    features: [
      "Everything in Professional",
      "Weekly private sessions",
      "Business English focus",
      "Interview preparation",
      "Presentation coaching",
      "Dedicated success manager",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#004aad]">Pricing Plans</p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Choose Your Learning Path
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Flexible plans designed to fit your schedule and budget. Start with a free trial today.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${
                plan.popular ? "border-2 border-[#ad004a] shadow-xl" : "border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-[#ad004a] px-4 py-1 text-sm font-medium text-[#F5F5F4]">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#004aad]" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-[#ad004a] text-[#F5F5F4] hover:bg-[#8a003b]"
                      : "border-[#004aad] text-[#004aad] hover:bg-[#004aad]/10"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
