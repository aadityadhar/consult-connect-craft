
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, Mail, Calendar, Cloud, Shield, Code, Database, Zap, Users, CheckCircle, Star, TrendingUp, Award, ArrowRight, ArrowLeft } from 'lucide-react';
import CostCalculator from '@/components/CostCalculator';
import ContactSection from '@/components/ContactSection';
import MobileNav from '@/components/MobileNav';

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
    { number: "10+", label: "Projects Delivered", icon: CheckCircle },
    { number: "4+", label: "Years Experience", icon: Star },
    { number: "98%", label: "Client Satisfaction", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Mail }
  ];

  const workflowSteps = [
    { number: 1, title: "Stakeholder Connection", description: "We connect with stakeholders first to understand exact requirements" },
    { number: 2, title: "Expert Screening", description: "Our SMEs interview and screen candidates according to client specifications" },
    { number: 3, title: "Client Interview", description: "Clients interview selected candidates to ensure perfect team fit" },
    { number: 4, title: "Resource Allocation", description: "Resources are allocated to the client where they report to the stakeholders and ensure their requirements are being fulfilled" },
    { number: 5, title: "Continuous Engagement", description: "Our administrators engage with your stakeholders on a weekly basis to ensure this process is consistently followed, fostering collaboration and alignment" }
  ];

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              <h1 className="text-lg sm:text-xl font-bold">DHARESQUE</h1>
              <p className="text-xs sm:text-sm text-muted-foreground">Consulting Services</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">Why us?</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
          <MobileNav />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-primary/10 rounded-full text-xs sm:text-sm font-medium text-primary mb-4 sm:mb-6">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Trusted by 4 Companies Worldwide
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            Delivering Success Stories
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            We utilize cutting-edge technology to create impactful IT solutions that drive business growth - 
            delivering better, faster, and more cost-effective services than the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4">
            <Button size="lg" className="px-6 sm:px-8 shadow-lg min-h-[48px]" onClick={scrollToPricing}>
              <Calculator className="mr-2 h-5 w-5" />
              Explore Pricing
            </Button>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
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
      <section id="services" className="py-12 sm:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Services</h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Comprehensive IT solutions delivered by expert teams across the globe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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

      {/* Pricing */}
      <section id="pricing" className="py-12 sm:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Pricing</h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Get an instant estimate for your project based on team size, expertise level, and region
            </p>
          </div>
          <CostCalculator />
        </div>
      </section>

      {/* Why Choose Dharesque */}
      <section id="about" className="py-12 sm:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Why Choose Dharesque?</h3>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16 sm:mb-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">No hidden fees or overhead costs</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Direct access to skilled professionals</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Tailored high-performance, optimized, and clean solutions</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Flexible engagement models</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">24/7 support available</p>
              </div>
            </div>
          </div>

          {/* Our Unique Approach Workflow */}
          <div className="mb-16 sm:mb-32">
            <h4 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">Our Unique Approach</h4>
            <div className="max-w-6xl mx-auto">
              <div className="relative">
                {/* Mobile: Stack vertically, Desktop: Show workflow with arrows */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
                  {workflowSteps.map((step, index) => (
                    <div key={step.number} className="relative">
                      <Card className="border-primary/20 bg-background/60 backdrop-blur h-full">
                        <CardContent className="p-4 text-center">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mx-auto mb-3">
                            {step.number}
                          </div>
                          <h5 className="font-semibold text-sm mb-2">{step.title}</h5>
                          <p className="text-xs text-muted-foreground">{step.description}</p>
                        </CardContent>
                      </Card>
                      
                      {/* Forward arrows between steps 1-3 */}
                      {index < 3 && (
                        <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                          <ArrowRight className="w-6 h-6 text-primary" />
                        </div>
                      )}
                      
                      {/* Forward arrow from step 3 to 4 */}
                      {index === 3 && (
                        <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                          <ArrowRight className="w-6 h-6 text-primary" />
                        </div>
                      )}
                      
                      {/* Backward arrow from step 5 to 4 positioned below the forward arrow */}
                      {index === 4 && (
                        <div className="hidden md:block absolute top-3/4 -left-3 transform -translate-y-1/2 z-10">
                          <ArrowLeft className="w-6 h-6 text-primary" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Notable Achievements */}
          <div className="text-center px-4">
            <h4 className="text-xl sm:text-2xl font-semibold mb-6">Notable Achievements</h4>
            <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/20 max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  4+ Years with Outsystems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Long-term partnership building, delivering and maintaining solutions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-12 sm:py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Global Reach</h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Headquartered in India, we provide services worldwide through remote delivery. 
            On-premises services available upon request for clients requiring physical presence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
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
                <p className="text-muted-foreground text-sm">Headquartered in India with expertise sourced globally</p>
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
      <footer className="bg-muted py-8 sm:py-12 px-4 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">D</span>
              </div>
              <span className="text-base sm:text-lg font-semibold text-center sm:text-left">Dharesque Private Limited</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              © 2022 Dharesque Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
