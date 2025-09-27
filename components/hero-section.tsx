import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Trophy } from "lucide-react"
import DotGrid from "./dotgrid"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-background min-h-screen">
      {/* Background pattern */}
      <div className="absolute inset-0 -mt-8 hidden sm:block">
        <DotGrid
          dotSize={1}
          gap={10}
          baseColor="#e24d35"
          activeColor="#5227FF"
          proximity={60}
          shockRadius={100}
          shockStrength={4}
          resistance={200}
          returnDuration={3}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex items-center justify-center min-h-screen">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-8 text-sm font-medium border-border-primary/50">
            HAL × IIIT Dharwad Collaboration
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-balance bg-clip-text text-transparent bg-[url('https://www.apple.com/careers/images/fy21/apple_jobs_gradient-final_Apple_Jobs_Gradients_Warm/desktop@2x.png')] [-webkit-text-fill-color:transparent] [-webkit-box-decoration-break:clone] [background-size:100%_100%]">
            AEROTHON 2025
          </h1>

          <h4 className="block text-[20px] sm:text-[24px] leading-10 tracking-tight mt-2">Innovating the Future of Aerospace</h4>


          <p className="mt-6 text-md leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
            A flagship national-level hackathon by Hindustan Aeronautics Limited (HAL) in collaboration with IIIT
            Dharwad. Join the brightest minds across the country to tackle real-world aerospace challenges and shape the
            future of aviation technology.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 py-3" asChild>
              <a href="#registration">
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            {/* <Button variant="outline" size="lg" className="text-base px-8 py-3 bg-transparent" asChild>
              <a href="#problems">View Problem Statements</a>
            </Button>
            <Button variant="ghost" size="lg" className="text-base px-8 py-3" asChild>
              <a href="#dates">
                <Calendar className="mr-2 h-4 w-4" />
                Important Dates
              </a>
            </Button> */}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-primary" />
              <span>Prizes worth ₹2,00,000+</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-primary" />
              <span>October 30-31, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce mb-8 hidden sm:block">
        <div className="w-6 h-10 border-2 border-[#ed4b0b] dark:border-[#e24a3f] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#ed4b0b] dark:bg-[#e24a3f] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Aerospace imagery placeholder */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/20 to-transparent" />
    </section>
  )
}
