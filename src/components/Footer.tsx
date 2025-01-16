import Link from 'next/link'
import { LinkedinIcon as LinkedIn, Instagram, Twitter} from 'lucide-react'
// Mail should be added

export default function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Amogh Shirke. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com/in/amogh-shirke/" target="_blank" rel="noopener noreferrer">
              <LinkedIn className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://www.instagram.com/amogh_shirke?igsh=MWs3aWMxMW82c25rZQ==" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://x.com/Amogh_Shirke25?t=XXYwGf6CrzNb_OefoMvexA&s=09" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Designed by{' '}
            <Link href="mailto:ubhangare32@gmail.com" className="hover:text-primary transition-colors">
              Uday Bhangare
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

