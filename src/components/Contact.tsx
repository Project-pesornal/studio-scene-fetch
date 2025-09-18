import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      details: ["123 Innovation Street", "Randvaal, Gauteng", "South Africa, 1911"]
    },
    {
      icon: Phone,
      title: "Phone & Fax",
      details: ["+27 123 456 7890", "+27 123 456 7891 (Fax)"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@guardianangel.com", "support@guardianangel.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8AM - 6PM", "Saturday: 9AM - 3PM", "Sunday: Closed"]
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Ready to start your next project? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="bg-transparent border-glass-border"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="bg-transparent border-glass-border"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What is this about?"
                  className="bg-transparent border-glass-border"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project or inquiry..."
                  className="bg-transparent border-glass-border min-h-[120px]"
                  disabled={isSubmitting}
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending Message..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 text-foreground">Find Us</h3>
              <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive map coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;