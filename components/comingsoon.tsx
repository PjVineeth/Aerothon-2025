import { Badge } from "@/components/ui/badge"
import DotGrid from "./dotgrid"

function ComingSoon() {
    return (
        <section id="coming-soon" className="relative overflow-hidden bg-background min-h-screen">
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

                    <h4 className="block text-[20px] sm:text-[24px] leading-10 tracking-tight mt-2">Coming Soon</h4>
                </div>
            </div>

            {/* Scroll indicator */}
            {/* <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce mb-8 hidden sm:block">
                <div className="w-6 h-10 border-2 border-[#ed4b0b] dark:border-[#e24a3f] rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-[#ed4b0b] dark:bg-[#e24a3f] rounded-full mt-2 animate-pulse"></div>
                </div>
            </div> */}

            {/* Aerospace imagery placeholder */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/20 to-transparent" />
        </section>
    )
}

export default ComingSoon;
export { ComingSoon };