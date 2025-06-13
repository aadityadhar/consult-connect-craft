
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, Mail, Calendar, Cloud, Shield, Code, Database, Zap, Users } from 'lucide-react';
import CostCalculator from '@/components/CostCalculator';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration solutions"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your needs"
    },
    {
      icon: Zap,
      title: "System Integration",
      description: "Seamless integration of your existing systems"
    },
    {
      icon: Users,
      title: "Salesforce",
      description: "Salesforce implementation and customization"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Data cleanup, migration, and engineering solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Logo placeholder */}
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Dharesque Private Limited</h1>
              <p className="text-sm text-muted-foreground">IT Solutions & Consulting</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#calculator" className="text-sm font-medium hover:text-primary transition-colors">Cost Calculator</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Cutting-Edge IT Solutions
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We utilize cutting-edge technology to create impactful IT solutions that drive business growth - 
            delivering better, faster, and more cost-effective services than the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Calculator className="mr-2 h-5 w-5" />
              Get Cost Estimate
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions delivered by expert teams across the globe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section id="calculator" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Project Cost Calculator</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get an instant estimate for your project based on team size and expertise level
            </p>
          </div>
          <CostCalculator />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Dharesque?</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-semibold mb-6">Our Unique Approach</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    We connect with stakeholders first to understand exact requirements
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Our SMEs interview and screen candidates according to client specifications
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Clients interview selected candidates to ensure perfect team fit
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Weekly check-ins ensure project quality and client satisfaction
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Remote teams reduce overhead costs and eliminate hidden expenses
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Proven Track Record</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold">3+ Years with Outsystems, Portugal</h5>
                      <p className="text-muted-foreground text-sm">
                        Long-term partnership building and maintaining infrastructure
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold">2+ Years with Indian Companies</h5>
                      <p className="text-muted-foreground text-sm">
                        Successful annual contracts with periodic renewals and uplifts
                      </p>
                    </div>
                    <div className="pt-2">
                      <p className="text-sm font-medium text-primary">
                        Flexible 1-year contracts with 1-month notice period
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Global Reach</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Based in India, we provide services worldwide through remote delivery. 
            On-premises services available upon request for clients requiring physical presence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">🌍</span>
              </div>
              <h4 className="font-semibold mb-2">Global Services</h4>
              <p className="text-muted-foreground text-sm">Remote delivery worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">🏢</span>
              </div>
              <h4 className="font-semibold mb-2">India Headquarters</h4>
              <p className="text-muted-foreground text-sm">Based in India with local expertise</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">🤝</span>
              </div>
              <h4 className="font-semibold mb-2">On-Premises Option</h4>
              <p className="text-muted-foreground text-sm">Available when required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">D</span>
            </div>
            <span className="text-lg font-semibold">Dharesque Private Limited</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Cutting-edge IT solutions that drive business growth
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Dharesque Private Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
