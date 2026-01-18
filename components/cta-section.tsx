"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle } from "lucide-react"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="bg-[#004aad] py-20 lg:py-32">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-[#F5F5F4] md:text-4xl lg:text-5xl">
          Ready to Start Your English Journey?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-[#F5F5F4]/80">
          Join our community of learners and get started with a free trial lesson. No commitment required - just your
          enthusiasm to learn.
        </p>

        {submitted ? (
          <div className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-2xl bg-[#F5F5F4]/10 p-6">
            <CheckCircle className="h-6 w-6 text-[#F5F5F4]" />
            <p className="text-[#F5F5F4]">Thanks! We&apos;ll be in touch soon to schedule your free trial.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 flex-1 border-[#F5F5F4]/20 bg-[#F5F5F4]/10 text-[#F5F5F4] placeholder:text-[#F5F5F4]/60 focus-visible:ring-[#F5F5F4]"
              required
            />
            <Button type="submit" size="lg" className="h-12 bg-[#ad004a] text-[#F5F5F4] hover:bg-[#8a003b]">
              Get Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        )}

        <p className="mt-4 text-sm text-[#F5F5F4]/60">No credit card required. Start learning in minutes.</p>
      </div>
    </section>
  )
}
