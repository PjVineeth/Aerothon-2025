import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Download, Mail, Phone, Clock } from "lucide-react"

export function RegistrationSection() {
  const steps = [
    {
      title: "Team Formation",
      description: "Form your team of 4 members with diverse skills and backgrounds",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Documentation",
      description: "Prepare required documents and complete ID verification process",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Problem Selection",
      description: "Choose your preferred problem statement and review technical requirements",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Submission",
      description: "Submit initial presentation, technical report, and solution video",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  const faqs = [
    {
      question: "What are the team formation guidelines?",
      answer:
        "Teams should consist of 4 members. We encourage diversity in skills and academic backgrounds. All team members must be current students.",
    },
    {
      question: "What are the eligibility criteria?",
      answer:
        "All current undergraduate and graduate students from recognized institutions are eligible to participate. Valid student ID is required for verification.",
    },
    {
      question: "What technical requirements do I need to know?",
      answer:
        "Technical requirements vary by problem statement. Review the specific requirements for your chosen problem. Basic programming knowledge and familiarity with relevant technologies is recommended.",
    },
    {
      question: "How does the submission process work?",
      answer:
        "Submit your initial presentation (PPT), technical report, and recorded presentation by October 13, 2025. Detailed submission guidelines will be provided upon registration.",
    },
    {
      question: "What are the evaluation criteria?",
      answer:
        "Teams will be evaluated based on innovation, technical implementation, presentation quality, and potential real-world impact of the solution.",
    },
  ]

  return (
    <section id="registration" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Join the Innovation Revolution
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Register now to secure your spot in AEROTHON 2025
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          {/* Registration Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((step, index) => (
              <Card key={index} className={`border border-border-primary/50 hover:border-${step.gradient} bg-card/50 backdrop-blur transition-colors duration-300 text-center`}>
                <CardHeader>
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${step.gradient} p-0.5 mx-auto mb-4`}>
                    <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-foreground">{index + 1}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-base px-8 py-3" asChild>
                <a href="https://forms.gle/K4jtiE5URNVbxvbCA" target="_blank" rel="noopener noreferrer">
                  Register Your Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-3 bg-transparent" asChild>
                <a href="https://drive.google.com/your-guide-link" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Registration Guide
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <Card className="border border-border-primary/50 hover:border-blue-500-to-cyan-500 bg-card/50 backdrop-blur transition-colors duration-300 mb-16">
            <CardHeader>
              <CardTitle className="text-xl">Contact Information</CardTitle>
              <CardDescription>Need help? Our support team is here to assist you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">hackevents@iiitdwd.ac.in</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">To be announced</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9 AM - 6 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQs */}
          <Card className="border border-border-primary/50 hover:border-green-500-to-teal-500 bg-card/50 backdrop-blur transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
              <CardDescription>Find answers to common questions about AEROTHON 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
