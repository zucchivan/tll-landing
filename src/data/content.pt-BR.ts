// Brand
export const brand = {
  name: 'THE LANGUAGE LINK',
  tagline: 'Conectando pessoas à fluência através de educação em inglês personalizada e imersiva.',
}

// Navigation
export const navLinks = [
  { href: '#features', label: 'Nosso método' },
  { href: '#pricing', label: 'Cursos' },
  { href: '#testimonials', label: 'Depoimentos' },
] as const

export const ctaButtons = {
  contact: 'Fale conosco',
  mobileMenuContact: 'Contato',
}

// Hero Section
export const hero = {
  badge: 'Desbloqueie seu potencial em inglês',
  title: 'Fale inglês com',
  titleHighlight: 'confiança',
  description: `Junte-se a milhares de alunos que transformaram suas habilidades em inglês com nossa abordagem
    personalizada e imersiva. Desde comunicação empresarial até conversas do dia a dia, conectamos você à fluência.`,
  buttons: {
    primary: 'Comece sua aula experimental grátis',
    secondary: 'Conheça os cursos',
  },
  socialProof: {
    enrolled: '2.500+',
    enrolledLabel: 'alunos matriculados',
  },
  // Head Teacher Card
  headTeacher: {
    name: 'Sarah Mitchell',
    role: 'Coordenadora Pedagógica',
    credentials: '15+ anos de experiência. Certificada CELTA & DELTA.',
  },
  images: {
    bigBen: '/images/big-ben-gd4042a5af-1920.jpg',
    logo: '/images/logo-201.png',
    teacher: '/professional-female-english-teacher-portrait-heads.jpg',
    studentAlt: 'Aluno',
  },
}

// Features Section
export const features = {
  badge: 'Nosso método',
  title: 'Uma maneira mais inteligente de aprender inglês',
  description: `Nossa metodologia comprovada combina o melhor do ensino tradicional com tecnologia moderna
    para acelerar sua jornada de aprendizado.`,
  items: [
    {
      title: 'Currículo personalizado',
      description: 'Trilhas de aprendizado adaptadas aos seus objetivos, seja para negócios, viagens ou sucesso acadêmico.',
      icon: 'BookOpen',
    },
    {
      title: 'Aulas em pequenos grupos',
      description: 'Máximo de 6 alunos por classe garante atenção personalizada e mais oportunidades de conversação.',
      icon: 'Users',
    },
    {
      title: 'Excelência certificada',
      description: 'Certificados internacionalmente reconhecidos e preparação para exames IELTS, TOEFL e Cambridge.',
      icon: 'Award',
    },
  ],
}

// Testimonials Section - Using Brazilian names for authenticity
export const testimonials = {
  badge: 'Depoimentos',
  title: 'Ouça nossos alunos',
  description: 'Junte-se a milhares de alunos satisfeitos que alcançaram seus objetivos em inglês conosco.',
  items: [
    {
      name: 'Ana Silva',
      role: 'Profissional de negócios',
      image: '/professional-woman-portrait.png',
      quote: 'The Language Link transformou meu inglês empresarial. Eu lutava em reuniões e agora conduzo apresentações com confiança.',
    },
    {
      name: 'Carlos Oliveira',
      role: 'Universitário',
      image: '/young-man-student.png',
      quote: 'Graças ao curso de preparação para IELTS, conquistei nota 8.0 e fui aprovado na universidade dos meus sonhos em Londres!',
    },
    {
      name: 'Marina Santos',
      role: 'Gerente de marketing',
      image: '/asian-woman-professional-portrait.png',
      quote: 'O tamanho pequeno das turmas fez toda a diferença. Eu realmente pratiquei conversação em vez de apenas ouvir palestras.',
    },
  ],
}

// Pricing Section - Converted to Brazilian Real (BRL)
export const pricing = {
  badge: 'Planos de preços',
  title: 'Escolha seu caminho de aprendizado',
  description: 'Planos flexíveis projetados para caber no seu cronograma e orçamento. Comece com uma aula experimental grátis hoje.',
  popular: 'Mais popular',
  button: 'Começar agora',
  plans: [
    {
      name: 'Iniciante',
      description: 'Perfeito para aprendizes casuais',
      price: '149',
      period: 'mês',
      popular: false,
      features: [
        '2 aulas em grupo por semana',
        'Acesso a materiais de aprendizado',
        'Painel de acompanhamento de progresso',
        'Suporte por e-mail',
      ],
    },
    {
      name: 'Profissional',
      description: 'Mais popular para alunos sérios',
      price: '399',
      period: 'mês',
      popular: true,
      features: [
        'Aulas ilimitadas em grupo',
        '2 sessões particulares por mês',
        'Todos os materiais de aprendizado',
        'Suporte prioritário',
        'Acesso ao clube de conversação',
        'Certificado de conclusão',
      ],
    },
    {
      name: 'Executivo',
      description: 'Para profissionais de negócios',
      price: '749',
      period: 'mês',
      popular: false,
      features: [
        'Tudo do Profissional',
        'Sessões particulares semanais',
        'Foco em inglês para negócios',
        'Preparação para entrevistas',
        'Coaching de apresentações',
        'Gerente de sucesso dedicado',
      ],
    },
  ],
}

// CTA Section
export const cta = {
  title: 'Pronto para começar sua jornada em inglês?',
  description: `Junte-se à nossa comunidade de aprendizes e comece com uma aula experimental grátis. Sem compromisso
    necessário - apenas sua vontade de aprender.`,
  inputPlaceholder: 'Digite seu e-mail',
  button: 'Agendar aula experimental grátis',
  successMessage: 'Obrigado! Entraremos em contato em breve para agendar sua aula experimental.',
  disclaimer: 'Cartão de crédito não necessário. Comece a aprender em minutos.',
}

// Footer
export const footer = {
  brand: {
    tagline: 'Conectando pessoas à fluência através de educação em inglês personalizada e imersiva. Sua jornada para a confiança começa aqui.',
  },
  sections: {
    company: {
      title: 'Empresa',
      links: [
        { label: 'Sobre nós', href: '#' },
        { label: 'Nossa equipe', href: '#' },
        { label: 'Carreiras', href: '#' },
        { label: 'Contato', href: '#' },
      ],
    },
    courses: {
      title: 'Cursos',
      links: [
        { label: 'Inglês geral', href: '#' },
        { label: 'Inglês para negócios', href: '#' },
        { label: 'Preparação IELTS', href: '#' },
        { label: 'Crianças e adolescentes', href: '#' },
      ],
    },
    resources: {
      title: 'Recursos',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Recursos grátis', href: '#' },
        { label: 'FAQ', href: '#' },
        { label: 'Portal do aluno', href: '#' },
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
    copyright: (year: number) => `© ${year} The Language Link. Todos os direitos reservados.`,
    privacyPolicy: 'Política de privacidade',
    termsOfService: 'Termos de serviço',
  },
  images: {
    logo: '/images/logo-201.png',
    logoAlt: 'Logo The Language Link',
  },
}

// Type exports
export type NavLink = typeof navLinks[number]
export type FeatureItem = typeof features.items[number]
export type TestimonialItem = typeof testimonials.items[number]
export type PricingPlan = typeof pricing.plans[number]
export type FooterSection = keyof typeof footer.sections
