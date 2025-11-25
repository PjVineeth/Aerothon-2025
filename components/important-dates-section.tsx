import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Trophy } from "lucide-react"

export function ImportantDatesSection() {
  const timeline = [
    {
      date: "November 24, 2025",
      day: "Monday",
      title: "Hackathon Announcement & Registration Opens",
      description: "Official launch and problem statement release and registration opens",
      icon: Calendar,
      status: "completed",
      gradient: "from-orange-500 to-red-500",
    },
    {
      date: "December 15, 2025",
      day: "Monday",
      title: "Last Date for Registration & Submission",
      description: (
        <>
          Last Date for Team Registration, <a href="https://docs.google.com/document/d/13Uj3yYFpbKGCN7ylD9YoIPEu6Zk5no3IKkYRp1W8Kw4/edit?usp=sharing" className="underline underline-offset-1 hover:text-primary">Presentation (PPT)</a>, <a>Technical Report</a>.
          <br />
          The team leader has to register the team by submitting the ppt, report, recorded video of the presentation.
        </>
      ),
      icon: Users,
      status: "upcoming",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      date: "December 25, 2025",
      day: "Thursday",
      title: "Shortlisted Team Announcement",
      description: "Selected teams notified for final hackathon (Equal number of teams will be shortlisted from each problem statement)",
      icon: Clock,
      status: "upcoming",
      gradient: "from-green-500 to-teal-500",
    },
    {
      date: "January 9-10, 2026",
      day: "Friday-Saturday",
      title: "AEROTHON 2026 - 24 Hour Hackathon",
      description: "24 Hours Continuous • Venue: IIIT Dharwad, Karnataka",
      icon: Trophy,
      status: "upcoming",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="dates" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Mark Your Calendar</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">Key dates and milestones for AEROTHON 2026</p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < timeline.length - 1 && <div className="absolute left-6 top-16 h-16 w-0.5 bg-border" />}

                <Card className={`border border-border-primary/50 hover:border-${event.gradient} bg-card/50 backdrop-blur transition-colors duration-300`}>
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${event.gradient} p-0.5 flex-shrink-0 hidden sm:block`}>
                        <div className="w-full h-full bg-card rounded-md flex items-center justify-center">
                          <event.icon className="w-6 h-6 text-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                          <Badge variant={event.status === "completed" ? "secondary" : "default"}>
                            {event.status === "completed" ? "Completed" : "Upcoming"}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-sm font-medium text-primary">{event.date}</span>
                          <span className="text-sm text-muted-foreground">({event.day})</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Preparation Guidelines */}
          <Card className="mt-16 border border-border-primary/50 hover:border-green-500-to-teal-500 bg-muted/30 backdrop-blur transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-xl">How to Prepare</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Team Formation</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Team size: 4 members</li>
                    <li>Diversity encouraged (different disciplines)</li>
                    <li>Student eligibility criteria</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technical Requirements</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Resource preparation tips</li>
                    <li>Submission format guidelines</li>
                    <li>Development environment setup</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
