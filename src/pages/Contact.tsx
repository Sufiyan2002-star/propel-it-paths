import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Linkedin, 
  Facebook, 
  Instagram,
  Send,
  Calendar
} from "lucide-react";
import techPatternBg from "@/assets/tech-pattern-bg.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    careerGoal: "",
    preferredService: [] as string[],
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Thank you! A career advisor will contact you within 24 hours.",
      description: "We've received your inquiry and will be in touch soon."
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      careerGoal: "",
      preferredService: [],
      message: ""
    });
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      preferredService: checked 
        ? [...prev.preferredService, service]
        : prev.preferredService.filter(s => s !== service)
    }));
  };

  const faqs = [
    {
      question: "Do you only work with IT professionals?",
      answer: "Yes, we specialize in technology roles including software development, cybersecurity, cloud, data, and IT support."
    },
    {
      question: "Are your services free?",
      answer: "Some services are free (e.g., initial consultation). Others are offered through affordable packages or employer-sponsored programs."
    },
    {
      question: "Do you help with visa or sponsorship?",
      answer: "We assist qualified candidates, but employment sponsorship depends on the hiring company."
    },
    {
      question: "Is training remote?",
      answer: "Yes—all programs are 100% online with live and recorded sessions."
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
              Let's Build Your Career Together
            </h1>
            <p className="font-open-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? Want to get started? Reach out—we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-poppins text-2xl text-foreground">
                  Start Your Career Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="fullName" className="font-open-sans text-foreground">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData(prev => ({...prev, fullName: e.target.value}))}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-open-sans text-foreground">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="font-open-sans text-foreground">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="careerGoal" className="font-open-sans text-foreground">
                      Career Goal
                    </Label>
                    <Select value={formData.careerGoal} onValueChange={(value) => setFormData(prev => ({...prev, careerGoal: value}))}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your career goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry-level">Entry-Level IT</SelectItem>
                        <SelectItem value="career-change">Career Change</SelectItem>
                        <SelectItem value="mid-level">Mid-Level Advancement</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="font-open-sans text-foreground mb-3 block">
                      Preferred Services (check all that apply)
                    </Label>
                    <div className="space-y-3">
                      {[
                        "Resume Help",
                        "Training", 
                        "Interview Prep",
                        "Job Placement",
                        "General Inquiry"
                      ].map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={service}
                            checked={formData.preferredService.includes(service)}
                            onChange={(e) => handleServiceChange(service, e.target.checked)}
                            className="rounded border-border"
                          />
                          <Label htmlFor={service} className="font-open-sans text-muted-foreground">
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-open-sans text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                      required
                      rows={4}
                      className="mt-2"
                      placeholder="Tell us about your career goals and how we can help..."
                    />
                  </div>

                  <Button type="submit" className="w-full shadow-elegant">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-poppins text-xl text-foreground">
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-poppins font-semibold text-foreground">Office Address</p>
                      <p className="font-open-sans text-muted-foreground">
                        Anext Technology LLC<br />
                        123 Innovation Drive, Suite 200<br />
                        Austin, TX 78701<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-poppins font-semibold text-foreground">Phone</p>
                      <p className="font-open-sans text-muted-foreground">+17723039206</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-poppins font-semibold text-foreground">Email</p>
                      <p className="font-open-sans text-muted-foreground">info@anextechnologyllc.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-poppins font-semibold text-foreground">Hours</p>
                      <p className="font-open-sans text-muted-foreground">
                        Monday–Friday: 9:00 AM – 6:00 PM (CST)<br />
                        Weekend: By Appointment
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="font-poppins font-semibold text-foreground mb-3">Follow Us</p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin size={20} />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Facebook size={20} />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Instagram size={20} />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Action Card */}
              <Card className="shadow-card bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="font-poppins font-semibold text-xl text-foreground mb-4">
                    Ready to Take the Next Step?
                  </h3>
                  <p className="font-open-sans text-muted-foreground mb-6">
                    Skip the form and schedule a direct call with our career advisors.
                  </p>
                  <Button className="shadow-elegant">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule a Free Career Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center text-foreground mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="font-open-sans text-muted-foreground">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;