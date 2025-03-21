"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useScroll, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  ChevronRight,
  Code,
  Briefcase,
  User,
  MessageSquare,
  ArrowUp,
} from "lucide-react"

// Set to false when you want to go live
const SITE_UNDER_DEVELOPMENT = true

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const progressRef = useRef<HTMLDivElement>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (progressRef.current) {
        progressRef.current.style.width = `${latest * 100}%`
      }
    })
  }, [scrollYProgress])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // If site is under development, show the development screen
  if (SITE_UNDER_DEVELOPMENT) {
    return <UnderDevelopmentScreen />
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-background/20">
        <div ref={progressRef} className="h-full bg-gradient-to-r from-cyan to-deep-blue" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl"
          >
            <Link href="/" className="text-gradient">
              DevPortfolio
            </Link>
          </motion.div>
          <nav className="hidden md:flex gap-6">
            {["About", "Skills", "Projects", "Contact"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:bg-cyan/10 hover:border-cyan/50 transition-colors duration-300"
            >
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:bg-cyan/10 hover:border-cyan/50 transition-colors duration-300"
            >
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button className="bg-gradient hover:shadow-lg hover:shadow-cyan/20 transition-all duration-300">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
        </div>
      </header>

      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32 space-y-8">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-deep-blue/10 z-0" />
          <div className="absolute inset-0 z-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-cyan/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-deep-blue/20 rounded-full blur-3xl" />
          </div>
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex-1 space-y-4"
              >
                <Badge className="text-sm bg-cyan/20 text-cyan hover:bg-cyan/30 transition-colors">
                  Available for hire
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold">
                  Hi, I'm <span className="text-gradient">John Doe</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Full Stack Developer specializing in building exceptional digital experiences
                </p>
                <div className="flex gap-4">
                  <Button
                    asChild
                    className="bg-gradient hover:shadow-lg hover:shadow-cyan/20 transition-all duration-300"
                  >
                    <Link href="#projects">
                      View My Work <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-cyan/20 hover:border-cyan/50 hover:bg-cyan/5 transition-all duration-300"
                  >
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex-1 flex justify-center"
              >
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan/20 shadow-2xl shadow-cyan/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-transparent to-deep-blue/20 z-10" />
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <SectionWrapper id="about" className="bg-muted py-16 md:py-24">
          <div className="container space-y-12">
            <SectionHeader icon={<User className="h-6 w-6 text-cyan" />} title="About Me" />
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div variants={fadeInVariants} className="space-y-4">
                <p className="text-lg">
                  I'm a passionate full-stack developer with a strong foundation in modern web technologies. With over 5
                  years of experience, I've worked on a variety of projects from small business websites to complex
                  enterprise applications.
                </p>
                <p className="text-lg">
                  My approach to development focuses on creating clean, efficient, and maintainable code that delivers
                  exceptional user experiences. I'm constantly learning and exploring new technologies to stay at the
                  forefront of web development.
                </p>
                <p className="text-lg">
                  When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source
                  projects.
                </p>
              </motion.div>
              <motion.div variants={fadeInVariants} className="space-y-4">
                <h3 className="text-xl font-semibold">Education</h3>
                <div className="space-y-2">
                  <motion.div
                    variants={listItemVariants}
                    className="border-l-2 border-cyan pl-4 py-2 hover:border-l-4 transition-all duration-300"
                  >
                    <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                    <p className="text-muted-foreground">University of Technology, 2015-2019</p>
                  </motion.div>
                  <motion.div
                    variants={listItemVariants}
                    className="border-l-2 border-cyan pl-4 py-2 hover:border-l-4 transition-all duration-300"
                  >
                    <h4 className="font-medium">Full Stack Web Development Bootcamp</h4>
                    <p className="text-muted-foreground">Code Academy, 2020</p>
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mt-6">Experience</h3>
                <div className="space-y-2">
                  <motion.div
                    variants={listItemVariants}
                    className="border-l-2 border-cyan pl-4 py-2 hover:border-l-4 transition-all duration-300"
                  >
                    <h4 className="font-medium">Senior Developer</h4>
                    <p className="text-muted-foreground">Tech Solutions Inc., 2021-Present</p>
                  </motion.div>
                  <motion.div
                    variants={listItemVariants}
                    className="border-l-2 border-cyan pl-4 py-2 hover:border-l-4 transition-all duration-300"
                  >
                    <h4 className="font-medium">Web Developer</h4>
                    <p className="text-muted-foreground">Digital Creations, 2019-2021</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>

        {/* Skills Section */}
        <SectionWrapper id="skills" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-deep-blue/10 rounded-full blur-3xl" />
          </div>
          <div className="container space-y-12 relative z-10">
            <SectionHeader icon={<Code className="h-6 w-6 text-cyan" />} title="Skills & Technologies" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <SkillCard
                title="Frontend"
                skills={["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"]}
                delay={0}
              />
              <SkillCard
                title="Backend"
                skills={["Node.js", "Express", "Python", "Django", "RESTful APIs"]}
                delay={0.1}
              />
              <SkillCard
                title="Database"
                skills={["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Prisma"]}
                delay={0.2}
              />
              <SkillCard title="DevOps & Tools" skills={["Git", "Docker", "AWS", "CI/CD", "Vercel"]} delay={0.3} />
            </div>
          </div>
        </SectionWrapper>

        {/* Projects Section */}
        <SectionWrapper id="projects" className="bg-muted py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-deep-blue/10 rounded-full blur-3xl" />
          </div>
          <div className="container space-y-12 relative z-10">
            <SectionHeader icon={<Briefcase className="h-6 w-6 text-cyan" />} title="Featured Projects" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="E-Commerce Platform"
                description="A full-featured online store with payment processing, inventory management, and admin dashboard."
                image="/placeholder.svg?height=300&width=500"
                tags={["Next.js", "TypeScript", "Stripe", "MongoDB"]}
                demoUrl="#"
                repoUrl="#"
                delay={0}
              />
              <ProjectCard
                title="Task Management App"
                description="A collaborative task management application with real-time updates and team collaboration features."
                image="/placeholder.svg?height=300&width=500"
                tags={["React", "Node.js", "Socket.io", "PostgreSQL"]}
                demoUrl="#"
                repoUrl="#"
                delay={0.1}
              />
              <ProjectCard
                title="AI Content Generator"
                description="An AI-powered application that generates marketing content based on user prompts and preferences."
                image="/placeholder.svg?height=300&width=500"
                tags={["Python", "TensorFlow", "React", "FastAPI"]}
                demoUrl="#"
                repoUrl="#"
                delay={0.2}
              />
              <ProjectCard
                title="Fitness Tracking App"
                description="A mobile-first web application for tracking workouts, nutrition, and fitness goals."
                image="/placeholder.svg?height=300&width=500"
                tags={["React Native", "Firebase", "Redux", "Chart.js"]}
                demoUrl="#"
                repoUrl="#"
                delay={0.3}
              />
              <ProjectCard
                title="Real Estate Platform"
                description="A platform for property listings with advanced search, virtual tours, and agent dashboards."
                image="/placeholder.svg?height=300&width=500"
                tags={["Vue.js", "Express", "MongoDB", "Google Maps API"]}
                demoUrl="#"
                repoUrl="#"
                delay={0.4}
              />
              <ProjectCard
                title="Weather Dashboard"
                description="A weather application with location-based forecasts, historical data, and interactive maps."
                image="/placeholder.svg?height=300&width=500"
                tags={["React", "OpenWeather API", "D3.js", "Tailwind CSS"]}
                demoUrl="#"
                repoUrl="#"
                delay={0.5}
              />
            </div>
            <motion.div variants={fadeInVariants} className="flex justify-center">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-cyan/20 hover:border-cyan/50 hover:bg-cyan/5 transition-all duration-300 hover:shadow-lg hover:shadow-cyan/10"
              >
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  View More on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Contact Section */}
        <SectionWrapper id="contact" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-deep-blue/10 rounded-full blur-3xl" />
          </div>
          <div className="container space-y-12 relative z-10">
            <SectionHeader icon={<MessageSquare className="h-6 w-6 text-cyan" />} title="Get In Touch" />
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInVariants} className="space-y-4">
                <p className="text-lg">
                  I'm currently available for freelance work and full-time positions. If you have a project that needs
                  some creative touch or if you're looking to hire a developer, feel free to reach out!
                </p>
                <div className="space-y-2">
                  <motion.div variants={listItemVariants} className="flex items-center gap-2 group">
                    <div className="p-2 rounded-full bg-cyan/10 group-hover:bg-cyan/20 transition-colors duration-300">
                      <Mail className="h-5 w-5 text-cyan" />
                    </div>
                    <a href="mailto:hello@example.com" className="hover:text-cyan transition-colors">
                      hello@example.com
                    </a>
                  </motion.div>
                  <motion.div variants={listItemVariants} className="flex items-center gap-2 group">
                    <div className="p-2 rounded-full bg-cyan/10 group-hover:bg-cyan/20 transition-colors duration-300">
                      <Linkedin className="h-5 w-5 text-cyan" />
                    </div>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan transition-colors"
                    >
                      linkedin.com/in/johndoe
                    </a>
                  </motion.div>
                  <motion.div variants={listItemVariants} className="flex items-center gap-2 group">
                    <div className="p-2 rounded-full bg-cyan/10 group-hover:bg-cyan/20 transition-colors duration-300">
                      <Twitter className="h-5 w-5 text-cyan" />
                    </div>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan transition-colors"
                    >
                      @johndoe
                    </a>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInVariants}
                className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-cyan/10 shadow-xl shadow-cyan/5"
              >
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                        placeholder="hello@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient hover:shadow-lg hover:shadow-cyan/20 transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 md:py-12 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {[
              { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com" },
              { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://linkedin.com" },
              { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "https://twitter.com" },
              { icon: <Mail className="h-5 w-5" />, label: "Email", href: "mailto:hello@example.com" },
            ].map((item, i) => (
              <motion.div key={item.label} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-cyan/10 hover:text-cyan transition-colors duration-300"
                >
                  <Link href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 md:bottom-6"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-cyan to-deep-blue text-white p-3 rounded-full shadow-lg shadow-cyan/20 hover:shadow-xl hover:shadow-cyan/30 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

// Section Wrapper Component
function SectionWrapper({
  id,
  children,
  className = "",
}: { id: string; children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id={id} ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </section>
  )
}

// Section Header Component
function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <motion.div variants={fadeInVariants} className="flex items-center gap-2 mb-8">
      {icon}
      <h2 className="text-3xl font-bold text-gradient">{title}</h2>
    </motion.div>
  )
}

// Skill Card Component
function SkillCard({ title, skills, delay = 0 }: { title: string; skills: string[]; delay?: number }) {
  return (
    <motion.div variants={fadeInVariants} transition={{ delay }} whileHover={{ y: -5, transition: { duration: 0.3 } }}>
      <Card className="overflow-hidden border-cyan/10 hover:border-cyan/30 transition-colors duration-300 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-cyan/5 transition-all duration-300">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-gradient">{title}</h3>
          <ul className="space-y-2">
            {skills.map((skill, index) => (
              <motion.li key={index} variants={listItemVariants} className="flex items-center gap-2 group">
                <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan to-deep-blue group-hover:scale-125 transition-transform duration-300" />
                <span className="group-hover:text-cyan transition-colors duration-300">{skill}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Project Card Component
function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  repoUrl,
  delay = 0,
}: {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  repoUrl: string
  delay?: number
}) {
  return (
    <motion.div variants={fadeInVariants} transition={{ delay }} whileHover={{ y: -5, transition: { duration: 0.3 } }}>
      <Card className="overflow-hidden border-cyan/10 hover:border-cyan/30 transition-colors duration-300 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-cyan/5 transition-all duration-300">
        <div className="relative h-48 overflow-hidden group">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gradient">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-cyan/10 text-cyan hover:bg-cyan/20 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-cyan/20 hover:border-cyan/50 hover:bg-cyan/5 transition-all duration-300"
            >
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                Live Demo <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-cyan/20 hover:border-cyan/50 hover:bg-cyan/5 transition-all duration-300"
            >
              <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                Code <Github className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Under Development Screen Component
function UnderDevelopmentScreen() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-deep-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-3xl mx-auto px-4 py-16 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Under Development</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan to-deep-blue mx-auto rounded-full mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-xl text-muted-foreground">
            Our portfolio website is currently under construction. We're working hard to bring you an amazing
            experience.
          </p>

          <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 border border-cyan/10 shadow-xl shadow-cyan/5">
            <h2 className="text-2xl font-semibold mb-4 text-gradient">Coming Soon</h2>
            <p className="mb-6">We're putting the finishing touches on our new website. Stay tuned for our launch!</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient hover:shadow-lg hover:shadow-cyan/20 transition-all duration-300">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
              <Button
                variant="outline"
                className="border-cyan/20 hover:border-cyan/50 hover:bg-cyan/5 transition-all duration-300"
              >
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Github className="mr-2 h-4 w-4" /> Follow Progress
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <p className="text-sm text-muted-foreground mb-4">Connect with me on social media</p>
          <div className="flex justify-center gap-4">
            {[
              { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com" },
              { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://linkedin.com" },
              { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "https://twitter.com" },
              { icon: <Mail className="h-5 w-5" />, label: "Email", href: "mailto:hello@example.com" },
            ].map((item) => (
              <motion.div key={item.label} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-cyan/10 hover:text-cyan transition-colors duration-300"
                >
                  <Link href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

