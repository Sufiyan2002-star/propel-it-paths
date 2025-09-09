import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Users, 
  FileText, 
  Laptop, 
  Mic, 
  Handshake, 
  CheckCircle, 
  ArrowRight,
  Phone
} from "lucide-react";
import techPatternBg from "@/assets/tech-pattern-bg.jpg";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Personalized Career Roadmap",
      subtitle: "Career Coaching & Planning",
      description: "Identify your strengths, clarify your goals, and build a step-by-step plan to enter or advance in the tech industry. Whether you're switching careers or leveling up, our certified coaches guide you with clarity and confidence.",
      includes: "1-on-1 sessions, skills assessment, goal setting, timeline planning",
      cta: "Learn More"
    },
    {
      icon: FileText,
      title: "ATS-Friendly Resume Development",
      subtitle: "Resume & LinkedIn Optimization",
      description: "Your resume is your first impression. Our expert writers craft compelling, keyword-optimized resumes and LinkedIn profiles tailored to pass automated screening systems and impress hiring managers.",
      includes: "2 draft revisions, ATS testing, LinkedIn headline & summary",
      cta: "See Sample Resumes"
    },
    {
      icon: Laptop,
      title: "Hands-On IT Skill Building",
      subtitle: "Technical Training Programs",
      description: "Gain real-world experience in high-demand tech areas like Python, JavaScript, AWS, Azure, cybersecurity fundamentals, and more. Learn from working professionals through project-based modules.",
      includes: "Live workshops, recorded sessions, capstone projects, certification prep",
      cta: "View Training Schedule"
    },
    {
      icon: Mic,
      title: "Mock Interviews & Technical Drills",
      subtitle: "Interview Preparation",
      description: "Ace your interviews with confidence. We conduct realistic mock sessions—including coding challenges, system design, and behavioral questions—with detailed feedback to improve your performance.",
      includes: "2 mock interviews, feedback report, question bank access",
      cta: "Schedule Practice Session"
    },
    {
      icon: Handshake,
      title: "Direct Access to Hiring Companies",
      subtitle: "Job Placement & Employer Marketing",
      description: "We don't just coach—you get real exposure. Our recruiters actively market your profile to vetted tech employers actively seeking talent like you.",
      includes: "Profile submission, interview scheduling, employer follow-up",
      cta: "See Our Partner Companies"
    },
    {
      icon: CheckCircle,
      title: "Smooth Transition Into Your New Role",
      subtitle: "Onboarding & Compliance Support",
      description: "From background checks to document verification, we guide you through every step of onboarding so you can start your new job stress-free.",
      includes: "Document checklist, compliance guidance, offer review",
      cta: "Get Onboarding Help"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src={techPatternBg} 
            alt="Tech pattern background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl text-foreground mb-6">
              Our Career Support Services
            </h1>
            <p className="font-open-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything You Need to Land and Grow in a Tech Role
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-poppins text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                  <p className="font-open-sans text-sm font-semibold text-primary">
                    {service.subtitle}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="font-open-sans text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="bg-background/50 p-3 rounded-lg mb-4">
                    <p className="font-open-sans text-sm text-foreground">
                      <strong>Includes:</strong> {service.includes}
                    </p>
                  </div>
                  <Button variant="outline" className="w-full">
                    {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-8">
              Why Choose Our Comprehensive Approach?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="text-left">
                <h3 className="font-poppins font-semibold text-xl text-foreground mb-4">
                  Integrated Career Journey
                </h3>
                <p className="font-open-sans text-muted-foreground">
                  Unlike competitors who offer isolated services, we provide a seamless end-to-end experience from skill assessment to job placement and beyond.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-poppins font-semibold text-xl text-foreground mb-4">
                  Industry-Current Training
                </h3>
                <p className="font-open-sans text-muted-foreground">
                  Our curriculum evolves with the tech landscape, ensuring you learn the most in-demand skills that employers actually need right now.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-poppins font-semibold text-xl text-foreground mb-4">
                  Dedicated Success Partners
                </h3>
                <p className="font-open-sans text-muted-foreground">
                  You're not just a number. Each client gets a dedicated success manager who knows your goals and advocates for your career advancement.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-poppins font-semibold text-xl text-foreground mb-4">
                  Proven Employer Network
                </h3>
                <p className="font-open-sans text-muted-foreground">
                  We've built relationships with 30+ growing tech companies actively hiring, giving you access to opportunities others never see.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-6">
              Flexible Service Packages
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground">
              Choose individual services or combine them for maximum impact on your career trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card border-2 border-transparent hover:border-primary/20 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="font-poppins text-xl text-foreground">Starter Package</CardTitle>
                <p className="font-open-sans text-muted-foreground">Perfect for career exploration</p>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-3 font-open-sans text-sm text-muted-foreground mb-6">
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Career Assessment & Planning</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Resume Optimization</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>1 Mock Interview Session</span>
                  </li>
                </ul>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-2 border-primary/30">
              <CardHeader className="text-center">
                <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                  Most Popular
                </div>
                <CardTitle className="font-poppins text-xl text-foreground">Professional Package</CardTitle>
                <p className="font-open-sans text-muted-foreground">Complete career transformation</p>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-3 font-open-sans text-sm text-muted-foreground mb-6">
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Everything in Starter Package</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Technical Training Program</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Active Job Placement Support</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Onboarding Assistance</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card border-2 border-transparent hover:border-primary/20 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="font-poppins text-xl text-foreground">Executive Package</CardTitle>
                <p className="font-open-sans text-muted-foreground">Leadership-level advancement</p>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-3 font-open-sans text-sm text-muted-foreground mb-6">
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Everything in Professional Package</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Executive Interview Coaching</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Salary Negotiation Support</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>90-Day Success Follow-up</span>
                  </li>
                </ul>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service CTA Banner */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            All Services. One Support Partner.
          </h2>
          <p className="font-open-sans text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Combine coaching, training, and placement into a seamless career journey.
          </p>
          <Button 
            asChild 
            variant="secondary" 
            size="lg"
            className="shadow-elegant"
          >
            <Link to="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Talk to a Career Advisor
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;