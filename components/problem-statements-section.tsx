import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Eye, Brain } from "lucide-react"

export function ProblemStatementsSection() {
  return (
    <section id="problems" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Challenge Yourself with Real-World Problems
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose from two carefully curated problem statements designed to push the boundaries of innovation
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl space-y-8">
          {/* Problem Statement 1 */}
          <Card className="border border-border-primary/50 hover:border-orange-500-to-red-500 bg-card/50 backdrop-blur transition-colors duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 p-0.5">
                    <div className="w-full h-full bg-card rounded-md flex items-center justify-center">
                      <Eye className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">AI-Powered Industrial Object Inspection</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Computer Vision & Machine Learning Challenge
                    </CardDescription>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <Badge variant="secondary">Advanced</Badge>
                  <Badge variant="outline">24 Hours</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                In manufacturing industries, quality control is often performed manually, making the process
                time-consuming, error-prone, and inconsistent. There is a growing need for an intelligent, real-time
                inspection system that can automatically detect defects and measure object dimensions without human
                intervention.
              </p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="requirements-1">
                  <AccordionTrigger>Task Requirements</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">1. Anomaly Detection</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Use machine learning/computer vision methods to detect visual anomalies</li>
                        <li>Detect missing parts, surface defects, texture inconsistencies</li>
                        <li>Provide visual feedback highlighting defective regions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">2. Real-Time Size Measurement</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Measure object dimensions from live video feed</li>
                        <li>High accuracy requirements (±1-2 mm tolerance)</li>
                        <li>Display measurements overlaid on video stream</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="output-1">
                  <AccordionTrigger>Expected Output</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Working prototype processing live camera input</li>
                      <li>Real-time processing (15+ FPS)</li>
                      <li>Export inspection results (CSV/JSON format)</li>
                      <li>Combined pipeline integration</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Problem Statement 2 */}
          <Card className="border border-border-primary/50 hover:border-blue-500-to-cyan-500 bg-card/50 backdrop-blur transition-colors duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 p-0.5">
                    <div className="w-full h-full bg-card rounded-md flex items-center justify-center">
                      <Brain className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Offline AI-Powered RAG Knowledge Portal</CardTitle>
                    <CardDescription className="text-base mt-2">
                      AI/ML & Natural Language Processing Challenge
                    </CardDescription>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <Badge variant="destructive">Expert</Badge>
                  <Badge variant="outline">24 Hours</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Organizations generate huge amounts of internal knowledge (technical manuals, research papers, project
                reports, compliance docs). Searching these documents manually is inefficient, and cloud/internet-based
                solutions raise privacy and security concerns.
              </p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="features-2">
                  <AccordionTrigger>Core Features</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">1. Document Upload & Indexing</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Multi-format support (PDF/DOCX/TXT)</li>
                        <li>AI embeddings and preprocessing</li>
                        <li>System indexing using AI embeddings</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">2. AI Model Integration</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Offline LLM implementation</li>
                        <li>RAG pipeline (Retriever + Generator)</li>
                        <li>Document-based response generation only</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">3. Interactive Chatbot</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Natural language queries</li>
                        <li>Citation and source referencing</li>
                        <li>Complete offline operation</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="constraints-2">
                  <AccordionTrigger>Constraints & Bonus</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Constraints</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Complete offline operation (no internet)</li>
                        <li>Local hardware optimization</li>
                        <li>Data privacy assurance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Bonus Challenges</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Incremental learning implementation</li>
                        <li>Role-based access control</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
