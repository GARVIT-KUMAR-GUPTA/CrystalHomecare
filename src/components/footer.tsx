import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <a className="text-2xl font-bold text-primary">Crystal Home Care</a>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Professional home care services providing compassionate care for your loved ones.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Personal Care</a></li>
              <li><a href="#" className="hover:text-primary">Home Healthcare</a></li>
              <li><a href="#" className="hover:text-primary">24/7 Support</a></li>
              <li><a href="#" className="hover:text-primary">Specialized Care</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary">About Us</a></li>
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Crystal Home Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
