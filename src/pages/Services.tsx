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

      {/* Pricing Plans Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-6">
              Special Benefits Comparison
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground">
              Choose the plan that best fits your career goals and budget
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Silver Plan */}
            <Card className="shadow-card border-2 border-transparent hover:border-primary/20 transition-colors">
              <CardHeader className="text-center bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-lg">
                <div className="bg-slate-600 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-2">
                  SILVER
                </div>
                <CardTitle className="font-poppins text-2xl text-foreground">$1000</CardTitle>
                <p className="font-open-sans text-sm text-muted-foreground">Service Fee</p>
                <p className="font-open-sans text-lg font-semibold text-foreground">$1000 Offer Letter</p>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 font-open-sans text-sm mb-6">
                  <li className="flex items-center space-x-3">
                    <span className="text-red-500">✗</span>
                    <span>No Interview Support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-red-500">✗</span>
                    <span>No Background Check</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span>30 Interview Resume & Marketing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-amber-500 font-bold">7%</span>
                    <span>Total Annual Income</span>
                  </li>
                </ul>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/contact">Choose Silver</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Gold Plan */}
            <Card className="shadow-card border-2 border-transparent hover:border-primary/20 transition-colors">
              <CardHeader className="text-center bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-t-lg">
                <div className="bg-yellow-600 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-2">
                  GOLD
                </div>
                <CardTitle className="font-poppins text-2xl text-foreground">$2500</CardTitle>
                <p className="font-open-sans text-sm text-muted-foreground">Service Fee</p>
                <p className="font-open-sans text-lg font-semibold text-foreground">$2500 Offer Letter</p>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 font-open-sans text-sm mb-6">
                  <li className="flex items-center space-x-3">
                    <span className="text-red-500">✗</span>
                    <span>No Interview Support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span>Background Check</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span>Resume & Marketing Support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-amber-500 font-bold">5%</span>
                    <span>Total Annual Income</span>
                  </li>
                </ul>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/contact">Choose Gold</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Platinum Plan */}
            <Card className="shadow-elegant border-2 border-primary/30">
              <CardHeader className="text-center bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg">
                <div className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-2">
                  PLATINUM
                </div>
                <CardTitle className="font-poppins text-2xl text-foreground">$5000</CardTitle>
                <p className="font-open-sans text-sm text-muted-foreground">Service Fee</p>
                <p className="font-open-sans text-lg font-semibold text-foreground">$2000 Offer Letter</p>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 font-open-sans text-sm mb-6">
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span>Background Support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span>Background Check</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span>Complete Career Support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-amber-500 font-bold">5%</span>
                    <span>Total Annual Income</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Choose Platinum</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Comparison Table */}
          <div className="bg-white rounded-lg shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-50 to-blue-50">
                    <th className="text-left p-4 font-poppins font-semibold text-foreground border-r">
                      Special Benefits Comparison
                    </th>
                    <th className="text-center p-4 font-poppins font-semibold bg-slate-100 border-r">
                      <div className="bg-slate-600 text-white text-xs px-3 py-1 rounded-full inline-block">SILVER</div>
                    </th>
                    <th className="text-center p-4 font-poppins font-semibold bg-yellow-100 border-r">
                      <div className="bg-yellow-600 text-white text-xs px-3 py-1 rounded-full inline-block">GOLD</div>
                    </th>
                    <th className="text-center p-4 font-poppins font-semibold bg-blue-100">
                      <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full inline-block">PLATINUM</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="font-open-sans">
                  <tr className="border-b">
                    <td className="p-4 font-medium">1 on 1 Resume Session</td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="p-4 font-medium">Interview Assistant Support</td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Chat Support</td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="p-4 font-medium">Mock Interview Session</td>
                    <td className="text-center p-4"><span className="text-red-500 text-xl">✗</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Live Training with Tech-expert</td>
                    <td className="text-center p-4"><span className="text-red-500 text-xl">✗</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="p-4 font-medium">1 on 1 Interview Session</td>
                    <td className="text-center p-4"><span className="text-red-500 text-xl">✗</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Technical Assessment Support</td>
                    <td className="text-center p-4"><span className="text-red-500 text-xl">✗</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="p-4 font-medium">1 on 1 TQC</td>
                    <td className="text-center p-4"><span className="text-red-500 text-xl">✗</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Interview Support Till Placement</td>
                    <td className="text-center p-4"><span className="text-red-500 text-xl">✗</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="p-4 font-medium">24*7 Recruiter Support</td>
                    <td className="text-center p-4"><span className="text-red-500 text-xl">✗</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Email Handling Support</td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="p-4 font-medium">Email + LinkedIn Support</td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Payment Term Extension</td>
                    <td className="text-center p-4"><span className="text-red-500 text-xl">✗</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                    <td className="text-center p-4"><span className="text-green-500 text-xl">✓</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
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