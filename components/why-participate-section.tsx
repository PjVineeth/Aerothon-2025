import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Users, Trophy, TrendingUp } from "lucide-react"

export function WhyParticipateSection() {
  const benefits = [
    {
      icon: Rocket,
      title: "Real-World Challenges",
      description:
        "Solve authentic aerospace problems with expert guidance from HAL and IIIT Dharwad mentorship throughout the journey.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "National Platform",
      description:
        "Collaborate and showcase talent at national level. Network with industry leaders and academicians from across the country.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Trophy,
      title: "Exciting Rewards",
      description: "Prizes worth more than ₹2,00,000 and internship opportunities with HAL for outstanding performers.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: TrendingUp,
      title: "Future Opportunities",
      description:
        "Potential collaborations with HAL and partners. Career opportunities in the aerospace sector await winners.",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Join AEROTHON 2026?</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Join us in this journey of ideas, innovation, and impact. Together, let's take a giant leap forward in
            aerospace innovation.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className={`border border-border-primary/50 hover:border-${benefit.gradient} bg-card/50 backdrop-blur transition-colors duration-300`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.gradient} p-0.5`}>
                      <div className="w-full h-full bg-card rounded-md flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-foreground" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
