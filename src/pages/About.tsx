import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Users, CheckCircle, Lightbulb, Heart, Calendar } from "lucide-react";
import techPatternBg from "@/assets/tech-pattern-bg.jpg";

const About = () => {
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
              Who We Are
            </h1>
            <p className="font-open-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A Career Partner Built for the Future of Tech
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-8">
              From Vision to Impact
            </h2>
            <div className="space-y-6 font-open-sans text-lg text-muted-foreground">
              <p>
                In 2019, a group of HR innovators and tech leaders founded Anext Technology LLC with a clear mission: to close the gap between skilled professionals and the fast-moving tech industry.
              </p>
              <p>
                We saw talented individuals struggling to break into IT—not because they lacked ability, but because they lacked access, guidance, and visibility.
              </p>
              <p>
                Today, we're proud to be one of the most trusted tech career accelerators in the U.S., helping hundreds of professionals launch, switch, or advance their careers in fields like software development, cybersecurity, cloud engineering, and data science.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-6">
                Our Mission
              </h2>
              <p className="font-open-sans text-lg text-muted-foreground mb-8">
                To empower every professional with the tools, training, and opportunities needed to thrive in the digital workforce.
              </p>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-xl text-foreground mb-6">Core Values</h3>
              <div className="space-y-4">
                {[
                  { icon: Heart, title: "Empowerment", description: "We believe in your potential." },
                  { icon: CheckCircle, title: "Excellence", description: "Every service is high-quality and results-driven." },
                  { icon: Users, title: "Transparency", description: "No hidden fees, no false promises." },
                  { icon: Lightbulb, title: "Innovation", description: "We evolve with the tech industry." },
                  { icon: Target, title: "Partnership", description: "We walk with you, every step of the way." }
                ].map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <value.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-foreground">{value.title}</h4>
                      <p className="font-open-sans text-muted-foreground text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-8 text-center">
              Not Just a Staffing Agency—A Career Accelerator
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <p className="font-open-sans text-muted-foreground mb-4">
                    Unlike traditional recruiters who only match resumes, we invest in your growth:
                  </p>
                  <ul className="space-y-3 font-open-sans text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>We offer free skill assessments and personalized development plans</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Our training is led by active industry professionals</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>You get a dedicated success manager—not a rotating agent</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>We focus on long-term career outcomes, not just short-term placements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                <blockquote className="font-open-sans text-lg text-foreground italic mb-4">
                  "Anext didn't place me in a job. They prepared me for a career."
                </blockquote>
                <cite className="font-poppins font-semibold text-muted-foreground not-italic">
                  – James R., Cloud Solutions Architect
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
            Ready to See If You Qualify?
          </h3>
          <p className="font-open-sans text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Take our 5-minute career readiness quiz or book a free consultation with our team.
          </p>
          <Button 
            asChild 
            variant="secondary" 
            size="lg"
            className="shadow-elegant"
          >
            <Link to="/contact">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Free Consultation
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;