import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import img1 from "../assets/Navy Grey Creative Education Logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-15 h-10 bg-gradient-hero rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <img className="h-[70px]" src={img1} alt="" />
            </div>
            <span className="text-2xl font-bold text-foreground">LUMIO</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="text-foreground hover:text-primary transition-colors"
            >
              Courses
            </Link>
            <Link
              to="/become-teacher"
              className="text-foreground hover:text-primary transition-colors"
            >
              Teach
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="pl-10 w-64 bg-secondary/50 border-border focus:border-primary"
              />
            </div>
            <Link to={"/wishlist"}>
              <Heart size={24} color="#ff0000" />
            </Link>
            <Link to="/login">
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Sign Up
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <div className="relative mb-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search courses..."
                  className="pl-10 bg-secondary/50"
                />
              </div>
              <Link
                to="/"
                className="px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/become-teacher"
                className="px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Teach
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="flex gap-2 pt-2">
                <Link
                  to="/login"
                  className="flex-1"
                  onClick={() => setIsOpen(false)}
                >
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link
                  to="/register"
                  className="flex-1"
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
