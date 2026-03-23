/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  ChevronRight, 
  Star, 
  Menu, 
  X,
  ArrowRight,
  Gem,
  Award,
  ShieldCheck,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLLECTIONS = [
  {
    id: 'gold',
    title: 'Gold Jewellery',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
    description: 'Exquisite 22K & 24K gold ornaments crafted with precision.'
  },
  {
    id: 'diamond',
    title: 'Diamond Jewellery',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    description: 'Brilliant diamonds that capture the essence of light and luxury.'
  },
  {
    id: 'bridal',
    title: 'Bridal Collection',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
    description: 'Make your special day unforgettable with our majestic bridal sets.'
  },
  {
    id: 'bangles',
    title: 'Bangles & Chains',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80&w=800',
    description: 'Timeless designs for everyday elegance and grand celebrations.'
  }
];

const GOLD_PRODUCTS = [
  {
    id: 'necklace-1',
    name: 'Traditional Gold Necklace',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600',
    price: 'Contact for Price',
    description: 'Intricate 22K gold necklace with traditional motifs.'
  },
  {
    id: 'earrings-1',
    name: 'Jhumka Gold Earrings',
    image: 'https://images.unsplash.com/photo-1630019058353-5240329b7205?auto=format&fit=crop&q=80&w=600',
    price: 'Contact for Price',
    description: 'Classic gold jhumkas with delicate filigree work.'
  },
  {
    id: 'bangle-1',
    name: 'Royal Gold Bangle',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80&w=600',
    price: 'Contact for Price',
    description: 'Solid 22K gold bangle with antique finish.'
  },
  {
    id: 'ring-1',
    name: 'Gold Statement Ring',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600',
    price: 'Contact for Price',
    description: 'Bold gold ring featuring traditional floral patterns.'
  },
  {
    id: 'chain-1',
    name: 'Elegant Gold Chain',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600',
    price: 'Contact for Price',
    description: 'Simple yet sophisticated 22K gold chain for daily wear.'
  },
  {
    id: 'pendant-1',
    name: 'Divine Gold Pendant',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600',
    price: 'Contact for Price',
    description: 'Exquisitely carved gold pendant with spiritual motifs.'
  }
];

const GALLERY = [
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600'
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    text: "The bridal collection at R.G Jewellers is simply breathtaking. I found my dream wedding set here. The staff is incredibly helpful and the quality is top-notch.",
    rating: 5
  },
  {
    name: "Rahul Das",
    text: "Trusted name in Samudragarh. I've been buying gold from R.G Jewellers for years. Their transparency and pricing are the best in the market.",
    rating: 5
  },
  {
    name: "Anjali Mukherji",
    text: "Modern designs with a traditional touch. Their diamond jewellery is exquisite. Highly recommend for anyone looking for authentic pieces.",
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [enquiryMessage, setEnquiryMessage] = useState('');

  const scrollToSection = (id: string, message?: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (message) {
        setEnquiryMessage(message);
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-gold selection:text-white">
      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <h1 className={`text-2xl md:text-3xl font-bold tracking-tighter transition-colors duration-300 ${
              scrolled ? 'text-luxury-black' : 'text-white'
            }`}>
              R.G <span className="text-gold">JEWELLERS</span>
            </h1>
            <div className="h-0.5 w-0 group-hover:w-full bg-gold transition-all duration-300"></div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Collections', 'Gallery', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium uppercase tracking-widest hover:text-gold transition-colors ${
                  scrolled ? 'text-luxury-black' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
            <a 
              href="tel:+919733233449"
              className="bg-gold hover:bg-gold-dark text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              CALL NOW
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 ${scrolled ? 'text-luxury-black' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6 text-center">
              {['Home', 'About', 'Collections', 'Gallery', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-2xl font-serif text-luxury-black hover:text-gold"
                >
                  {item}
                </button>
              ))}
              <a 
                href="tel:+919733233449"
                className="bg-gold text-white py-4 rounded-xl text-xl font-bold shadow-xl"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Jewellery Background" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium tracking-[0.3em] uppercase mb-4 block">Est. 1995</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-6 leading-tight">
              Timeless Elegance <br />
              <span className="italic">& Trust</span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light tracking-wide">
              Discover beautiful gold & diamond jewellery crafted with passion and precision. 
              A legacy of brilliance in every piece.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollToSection('collections')}
                className="group bg-gold hover:bg-gold-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center shadow-2xl"
              >
                Explore Collection
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <a 
                href="tel:+919733233449"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] mb-2">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800" 
                  alt="About R.G Jewellers" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-gold p-8 rounded-2xl shadow-2xl hidden lg:block">
                <p className="text-white text-4xl font-serif font-bold">25+</p>
                <p className="text-white/80 text-sm uppercase tracking-widest">Years of Trust</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-medium tracking-widest uppercase mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                A Tradition of Excellence <br />
                <span className="text-gold-dark italic">Since 1995</span>
              </h2>
              <p className="text-luxury-black/70 text-lg mb-6 leading-relaxed">
                At R.G Jewellers, we believe that every piece of jewellery tells a story. 
                For over two decades, we have been a trusted name in Samudragarh, 
                providing our customers with authentic gold and diamond ornaments 
                that blend traditional craftsmanship with modern aesthetics.
              </p>
              <p className="text-luxury-black/70 text-lg mb-8 leading-relaxed">
                Our commitment to quality, transparency, and customer satisfaction 
                has made us a preferred destination for bridal sets, everyday wear, 
                and investment-grade gold.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-gold/10 p-2 rounded-lg text-gold">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">100% Genuine</h4>
                    <p className="text-sm text-luxury-black/60">Hallmarked Gold</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-gold/10 p-2 rounded-lg text-gold">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Happy Clients</h4>
                    <p className="text-sm text-luxury-black/60">10,000+ Families</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-24 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-medium tracking-widest uppercase mb-4 block">Exquisite Range</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Collections</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {COLLECTIONS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-xl shine-effect">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white/80 text-sm mb-2">{item.description}</p>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToSection('contact', `I am interested in your ${item.title}. Please provide more details.`);
                      }}
                      className="text-gold font-bold flex items-center text-sm"
                    >
                      ENQUIRE NOW <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-center group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gold Collection */}
      <section id="featured-gold" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-medium tracking-widest uppercase mb-4 block">Our Masterpieces</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Featured Gold Collection</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {GOLD_PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-luxury-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gold/5"
              >
                <div className="relative aspect-square overflow-hidden shine-effect">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-gold uppercase tracking-widest border border-gold/20">
                    22K Gold
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2 group-hover:text-gold transition-colors">{product.name}</h3>
                  <p className="text-luxury-black/60 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-bold">{product.price}</span>
                    <button 
                      onClick={() => scrollToSection('contact', `I would like to enquire about the ${product.name}.`)}
                      className="bg-luxury-black text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-gold transition-colors"
                    >
                      ENQUIRE
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-luxury-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-gold border border-gold/30">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-xl font-serif mb-3">Trusted Local Shop</h4>
              <p className="text-white/60 text-sm font-light">Serving Samudragarh with integrity for over 25 years.</p>
            </div>
            <div className="text-center">
              <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-gold border border-gold/30">
                <Award size={32} />
              </div>
              <h4 className="text-xl font-serif mb-3">Genuine Products</h4>
              <p className="text-white/60 text-sm font-light">BIS Hallmarked gold and certified diamonds only.</p>
            </div>
            <div className="text-center">
              <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-gold border border-gold/30">
                <Gem size={32} />
              </div>
              <h4 className="text-xl font-serif mb-3">Affordable Pricing</h4>
              <p className="text-white/60 text-sm font-light">Competitive making charges and transparent rates.</p>
            </div>
            <div className="text-center">
              <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-gold border border-gold/30">
                <Clock size={32} />
              </div>
              <h4 className="text-xl font-serif mb-3">Years of Experience</h4>
              <p className="text-white/60 text-sm font-light">Expert craftsmanship passed down through generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-medium tracking-widest uppercase mb-4 block">Visual Showcase</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Gallery</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-zoom-in"
              >
                <img 
                  src={img} 
                  alt={`Gallery Item ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-luxury-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <Gem size={400} className="text-gold" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold font-medium tracking-widest uppercase mb-4 block">Voices of Trust</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Customer Testimonials</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gold/10"
              >
                <div className="flex text-gold mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-luxury-black/70 italic mb-6 leading-relaxed">"{item.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold mr-3">
                    {item.name[0]}
                  </div>
                  <span className="font-bold text-luxury-black">{item.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <span className="text-gold font-medium tracking-widest uppercase mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Visit Our Showroom</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-full text-gold">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Address</h4>
                    <p className="text-luxury-black/60 leading-relaxed">
                      Nimtala Bazar, R.G Jewellers, P.O - Samudragarh, <br />
                      P.S - Nadanghat, Samudragarh, West Bengal 713519
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-full text-gold">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                    <a href="tel:+919733233449" className="text-luxury-black/60 hover:text-gold transition-colors text-xl font-medium">
                      +91 97332 33449
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-full text-gold">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Shop Timings</h4>
                    <p className="text-luxury-black/60">
                      Monday - Sunday: 8:00 A.M to 8:00 P.M
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="mt-12 bg-luxury-cream p-8 rounded-2xl border border-gold/10">
                <h4 className="text-2xl font-serif mb-6">Send an Enquiry</h4>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-3 rounded-lg border border-gold/20 focus:outline-none focus:border-gold bg-white"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full px-4 py-3 rounded-lg border border-gold/20 focus:outline-none focus:border-gold bg-white"
                    />
                  </div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    value={enquiryMessage}
                    onChange={(e) => setEnquiryMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gold/20 focus:outline-none focus:border-gold bg-white"
                  ></textarea>
                  <button className="w-full bg-luxury-black text-white py-4 rounded-lg font-bold hover:bg-gold transition-colors shadow-lg">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>

            {/* Map Embed */}
            <div className="h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe 
                src="https://www.google.com/maps?q=R.G%20Jewellers%20Nimtala%20Bazar%20Samudragarh%20West%20Bengal%20713519&z=17&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="R.G Jewellers Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-black text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <h3 className="text-3xl font-serif font-bold mb-6">R.G <span className="text-gold">JEWELLERS</span></h3>
              <p className="text-white/50 max-w-md leading-relaxed mb-8">
                Your trusted destination for timeless elegance and authentic jewellery. 
                We bring you the finest gold and diamond collections that celebrate 
                the beauty of tradition and the brilliance of modern design.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/919733233449" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-gold">Quick Links</h4>
              <ul className="space-y-4 text-white/60">
                <li><button onClick={() => scrollToSection('hero')} className="hover:text-gold transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-gold transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('collections')} className="hover:text-gold transition-colors">Collections</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="hover:text-gold transition-colors">Gallery</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-gold transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-gold">Contact Info</h4>
              <ul className="space-y-4 text-white/60">
                <li className="flex items-start space-x-3">
                  <MapPin size={18} className="text-gold mt-1 shrink-0" />
                  <span>Nimtala Bazar, Samudragarh, West Bengal 713519</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={18} className="text-gold shrink-0" />
                  <span>+91 97332 33449</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock size={18} className="text-gold shrink-0" />
                  <span>8:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10 flex flex-col md:row justify-between items-center text-white/40 text-sm">
            <p>© 2026 R.G Jewellers. All Rights Reserved.</p>
            <p className="mt-4 md:mt-0">Crafted with Elegance & Trust</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919733233449" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle size={32} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap font-bold">
          Chat with us
        </span>
      </a>
    </div>
  );
}
