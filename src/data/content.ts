// Brand
export const brand = {
  name: 'THE LANGUAGE LINK',
  tagline: 'Connecting people to fluency through personalized, immersive English education.',
}

// Navigation
export const navLinks = [
  { href: '#features', label: 'Our Method' },
  { href: '#pricing', label: 'Courses' },
  { href: '#testimonials', label: 'Testimonials' },
] as const

export const ctaButtons = {
  contact: 'Contact Us',
  mobileMenuContact: 'Contact Us',
}

// Hero Section
export const hero = {
  badge: 'Unlock Your English Potential',
  title: 'Master English with Confidence',
  titleHighlight: 'Confidence',
  description: `Join thousands of successful learners who have transformed their English skills with our personalized,
    immersive approach. From business communication to everyday conversations, we connect you to fluency.`,
  buttons: {
    primary: 'Start Your Free Trial',
    secondary: 'Explore Courses',
  },
  socialProof: {
    enrolled: '2,500+',
    enrolledLabel: 'students enrolled',
  },
  // Head Teacher Card
  headTeacher: {
    name: 'Sarah Mitchell',
    role: 'Head Teacher',
    credentials: '15+ years experience. CELTA & DELTA certified.',
  },
  images: {
    bigBen: '/images/big-ben-gd4042a5af-1920.jpg',
    logo: '/images/logo-201.png',
    teacher: '/professional-female-english-teacher-portrait-heads.jpg',
    studentAlt: 'Student',
  },
}

// Features Section
export const features = {
  badge: 'Our Method',
  title: 'A Smarter Way to Learn English',
  description: `Our proven methodology combines the best of traditional teaching with modern technology to accelerate your
    learning journey.`,
  items: [
    {
      title: 'Personalized Curriculum',
      description: 'Tailored learning paths designed around your goals, whether for business, travel, or academic success.',
      icon: 'BookOpen',
    },
    {
      title: 'Small Group Classes',
      description: 'Maximum 6 students per class ensures personalized attention and more speaking opportunities.',
      icon: 'Users',
    },
    {
      title: 'Certified Excellence',
      description: 'Internationally recognized certificates and exam preparation for IELTS, TOEFL, and Cambridge.',
      icon: 'Award',
    },
  ],
}

// Testimonials Section
export const testimonials = {
  badge: 'Testimonials',
  title: 'Hear From Our Students',
  description: 'Join thousands of satisfied learners who have achieved their English goals with us.',
  items: [
    {
      name: 'Maria Garcia',
      role: 'Business Professional',
      image: '/professional-woman-portrait.png',
      quote: 'The Language Link transformed my business English. I went from struggling in meetings to leading presentations with confidence.',
    },
    {
      name: 'Ahmed Hassan',
      role: 'University Student',
      image: '/young-man-student.png',
      quote: 'Thanks to their IELTS preparation course, I scored 8.0 and got accepted to my dream university in London!',
    },
    {
      name: 'Sophie Chen',
      role: 'Marketing Manager',
      image: '/asian-woman-professional-portrait.png',
      quote: 'The small class sizes made all the difference. I actually got to practice speaking instead of just listening to lectures.',
    },
  ],
}

// Pricing Section
export const pricing = {
  badge: 'Pricing Plans',
  title: 'Choose Your Learning Path',
  description: 'Flexible plans designed to fit your schedule and budget. Start with a free trial today.',
  popular: 'Most Popular',
  button: 'Get Started',
  plans: [
    {
      name: 'Starter',
      description: 'Perfect for casual learners',
      price: '29',
      period: 'month',
      popular: false,
      features: [
        '2 group classes per week',
        'Access to learning materials',
        'Progress tracking dashboard',
        'Email support',
      ],
    },
    {
      name: 'Professional',
      description: 'Most popular for serious learners',
      price: '79',
      period: 'month',
      popular: true,
      features: [
        'Unlimited group classes',
        '2 private sessions per month',
        'All learning materials',
        'Priority support',
        'Conversation club access',
        'Certificate of completion',
      ],
    },
    {
      name: 'Executive',
      description: 'For business professionals',
      price: '149',
      period: 'month',
      popular: false,
      features: [
        'Everything in Professional',
        'Weekly private sessions',
        'Business English focus',
        'Interview preparation',
        'Presentation coaching',
        'Dedicated success manager',
      ],
    },
  ],
}

// CTA Section
export const cta = {
  title: 'Ready to Start Your English Journey?',
  description: `Join our community of learners and get started with a free trial lesson. No commitment required - just your
    enthusiasm to learn.`,
  inputPlaceholder: 'Enter your email',
  button: 'Get Free Trial',
  successMessage: "Thanks! We'll be in touch soon to schedule your free trial.",
  disclaimer: 'No credit card required. Start learning in minutes.',
}

// Footer
export const footer = {
  brand: {
    tagline: 'Connecting people to fluency through personalized, immersive English education. Your journey to confidence starts here.',
  },
  sections: {
    company: {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Our Team', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    courses: {
      title: 'Courses',
      links: [
        { label: 'General English', href: '#' },
        { label: 'Business English', href: '#' },
        { label: 'IELTS Preparation', href: '#' },
        { label: 'Kids & Teens', href: '#' },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Free Resources', href: '#' },
        { label: 'FAQ', href: '#' },
        { label: 'Student Portal', href: '#' },
      ],
    },
  },
  social: {
    facebook: { label: 'Facebook', href: '#' },
    instagram: { label: 'Instagram', href: '#' },
    twitter: { label: 'Twitter', href: '#' },
    linkedin: { label: 'LinkedIn', href: '#' },
    youtube: { label: 'YouTube', href: '#' },
  },
  bottom: {
    copyright: (year: number) => `© ${year} The Language Link. All rights reserved.`,
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
  },
  images: {
    logo: '/images/logo-201.png',
    logoAlt: 'The Language Link Logo',
  },
}

// Type exports
export type NavLink = typeof navLinks[number]
export type FeatureItem = typeof features.items[number]
export type TestimonialItem = typeof testimonials.items[number]
export type PricingPlan = typeof pricing.plans[number]
export type FooterSection = keyof typeof footer.sections
