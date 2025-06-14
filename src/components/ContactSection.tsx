
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Calendar } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your project? Contact us via email or schedule a consultation call.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Schedule Meeting */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Consultation
              </CardTitle>
              <CardDescription>
                Book a free 30-minute consultation to discuss your project requirements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" size="lg" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Book a Meeting
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h5 className="font-medium mb-1">Email</h5>
                <p className="text-muted-foreground">contact@dharesque.com</p>
              </div>
              
              <div>
                <h5 className="font-medium mb-1">Location</h5>
                <p className="text-muted-foreground">India (Global Remote Services)</p>
              </div>
              
              <div>
                <h5 className="font-medium mb-1">Business Hours</h5>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                  Available for global time zones
                </p>
              </div>
              
              <div>
                <h5 className="font-medium mb-1">Response Time</h5>
                <p className="text-muted-foreground">Within 24 hours</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
