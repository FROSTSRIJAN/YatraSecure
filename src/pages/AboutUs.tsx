import { Shield, Users, Target, Heart, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-northeast.jpg";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-cultural bg-clip-text text-transparent">
              YATRA SECURE
            </span>
          </div>
          <Button variant="outline" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="India" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-cultural bg-clip-text text-transparent">
                About Our Mission
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Preserving our cultural identity while embracing technological advancement for tourist safety
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The YATRA SECURE Tourist Safety & Incident Response System is dedicated to protecting travelers 
                while celebrating the rich cultural heritage of India. We combine cutting-edge 
                blockchain technology with AI-powered safety measures to ensure every tourist can explore 
                our country with confidence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <span>Ensure tourist safety through advanced technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-primary" />
                  <span>Preserve and promote Indian culture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-primary" />
                  <span>Foster sustainable tourism development</span>
                </div>
              </div>
            </div>
            
            <Card className="card-cultural">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-primary" />
                  <span>Our Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To make India the safest and most culturally enriching tourist destination 
                  in the world, where technology seamlessly integrates with tradition to create 
                  unforgettable experiences for every visitor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Indian States */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Coverage Across India</h2>
            <p className="text-xl text-muted-foreground">
              Protecting travelers across the magnificent states of India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Delhi", capital: "New Delhi", feature: "Capital & Heritage Sites" },
              { name: "Maharashtra", capital: "Mumbai", feature: "Gateway of India & Beaches" },
              { name: "Karnataka", capital: "Bengaluru", feature: "Tech Hub & Palaces" },
              { name: "Rajasthan", capital: "Jaipur", feature: "Forts & Deserts" },
              { name: "Tamil Nadu", capital: "Chennai", feature: "Temples & Culture" },
              { name: "Kerala", capital: "Thiruvananthapuram", feature: "Backwaters & Beaches" },
              { name: "Goa", capital: "Panaji", feature: "Beaches & Portuguese Heritage" }
            ].map((state, index) => (
              <Card key={index} className="card-cultural hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{state.name}</CardTitle>
                  <CardDescription>Capital: {state.capital}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{state.feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Wisdom */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Traditional Wisdom</h2>
            <p className="text-xl text-muted-foreground">
              Integrating ancient knowledge with modern safety
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="card-cultural p-8">
              <blockquote className="text-center italic text-lg text-muted-foreground mb-6">
                "Preserving our cultural identity while embracing technological advancement for tourist safety"
              </blockquote>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Community First</h3>
                  <p className="text-sm text-muted-foreground">
                    Our safety system is built on the foundation of strong community bonds
                  </p>
                </div>
                
                <div className="text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Striving for the highest standards in tourist safety and cultural preservation
                  </p>
                </div>
                
                <div className="text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Care</h3>
                  <p className="text-sm text-muted-foreground">
                    Every tourist is treated as a guest in our beautiful homeland
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Connect with us for a safer travel experience
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="card-cultural p-8 text-center">
              <h3 className="text-2xl font-bold mb-6">India</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>📍 New Delhi, India</p>
                <p>📞 Emergency: 112 | Tourist Helpline: 1363</p>
                <p>✉️ safety@netourist.gov.in</p>
              </div>
              <div className="mt-8">
                <Button className="btn-cultural" onClick={() => navigate("/")}>
                  Return to Homepage
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 YATRA SECURE - All India Tourist Safety System. All rights reserved.</p>
          <p className="mt-2">Developed for incredible India</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;