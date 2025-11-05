import { useState, useEffect, useCallback } from "react";
import { Shield, AlertTriangle, Map, Users, MessageCircle, Camera, Music, Palette, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Menu, X, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import CulturalModal, { CULTURAL_DATA } from "@/components/CulturalModal";
import heroImage from "@/assets/hero-northeast.jpg";
import traditionalDance from "@/assets/traditional-dance.jpg";
import northeastNature from "@/assets/northeast-nature.jpg";
import traditionalCrafts from "@/assets/traditional-crafts.jpg";

const HomePage = () => {
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedCulturalItem, setSelectedCulturalItem] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isModalOpening, setIsModalOpening] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCulturalModal = useCallback((itemId: string) => {
    if (isModalOpening) return; // Prevent rapid clicks
    
    const item = CULTURAL_DATA.find(item => item.id === itemId);
    if (item) {
      setIsModalOpening(true);
      setSelectedCulturalItem(item);
      setModalOpen(true);
      
      // Reset flag after a short delay
      setTimeout(() => setIsModalOpening(false), 500);
    }
  }, [isModalOpening]);

  const coreFeatures = [
    {
      icon: AlertTriangle,
      title: "SOS Emergency Alerts",
      description: "Instant emergency response system with GPS location tracking and automated notifications to authorities.",
      action: () => navigate("/emergency-sos")
    },
    {
      icon: Shield,
      title: "Blockchain Safety ID",
      description: "Secure, immutable digital identity system for tourists with encrypted personal data protection.",
      action: () => scrollToSection('dashboards')
    },
    {
      icon: Map,
      title: "Interactive India Map",
      description: "Explore Indian states with emergency contacts, tourist spots, culture, cuisine, and festivals - all in one place!",
      action: () => navigate("/india-map")
    },
    {
      icon: Users,
      title: "Multi-Role Dashboards",
      description: "Specialized interfaces for tourists, police, transport authorities, and system administrators.",
      action: () => scrollToSection('dashboards')
    }
  ];

  const culturalAddons = [
    {
      icon: Music,
      title: "Cultural Integration",
      description: "Folk songs, traditional dances, and cultural heritage showcase for authentic experiences."
    },
    {
      icon: Camera,
      title: "Nearby Attractions",
      description: "AI-powered recommendations for cultural sites, natural wonders, and local experiences."
    },
    {
      icon: MessageCircle,
      title: "AI Tourist Assistant",
      description: "Multilingual chatbot providing cultural insights, safety tips, and travel guidance."
    },
    {
      icon: Palette,
      title: "Heritage Preservation",
      description: "Digital documentation of tribal art, handicrafts, and traditional practices."
    }
  ];

  return (
    <div className="min-h-screen bg-background pattern-mountain">
      {/* Enhanced Header Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-card/95 backdrop-blur-lg shadow-lg border-b border-border' 
            : 'bg-card/80 backdrop-blur-sm border-b border-border'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToTop()}
              className="flex items-center space-x-2 group transition-all duration-300 hover:scale-105"
            >
              <Shield className="h-8 w-8 text-primary transition-transform group-hover:rotate-12" />
              <span className="text-xl font-bold bg-gradient-cultural bg-clip-text text-transparent">
                YATRA SECURE
              </span>
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-foreground/70 hover:text-primary transition-colors font-medium relative group"
              >
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
              <button 
                onClick={() => scrollToSection('culture')}
                className="text-foreground/70 hover:text-primary transition-colors font-medium relative group"
              >
                Culture
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
              <button 
                onClick={() => scrollToSection('dashboards')}
                className="text-foreground/70 hover:text-primary transition-colors font-medium relative group"
              >
                Dashboards
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
              <button 
                onClick={() => navigate("/about")}
                className="text-foreground/70 hover:text-primary transition-colors font-medium relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/login")}
                className="font-medium"
              >
                Login
              </Button>
              <Button 
                onClick={() => navigate("/register")}
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="flex flex-col space-y-2 pb-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('culture')}
                className="text-left px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors font-medium"
              >
                Culture
              </button>
              <button 
                onClick={() => scrollToSection('dashboards')}
                className="text-left px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors font-medium"
              >
                Dashboards
              </button>
              <button 
                onClick={() => navigate("/about")}
                className="text-left px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors font-medium"
              >
                About
              </button>
              <div className="flex flex-col space-y-2 pt-2">
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/login")}
                  className="w-full"
                >
                  Login
                </Button>
                <Button 
                  onClick={() => navigate("/register")}
                  className="w-full bg-gradient-to-r from-primary to-primary-glow"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Add padding for fixed header */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.7) contrast(1.1)' }}
          >
            <source src="/Welcome to India ! [CINEMATIC TRAVEL FILM].mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }} />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          {/* Glass Panel Container */}
          <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl animate-fadeInUp">
            
            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              YATRA SECURE
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto font-medium drop-shadow-lg">
              Your All-India Travel Safety & Incident Response Platform
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => navigate("/emergency-sos")}
                className="group relative px-8 py-4 text-lg font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[240px]"
                style={{
                  background: 'linear-gradient(135deg, #dc2626 0%, #ff7722 100%)',
                  boxShadow: '0 10px 30px rgba(220, 38, 38, 0.4)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Emergency SOS
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button 
                onClick={() => navigate("/india-map")}
                className="group relative px-8 py-4 text-lg font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[240px]"
                style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #059669 100%)',
                  boxShadow: '0 10px 30px rgba(249, 115, 22, 0.4)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Map className="h-5 w-5" />
                  Explore India Map
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button 
                onClick={() => navigate("/explore-culture")}
                className="group relative px-8 py-4 text-lg font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[240px]"
                style={{
                  background: 'linear-gradient(135deg, #1e40af 0%, #059669 100%)',
                  boxShadow: '0 10px 30px rgba(30, 64, 175, 0.4)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Palette className="h-5 w-5" />
                  Explore Culture
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { count: "250+", label: "SOS Alerts" },
                { count: "500+", label: "Blockchain ID" },
                { count: "750+", label: "Cultural Tours" },
                { count: "1000+", label: "AI Assistant" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="backdrop-blur-sm bg-white/10 rounded-xl p-4 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl font-bold text-white drop-shadow-lg mb-1">{stat.count}</div>
                  <div className="text-sm text-white/90 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Badge */}
          <div className="mt-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="inline-block backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-3">
              <span className="text-white/95 font-medium text-sm md:text-base">
                🛡️ AI + Blockchain Powered Safety System
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section 
        id="features" 
        className="py-20 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/mountain.jpg)' }}
      >
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/80"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <Badge variant="secondary" className="mb-4 bg-orange-600/90 text-white border-orange-400/50 hover:bg-orange-500">
              Cutting-Edge Technology
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-2xl">Core Safety Features</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-lg">
              Advanced technology ensuring tourist safety across North East India's diverse landscapes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 bg-white/10 backdrop-blur-xl hover:bg-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group"
                onClick={feature.action}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-gradient-to-br from-orange-500/20 to-green-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:from-orange-500/30 group-hover:to-green-500/30 group-hover:scale-110 transition-all duration-300 border border-white/20">
                    <feature.icon className="h-8 w-8 text-orange-400 group-hover:rotate-12 transition-transform" />
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-orange-300 transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-200">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Heritage Section with Carousel */}
      <section id="culture" className="py-20 pattern-tribal relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Cultural Carousel */}
          <CulturalCarousel culturalAddons={culturalAddons} openCulturalModal={openCulturalModal} />
        </div>
      </section>

      {/* Dashboards Preview */}
      <section id="dashboards" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <Badge variant="secondary" className="mb-4">
              Smart Access Control
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Role-Based Access Dashboards</h2>
            <p className="text-xl text-muted-foreground">
              Specialized interfaces for different user types
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: "Tourist", description: "SOS, attractions, cultural content", bg: "bg-primary/10", href: "/dashboard", icon: Users },
              { role: "Police", description: "Incident monitoring, emergency response", bg: "bg-destructive/10", href: "/police", icon: Shield },
              { role: "Transport", description: "Vehicle tracking, permit management", bg: "bg-accent/10", href: "/transport", icon: Map },
              { role: "Super Admin", description: "Full system control & analytics", bg: "bg-secondary/10", href: "/superadmin", icon: AlertTriangle }
            ].map((dashboard, index) => (
              <Card 
                key={index} 
                className={`${dashboard.bg} border-0 hover:shadow-elegant transition-all duration-500 cursor-pointer group hover:-translate-y-2`}
                onClick={() => navigate(dashboard.href)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto bg-background/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                    <dashboard.icon className="h-8 w-8 group-hover:rotate-12 transition-transform" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{dashboard.role} Dashboard</CardTitle>
                  <CardDescription>{dashboard.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Access Dashboard
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <button 
                onClick={() => scrollToTop()}
                className="flex items-center space-x-2 group hover:scale-105 transition-transform"
              >
                <Shield className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform" />
                <span className="text-lg font-bold">YATRA SECURE</span>
              </button>
              <p className="text-sm text-muted-foreground">
                Smart Safety System
              </p>
              <p className="text-sm text-muted-foreground">
                Protecting travelers in North East India with cutting-edge technology while 
                celebrating our rich cultural heritage and traditional wisdom.
              </p>
              <p className="text-xs text-muted-foreground">
                🧡 Made with love for North East India
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <button 
                  onClick={() => scrollToTop()} 
                  className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200"
                >
                  Home
                </button>
                <button 
                  onClick={() => navigate("/login")} 
                  className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200"
                >
                  Login
                </button>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200"
                >
                  Features
                </button>
                <button 
                  onClick={() => navigate("/explore-culture")} 
                  className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200"
                >
                  Cultural Heritage
                </button>
                <button 
                  onClick={() => navigate("/about")} 
                  className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200"
                >
                  Safety Guidelines
                </button>
                <button 
                  onClick={() => navigate("/emergency-sos")} 
                  className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200"
                >
                  Emergency Contacts
                </button>
              </div>
            </div>

            {/* Cultural Heritage */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Cultural Heritage</h3>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center space-x-1 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-medium text-foreground">Seven Sister States</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Tripura
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-1 text-sm">
                    <Music className="h-4 w-4 text-accent" />
                    <span className="font-medium text-foreground">Traditional Wisdom</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Integrating ancient knowledge with modern safety
                  </p>
                </div>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 mt-4 hover:bg-accent/15 transition-colors">
                  <p className="text-xs italic text-muted-foreground">
                    "Preserving our cultural identity while embracing technological advancement for tourist safety"
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Guwahati, Assam</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <span className="text-xs">North East India</span>
                </div>
                <button 
                  onClick={() => navigate("/emergency-sos")}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-destructive transition-colors"
                >
                  <Phone className="h-4 w-4 text-destructive" />
                  <span>Emergency: 112</span>
                </button>
                <div className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>Tourist Helpline: 1363</span>
                </div>
                <button
                  onClick={() => window.open('mailto:safety@yatrasecure.gov.in', '_blank')}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  <span>safety@yatrasecure.gov.in</span>
                </button>
              </div>

              <div className="mt-4">
                <h4 className="font-medium text-sm mb-2">Connect With Us</h4>
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="p-2 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all" 
                    onClick={() => window.open('https://linkedin.com/company/yatra-secure', '_blank')}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="p-2 hover:bg-gray-800 hover:text-white hover:scale-110 transition-all"
                    onClick={() => window.open('https://github.com/yatra-secure', '_blank')}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="p-2 hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all"
                    onClick={() => window.open('mailto:safety@yatrasecure.gov.in', '_blank')}
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © 2025 YATRA SECURE - All India Tourist Safety System. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <button 
                  onClick={() => navigate("/privacy-policy")} 
                  className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => navigate("/terms-of-service")} 
                  className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => navigate("/accessibility")} 
                  className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                >
                  Accessibility
                </button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Developed with ❤️ for the beautiful North Eastern states of India
            </p>
          </div>
        </div>
      </footer>

      {/* Enhanced AI Chatbot */}
      {chatOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-card border border-border rounded-xl shadow-2xl z-50 animate-fadeInUp overflow-hidden flex flex-col">
          <div className="p-4 border-b border-border flex items-center justify-between bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Cultural AI Assistant</h3>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setChatOpen(false)}
              className="hover:bg-destructive/10 hover:text-destructive"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            <div className="bg-accent/10 rounded-lg p-3 text-sm">
              <p className="font-medium mb-1">👋 Welcome!</p>
              <p className="text-muted-foreground">
                I'm your AI assistant for North East India. I can help you with:
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <button 
                onClick={() => navigate("/explore-culture")}
                className="w-full text-left p-3 rounded-lg hover:bg-primary/10 transition-colors border border-border"
              >
                🎭 Cultural Information
              </button>
              <button 
                onClick={() => navigate("/emergency-sos")}
                className="w-full text-left p-3 rounded-lg hover:bg-destructive/10 transition-colors border border-border"
              >
                🚨 Safety & Emergency Tips
              </button>
              <button 
                onClick={() => scrollToSection('dashboards')}
                className="w-full text-left p-3 rounded-lg hover:bg-accent/10 transition-colors border border-border"
              >
                📍 Travel Guidance
              </button>
              <button 
                onClick={() => scrollToSection('culture')}
                className="w-full text-left p-3 rounded-lg hover:bg-secondary/10 transition-colors border border-border"
              >
                🏞️ Local Attractions
              </button>
            </div>
          </div>
          <div className="p-3 border-t border-border bg-muted/30">
            <p className="text-xs text-muted-foreground text-center">
              Click any option above to get started
            </p>
          </div>
        </div>
      )}
      
      {/* Enhanced AI Chatbot Button */}
      <Button
        className="fixed bottom-4 right-4 rounded-full w-14 h-14 shadow-2xl z-40 hover:scale-110 transition-all duration-300 group"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
      </Button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 bg-primary text-primary-foreground rounded-full w-12 h-12 shadow-2xl z-40 hover:scale-110 transition-all duration-300 flex items-center justify-center animate-fadeInUp"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}

      {/* Cultural Modal */}
      <CulturalModal 
        item={selectedCulturalItem}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

// Cultural Carousel Component
const CulturalCarousel = ({ culturalAddons, openCulturalModal }: { culturalAddons: any[], openCulturalModal: (id: string) => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const culturalItems = [
    { image: "/culture 1.jpg", name: "Traditional Dance", role: "Folk Performance", id: "manipuri-dance" },
    { image: "/culture 2.jpg", name: "Tribal Art", role: "Heritage Crafts", id: "bamboo-crafts" },
    { image: "/culture 4.jpg", name: "Cultural Festival", role: "Celebration", id: "bihu-geet" },
    { image: "/culture 5.jpg", name: "Natural Beauty", role: "Landscapes", id: "kaziranga" },
    { image: "/culture 6.png", name: "Traditional Attire", role: "Cultural Dress", id: "red-panda" },
    { image: "/cullture 3.png", name: "Traditional Food", role: "Culinary Heritage", id: "bihu-geet" }
  ];

  const updateCarousel = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((newIndex + culturalItems.length) % culturalItems.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handleCardClick = (index: number, itemId: string) => {
    if (isAnimating) return;
    
    if (index === currentIndex) {
      openCulturalModal(itemId);
    } else {
      updateCarousel(index);
    }
  };

  const handleAddonClick = (itemId: string) => {
    if (isAnimating) return;
    openCulturalModal(itemId);
  };

  const getCardClass = (index: number) => {
    const offset = (index - currentIndex + culturalItems.length) % culturalItems.length;
    if (offset === 0) return "center z-30 scale-110 opacity-100";
    if (offset === 1) return "down-1 z-20 translate-y-32 scale-90 opacity-90";
    if (offset === 2) return "down-2 z-10 translate-y-64 scale-80 opacity-70";
    if (offset === culturalItems.length - 1) return "up-1 z-20 -translate-y-32 scale-90 opacity-90";
    if (offset === culturalItems.length - 2) return "up-2 z-10 -translate-y-64 scale-80 opacity-70";
    return "hidden opacity-0";
  };

  const itemIds = ['bihu-geet', 'kaziranga', 'red-panda', 'bamboo-crafts'];

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between max-w-7xl mx-auto">
      {/* Carousel Section - Left Side */}
      <div className="w-full lg:w-[45%] flex justify-center items-center order-2 lg:order-1">
        <div className="relative w-full max-w-md h-[500px] perspective-1000 px-20 lg:px-16">
          {/* Navigation Arrows - Desktop */}
          <button
            onClick={() => updateCarousel(currentIndex - 1)}
            disabled={isAnimating}
            className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronUp className="w-5 h-5 text-primary -rotate-90" />
          </button>
          <button
            onClick={() => updateCarousel(currentIndex + 1)}
            disabled={isAnimating}
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronUp className="w-5 h-5 text-primary rotate-90" />
          </button>

          {/* Mobile Navigation */}
          <button
            onClick={() => updateCarousel(currentIndex - 1)}
            disabled={isAnimating}
            className="lg:hidden absolute top-4 left-1/2 -translate-x-1/2 z-40 bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronUp className="w-5 h-5 text-primary" />
          </button>
          <button
            onClick={() => updateCarousel(currentIndex + 1)}
            disabled={isAnimating}
            className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-40 bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronUp className="w-5 h-5 text-primary rotate-180" />
          </button>

          {/* Cards */}
          <div className="relative w-full h-full flex flex-col items-center justify-center transform-gpu">
            {culturalItems.map((item, index) => (
              <button
                key={index}
                type="button"
                disabled={isAnimating}
                className={`absolute w-[300px] h-[180px] bg-white rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-700 ease-out disabled:cursor-not-allowed ${getCardClass(index)}`}
                onClick={() => handleCardClick(index, item.id)}
                style={{
                  transformStyle: 'preserve-3d',
                  filter: index === currentIndex ? 'none' : 'grayscale(100%)'
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-700 pointer-events-none"
                />
              </button>
            ))}
          </div>

          {/* Current Item Info - Below Carousel on Mobile */}
          <div className="lg:hidden text-center mt-8">
            <h3 className="text-2xl font-bold mb-1 text-primary">
              {culturalItems[currentIndex].name}
            </h3>
            <p className="text-base text-muted-foreground uppercase tracking-wider">
              {culturalItems[currentIndex].role}
            </p>
            
            {/* Dots Navigation */}
            <div className="flex gap-3 justify-center mt-6">
              {culturalItems.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  disabled={isAnimating}
                  onClick={() => updateCarousel(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-primary/20 hover:bg-primary/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Text Content - Right Side */}
      <div className="w-full lg:w-[55%] order-1 lg:order-2">
        <div className="text-center lg:text-left lg:pl-8 max-w-[580px] mx-auto lg:mx-0 animate-fadeInRight">
          {/* Badge */}
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20 inline-block">
            Heritage & Tradition
          </Badge>
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Cultural Integration
          </h2>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed opacity-90">
            Celebrating North East India's rich heritage through technology
          </p>

          {/* Desktop Only - Current Item Info */}
          <div className="hidden lg:block mb-8 pb-6 border-b border-border/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary transition-all duration-500">
              {culturalItems[currentIndex].name}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wider font-medium">
              {culturalItems[currentIndex].role}
            </p>
            
            {/* Dots Navigation */}
            <div className="flex gap-3 mt-6">
              {culturalItems.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  disabled={isAnimating}
                  onClick={() => updateCarousel(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-primary/20 hover:bg-primary/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Cultural Add-ons */}
          <div className="space-y-4">
            <h4 className="text-xl md:text-2xl font-bold mb-4">Rich Cultural Heritage</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {culturalAddons.map((addon, index) => (
                <button
                  key={index}
                  type="button"
                  disabled={isAnimating}
                  className="flex items-start space-x-3 text-left hover:bg-accent/10 p-3 rounded-xl transition-all duration-300 hover:scale-105 group disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => handleAddonClick(itemIds[index])}
                >
                  <div className="bg-accent/20 p-2 rounded-lg group-hover:bg-accent/30 group-hover:scale-110 transition-all flex-shrink-0">
                    <addon.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-sm mb-1 group-hover:text-accent transition-colors">{addon.title}</h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">{addon.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;