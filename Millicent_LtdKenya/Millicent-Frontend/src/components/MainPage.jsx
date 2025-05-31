import React, { useState, useEffect } from "react";
import {
  Heart,
  Users,
  GraduationCap,
  Shield,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Menu,
  X,
  ArrowRight,
  Star,
  CheckCircle,
  BookOpen,
  Calendar,
  ExternalLink,
  Award,
  Handshake,
} from "lucide-react";

export default function MillicentCharity() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  {
    /*for doantions modal*/
  }
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [donationAmount, setDonationAmount] = useState(50);
  const [donationFrequency, setDonationFrequency] = useState("one-time");


  const handleVolunteerClick = () => {
    // Scroll to contact form or open volunteer application
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    // Or link to volunteer form:
    // window.location.href = "https://millicentkenya.org/volunteer";
  };

  const handleGetInvolvedClick = () => {
    // Scroll to programs section
    document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePartnerClick = () => {
    // Scroll to partners section
    document.getElementById("partners")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleReadMoreClick = (postIndex) => {
    // Example: navigate to blog post
    // window.location.href = `/blog/${blogPosts[postIndex].slug}`;
    alert(`Opening blog post: ${blogPosts[postIndex].title}`);
  };

  const heroSlides = [
    {
      title: "Empowering Communities, One Step at a Time",
      subtitle:
        "Creating meaningful change through education, healthcare, and food security",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=600&fit=crop",
    },
    {
      title: "Supporting Orphaned Children",
      subtitle:
        "Providing shelter, education, and emotional support for a brighter future",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop",
    },
    {
      title: "Building Sustainable Communities",
      subtitle:
        "Partnering locally and globally to maximize our positive impact",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=600&fit=crop",
    },
  ];

  const impactStats = [
    { number: "2,500+", label: "Children Educated", icon: GraduationCap },
    { number: "15,000+", label: "Families Fed", icon: Heart },
    { number: "500+", label: "Health Camps", icon: Shield },
    { number: "50+", label: "Communities Served", icon: Users },
  ];

  const programs = [
    {
      title: "Education Scholarships",
      description:
        "Providing scholarships for underprivileged children to access quality education and build brighter futures.",
      icon: GraduationCap,
      color: "bg-blue-500",
    },
    {
      title: "Healthcare Initiatives",
      description:
        "Organizing health camps and medical outreach programs to ensure communities have access to essential healthcare.",
      icon: Shield,
      color: "bg-emerald-500",
    },
    {
      title: "Food Security Programs",
      description:
        "Running food drives and nutrition programs to support vulnerable families and combat hunger.",
      icon: Heart,
      color: "bg-teal-500",
    },
    {
      title: "Orphan Care & Support",
      description:
        "Offering shelter, education, and emotional support to orphaned children, ensuring they have loving care.",
      icon: Users,
      color: "bg-indigo-500",
    },
  ];

  const blogPosts = [
    {
      title: "Transforming Lives Through Education",
      excerpt:
        "See how our scholarship program has changed the trajectory of over 500 children's lives this year alone.",
      date: "May 15, 2025",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=250&fit=crop",
      category: "Education",
    },
    {
      title: "Health Camp Success in Rural Kenya",
      excerpt:
        "Our latest health camp reached 800 families, providing free medical checkups and essential medications.",
      date: "May 10, 2025",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      category: "Healthcare",
    },
    {
      title: "Building Sustainable Food Systems",
      excerpt:
        "Learn about our innovative approach to addressing food security through community gardens and farming programs.",
      date: "May 5, 2025",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=250&fit=crop",
      category: "Food Security",
    },
  ];

  const partners = [
    {
      name: "UNICEF Kenya",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop",
      description:
        "Global partnership for children's welfare and education initiatives.",
    },
    {
      name: "Kenya Red Cross",
      logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=150&h=80&fit=crop",
      description:
        "Collaboration in disaster relief and community health programs.",
    },
    {
      name: "World Food Programme",
      logo: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
      description:
        "Joint efforts in fighting hunger and promoting food security.",
    },
    {
      name: "Save the Children",
      logo: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=150&h=80&fit=crop",
      description:
        "Partnership focused on child protection and education access.",
    },
    {
      name: "Local Community Groups",
      logo: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=150&h=80&fit=crop",
      description:
        "Grassroots partnerships with 50+ local community organizations.",
    },
    {
      name: "Corporate Sponsors",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=80&fit=crop",
      description:
        "Strategic partnerships with businesses committed to social impact.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-emerald-500" />
              <span className="text-2xl font-bold text-gray-900">
                Millicent Ltd Kenya
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                About
              </a>
              <a
                href="#programs"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Programs
              </a>
              <a
                href="#impact"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Impact
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Blog
              </a>
              <a
                href="#partners"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Partners
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Contact
              </a>
              <button
                onClick={() => setShowDonationModal(true)}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all transform hover:scale-105 font-semibold"
              >
                Donate Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden p-2">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#home"
                  className="block px-3 py-2 text-gray-700 hover:text-emerald-600"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 text-gray-700 hover:text-emerald-600"
                >
                  About
                </a>
                <a
                  href="#programs"
                  className="block px-3 py-2 text-gray-700 hover:text-emerald-600"
                >
                  Programs
                </a>
                <a
                  href="#impact"
                  className="block px-3 py-2 text-gray-700 hover:text-emerald-600"
                >
                  Impact
                </a>
                <a
                  href="#blog"
                  className="block px-3 py-2 text-gray-700 hover:text-emerald-600"
                >
                  Blog
                </a>
                <a
                  href="#partners"
                  className="block px-3 py-2 text-gray-700 hover:text-emerald-600"
                >
                  Partners
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-gray-700 hover:text-emerald-600"
                >
                  Contact
                </a>
                <button
                  onClick={() => setShowDonationModal(true)}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all transform hover:scale-105 font-semibold"
                >
                  Donate Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 animate-slide-up">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
                  <button
                    onClick={() => setShowDonationModal(true)}
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Make a Donation <Heart className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleGetInvolvedClick}
                    className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Get Involved <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4 group-hover:bg-emerald-200 transition-colors">
                  <stat.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What "Millicent" Stands For
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The name "Millicent" symbolizes strength through gentleness and
                determination. It reflects our approach to combining impactful
                action with care and empathy, ensuring every project we
                undertake enriches lives and inspires hope.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Millicent Ltd Kenya, we believe in creating meaningful change
                through action. Our mission is to uplift communities by
                addressing critical needs such as education, healthcare, and
                food security. With a focus on sustainability, we are dedicated
                to making a lasting impact on the lives of those we serve.
              </p>
              <div className="flex items-center gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">
                  Compassionate approach to community development
                </span>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">
                  Sustainable solutions for lasting impact
                </span>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">
                  Local and global partnerships
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop"
                alt="Community empowerment"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-500 text-white p-6 rounded-xl shadow-lg">
                <Star className="h-8 w-8 mb-2" />
                <div className="text-2xl font-bold">10+ Years</div>
                <div className="text-sm">Serving Communities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Through our charity initiatives, we provide comprehensive support
              across multiple areas to create lasting change in communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${program.color} rounded-full mb-6 group-hover:scale-110 transition-transform`}
                >
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with our impact stories, community highlights, and
              the latest news from our programs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <button
                    onClick={() => handleReadMoreClick(index)}
                    className="text-emerald-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => (window.location.href = "/blog")}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
            >
              <BookOpen className="h-5 w-5" />
              View All Stories
            </button>
          </div>
        </div>
      </section>

      {/* Partners & Affiliates Section */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Partners & Affiliates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We partner with local communities and global organizations to
              maximize our outreach and create lasting impact together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {partner.name}
                    </h3>
                    <div className="flex items-center gap-1 text-emerald-600">
                      <Handshake className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        Active Partner
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8">
              <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Become a Partner
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join our network of dedicated partners and help us expand our
                impact. Together, we can create meaningful change in communities
                across Kenya.
              </p>
              <button
                onClick={handlePartnerClick}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
              >
                <Handshake className="h-5 w-5" />
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Donations Modal*/}
      {showDonationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 transition-opacity duration-300">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Make a Donation
              </h3>
              <button
                onClick={() => setShowDonationModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Donation Amount (USD)
              </label>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[10, 25, 50, 100].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setDonationAmount(amount)}
                    className={`py-2 rounded-lg font-medium ${
                      donationAmount === amount
                        ? "bg-emerald-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                min="1"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Frequency
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setDonationFrequency("one-time")}
                  className={`py-2 rounded-lg font-medium ${
                    donationFrequency === "one-time"
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  One-time
                </button>
                <button
                  onClick={() => setDonationFrequency("monthly")}
                  className={`py-2 rounded-lg font-medium ${
                    donationFrequency === "monthly"
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Personal Information
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <button
              onClick={() => {
                alert(
                  `Thank you for your $${donationAmount} ${donationFrequency} donation!`
                );
                setShowDonationModal(false);
              }}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Donate ${donationAmount}{" "}
              {donationFrequency === "monthly" && "/month"}
            </button>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We'd love to hear from you! Whether you have questions about our
                programs, want to volunteer, or are interested in partnership
                opportunities, reach out to us.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Our Location
                    </h3>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Phone
                    </h3>
                    <p className="text-gray-600">+254 700 000 000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Email
                    </h3>
                    <p className="text-gray-600">info@millicentkenya.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Follow Us
                    </h3>
                    <div className="flex gap-4 mt-2">
                      <Facebook className="h-6 w-6 text-gray-600 hover:text-blue-500 cursor-pointer transition-colors" />
                      <Twitter className="h-6 w-6 text-gray-600 hover:text-blue-400 cursor-pointer transition-colors" />
                      <Instagram className="h-6 w-6 text-gray-600 hover:text-pink-500 cursor-pointer transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 w-full"
                >
                  Send Message <ArrowRight className="h-5 w-5 inline ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Be Part of the Change
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Every step we take is guided by our belief in the power of
            compassion, resilience, and collective effort to bring positive
            change. Join us in making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowDonationModal(true)}
              className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Donate Today <Heart className="h-5 w-5" />
            </button>
            <button
              onClick={handleVolunteerClick}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Volunteer With Us <Users className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Heart className="h-8 w-8 text-emerald-500" />
                <span className="text-2xl font-bold">Millicent Ltd Kenya</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering communities through education, healthcare, and food
                security. Creating meaningful change, one step at a time.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#programs"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Our Programs
                  </a>
                </li>
                <li>
                  <a
                    href="#impact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Impact
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-300">Nairobi, Kenya</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-300">+254 700 000 000</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-300">info@millicentkenya.org</span>
                </div>
                <div className="flex items-center gap-3">
                  <ExternalLink className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <a
                    href="https://yourportfolio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Developer Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 Millicent Ltd Kenya. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Transparency
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
