import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl">AEROTHON 2026</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              A flagship national-level hackathon by HAL in collaboration with IIIT Dharwad. Innovating the future of
              aerospace technology through student innovation.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>HAL × IIIT Dharwad</span>
              <span>•</span>
              <span>January 9-10, 2026</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#problems" className="hover:text-primary transition-colors">
                  Problem Statements
                </a>
              </li>
              <li>
                <a href="#dates" className="hover:text-primary transition-colors">
                  Important Dates
                </a>
              </li>
              <li>
                <a href="#registration" className="hover:text-primary transition-colors">
                  Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hackevents@iiitdwd.ac.in</span>
              </li>
              {/* <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 XXXXX XXXXX</span>
              </li> */}
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>IIIT Dharwad, Karnataka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2026 AEROTHON. Organized by IIIT Dharwad in collaboration with HAL.
            </p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              Designed & Developed by
              {" "}
              <a
                className="font-bold hover:text-primary transition-colors"
                href="https://pjvineeth.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pj Vineeth Kumar
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
