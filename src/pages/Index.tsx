
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, Mail, Calendar, Cloud, Shield, Code, Database, Zap, Users, CheckCircle, Star, TrendingUp, Award } from 'lucide-react';
import CostCalculator from '@/components/CostCalculator';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration solutions",
      features: ["AWS, Azure, GCP", "Migration Planning", "Cost Optimization"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business",
      features: ["Security Audits", "Compliance", "Threat Assessment"]
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your needs",
      features: ["Web Applications", "Mobile Apps", "API Development"]
    },
    {
      icon: Zap,
      title: "System Integration",
      description: "Seamless integration of your existing systems",
      features: ["ERP Integration", "Data Sync", "Workflow Automation"]
    },
    {
      icon: Users,
      title: "Salesforce",
      description: "Salesforce implementation and customization",
      features: ["Implementation", "Customization", "Training & Support"]
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Data cleanup, migration, and engineering solutions",
      features: ["Data Pipeline", "ETL Processes", "Analytics Setup"]
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Delivered", icon: CheckCircle },
    { number: "4+", label: "Years Experience", icon: Star },
    { number: "95%", label: "Client Satisfaction", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Award }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Dharesque delivered exceptional results on our cloud migration project. Their expertise and attention to detail exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "VP Engineering, DataFlow",
      content: "The team's technical skills and communication were outstanding. They delivered our project on time and within budget.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">DHARESQUE</h1>
              <p className="text-sm text-muted-foreground">Consulting Services</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            <Award className="w-4 h-4 mr-2" />
            Trusted by 100+ Companies Worldwide
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            Cutting-Edge IT Solutions
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We utilize cutting-edge technology to create impactful IT solutions that drive business growth - 
            delivering better, faster, and more cost-effective services than the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="px-8 shadow-lg">
              <Calculator className="mr-2 h-5 w-5" />
              Check our Pricing
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="border-primary/20 bg-background/60 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions delivered by expert teams across the globe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/10">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-primary/20 bg-gradient-to-br from-background to-muted/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get an instant estimate for your project based on team size, expertise level, and region
            </p>
          </div>
          <CostCalculator />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Dharesque?</h3>
          </div>
          
          {/* Cost Benefits */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold mb-6 text-center">Cost-Effective Remote Solutions</h4>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto">
              While all remote teams reduce overhead costs and eliminate hidden expenses ensuring that your projects are delivered with lower costs, here's what sets us apart:
            </p>
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
              </div>
            </div>
            <div>
              <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-primary" />
                    Proven Track Record
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold">4+ Years with Outsystems</h5>
                      <p className="text-muted-foreground text-sm">
                        Long-term partnership building and maintaining infrastructure
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
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Global Reach</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Based in India, we provide services worldwide through remote delivery. 
            On-premises services available upon request for clients requiring physical presence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-background/60 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">🌍</span>
                </div>
                <h4 className="font-semibold mb-2">Global Services</h4>
                <p className="text-muted-foreground text-sm">Remote delivery worldwide</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-background/60 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">🏢</span>
                </div>
                <h4 className="font-semibold mb-2">India Headquarters</h4>
                <p className="text-muted-foreground text-sm">Based in India with expertise sourced globally</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-background/60 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">🤝</span>
                </div>
                <h4 className="font-semibold mb-2">Customer Centric</h4>
                <p className="text-muted-foreground text-sm">Customer centric with services available on-premises as required</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-muted py-12 px-4 border-t">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
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
