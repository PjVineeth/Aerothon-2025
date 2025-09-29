import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhyParticipateSection } from "@/components/why-participate-section"
import { ProblemStatementsSection } from "@/components/problem-statements-section"
import { ImportantDatesSection } from "@/components/important-dates-section"
import { RegistrationSection } from "@/components/registration-section"
import ComingSoon from "@/components/comingsoon"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <ComingSoon />
      </main>
      {/* <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyParticipateSection />
        <ProblemStatementsSection />
        <ImportantDatesSection />
        <RegistrationSection />
      </main>
      <Footer /> */}
    </div>
  )
}
