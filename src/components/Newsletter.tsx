import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsSubmitting(false);
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter. You'll receive the latest updates about movies and services.",
      });
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div className="glass rounded-xl p-6 text-center">
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-6 h-6 text-white" />
        </div>
        <h5 className="font-semibold text-foreground mb-2">You're all set!</h5>
        <p className="text-muted-foreground text-sm">
          Thanks for subscribing to our newsletter.
        </p>
      </div>
    );
  }

  return (
    <div className="glass rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Mail className="w-5 h-5 text-primary" />
        <h5 className="font-semibold text-foreground">Stay Updated</h5>
      </div>
      <p className="text-muted-foreground text-sm mb-4">
        Get the latest movie releases, exclusive content, and special offers delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input 
          type="email" 
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border-glass-border"
          disabled={isSubmitting}
        />
        <Button 
          type="submit" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe to Newsletter"}
        </Button>
      </form>
      <p className="text-xs text-muted-foreground mt-3">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default Newsletter;