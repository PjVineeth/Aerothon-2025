import { Card, CardContent } from "@/components/ui/card"
import { Building2, GraduationCap, Target, Zap } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Building2,
      title: "Industry Partnership",
      description: "HAL × IIIT Dharwad collaboration bringing industry expertise and academic excellence together.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Target,
      title: "Real-World Impact",
      description: "Bridge the gap between industry and academia through practical problem-solving challenges.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: GraduationCap,
      title: "Expert Guidance",
      description: "Real-world aerospace challenges curated by HAL experts and IIIT Dharwad faculty.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Hands-on exposure to cutting-edge aerospace and allied domain challenges.",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Empowering Innovation in Aerospace
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            AEROTHON 2026 is more than a competition—it is a movement to empower students to think boldly, innovate
            responsibly, and contribute to shaping the future of aerospace and technology.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`border border-border-primary/50 hover:border-${feature.gradient} bg-card/50 backdrop-blur transition-colors duration-300`}
              >
                <CardContent className="p-4">
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-0.5`}>
                      <div className="w-full h-full bg-card rounded-md flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-foreground" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
