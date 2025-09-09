import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { User, Wrench, Handshake, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-tech-careers.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={heroImage} 
            alt="Tech professionals collaborating" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl text-foreground mb-6">
              Launch Your Dream Tech Career—With Confidence
            </h1>
            <h3 className="font-open-sans text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Anext Technology LLC helps aspiring and experienced IT professionals land high-growth roles through personalized coaching, skill development, and direct access to top employers.
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-elegant">
                <Link to="/contact">👉 Start Your Free Career Assessment</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/services">
                  Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Anext Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
            Why Job Seekers Trust Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-elegant transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                  One-on-One Career Guidance
                </h3>
                <p className="font-open-sans text-muted-foreground">
                  We don't treat you like a resume number. Our certified coaches create a custom roadmap based on your goals, experience, and skills.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                  Industry-Ready Technical Training
                </h3>
                <p className="font-open-sans text-muted-foreground">
                  Gain hands-on experience in high-demand areas like cloud, cybersecurity, full-stack development, and DevOps.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                  Real Connections, Real Opportunities
                </h3>
                <p className="font-open-sans text-muted-foreground">
                  We partner with growing tech firms and startups actively hiring—giving you insider access to unadvertised roles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Numbers Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
            Proven Results, Real Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-2">
                850+
              </div>
              <div className="font-open-sans text-muted-foreground">
                Professionals Placed
              </div>
            </div>
            <div className="text-center">
              <div className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-2">
                92%
              </div>
              <div className="font-open-sans text-muted-foreground">
                Interview Success Rate
              </div>
            </div>
            <div className="text-center">
              <div className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-2">
                4.8/5
              </div>
              <div className="font-open-sans text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-2">
                30+
              </div>
              <div className="font-open-sans text-muted-foreground">
                Partner Companies
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <blockquote className="font-open-sans text-lg text-muted-foreground italic max-w-2xl mx-auto">
              "Anext didn't just get me a job—they helped me become the candidate companies wanted."
              <cite className="block mt-2 font-semibold text-foreground not-italic">
                – Maria T., Software Engineer
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
            Your Journey in 8 Simple Steps
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Career Assessment – We evaluate your background and goals",
                "Skill Gap Analysis – Identify what you need to grow", 
                "Training Plan – Enroll in hands-on tech modules",
                "Resume & Profile Build – Craft a standout application",
                "Profile Marketing – We promote you to hiring managers",
                "Interview Prep – Mock sessions with real feedback",
                "Job Offer Support – Help with negotiation & decision",
                "Onboarding Success – Smooth transition into your new role"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-poppins font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="font-open-sans text-foreground">{step}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="shadow-elegant">
                <Link to="/contact">
                  Ready to begin? Schedule your free consultation today →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Your Tech Career Starts Here
          </h2>
          <p className="font-open-sans text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Stop searching. Start succeeding. Let Anext Technology guide you to the job you deserve.
          </p>
          <Button 
            asChild 
            variant="secondary" 
            size="lg"
            className="shadow-elegant"
          >
            <Link to="/contact">
              📞 Get Started – Free Career Session
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;