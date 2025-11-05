import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, MapPin, Phone, Landmark, Music, Camera, UtensilsCrossed, Calendar, Shield, AlertCircle } from 'lucide-react';

// Comprehensive state data
const stateData: Record<string, any> = {
  "Bihar": {
    id: "st5",
    name: "Bihar",
    capital: "Patna",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    description: "Bihar is a land of ancient kingdoms, rich culture, and spiritual heritage. Home to Nalanda, the world's first residential university, and Bodh Gaya, where Buddha attained enlightenment.",
    emergency: {
      police: "100",
      ambulance: "102",
      fire: "101",
      touristHelpline: "1800-345-6789",
      control: "Bihar State Police Control Room"
    },
    bestPlaces: [
      {
        name: "Bodh Gaya",
        desc: "Sacred Buddhist pilgrimage site where Buddha attained enlightenment",
        image: "/india-html5-map-demo/bodhgaya.webp"
      },
      {
        name: "Nalanda University Ruins",
        desc: "Ancient center of learning dating back to 5th century CE",
        image: "/india-html5-map-demo/Nalanda University Ruins.jpg"
      },
      {
        name: "Patna Sahib Gurudwara",
        desc: "One of the holiest Sikh pilgrimage sites",
        image: "/india-html5-map-demo/Patna Sahib Gurudwara.webp"
      },
      {
        name: "Vikramshila Ruins",
        desc: "Ancient Buddhist monastery and university",
        image: "/india-html5-map-demo/Vikramshila Ruins.jpg"
      }
    ],
    music: "Bihari folk music includes Bhojpuri, Maithili songs, and traditional instruments like Dholak and Harmonium. Famous for wedding songs (Vivah Geet) and devotional music.",
    cuisine: [
      "Litti Chokha - Traditional baked wheat balls with mashed vegetables",
      "Sattu Paratha - Flatbread stuffed with roasted gram flour",
      "Dal Puri - Fried bread with lentil stuffing",
      "Khaja - Sweet crispy layered pastry",
      "Thekua - Traditional sweet snack"
    ],
    festivals: [
      "Chhath Puja - Sun worship festival",
      "Sonepur Mela - Asia's largest cattle fair",
      "Rajgir Mahotsav - Cultural festival"
    ],
    culture: "Bihar's culture is deeply rooted in ancient Indian traditions. Known for Madhubani paintings, Buddhist heritage, and classical arts. The state celebrates numerous religious and cultural festivals throughout the year."
  },
  "Maharashtra": {
    id: "st20",
    name: "Maharashtra",
    capital: "Mumbai",
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800",
    description: "The land of warriors and entrepreneurs, Maharashtra is India's economic powerhouse. From the bustling streets of Mumbai to the historic forts of Pune, it offers a perfect blend of modernity and tradition.",
    emergency: {
      police: "100",
      ambulance: "102",
      fire: "101",
      touristHelpline: "1800-22-0304",
      control: "Maharashtra Police Control Room"
    },
    bestPlaces: [
      {
        name: "Gateway of India, Mumbai",
        desc: "Iconic monument overlooking the Arabian Sea",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600"
      },
      {
        name: "Ajanta & Ellora Caves",
        desc: "UNESCO World Heritage rock-cut cave monuments",
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600"
      },
      {
        name: "Lonavala & Khandala",
        desc: "Scenic hill stations with stunning valleys",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600"
      },
      {
        name: "Mahabaleshwar",
        desc: "Hill station famous for strawberries and viewpoints",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600"
      }
    ],
    music: "Home to Bollywood, Maharashtra has rich musical heritage including Lavani, Powada, and Bharud. Classical music traditions of Hindustani music thrive here.",
    cuisine: [
      "Vada Pav - Spicy potato fritter in bread",
      "Pav Bhaji - Mixed vegetable curry with bread",
      "Misal Pav - Spicy sprouts curry",
      "Puran Poli - Sweet flatbread",
      "Modak - Sweet dumplings dedicated to Lord Ganesha"
    ],
    festivals: [
      "Ganesh Chaturthi - 10-day celebration of Lord Ganesha",
      "Gudi Padwa - Maharashtrian New Year",
      "Dahi Handi - Krishna Janmashtami celebration"
    ],
    culture: "Maharashtra boasts warrior culture of Marathas, vibrant festivals, and rich performing arts. Known for Lavani dance, Warli art, and strong literary traditions."
  },
  "Rajasthan": {
    id: "st29",
    name: "Rajasthan",
    capital: "Jaipur",
    image: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=800",
    description: "The Land of Kings, Rajasthan is famous for its majestic forts, vibrant culture, and colorful festivals. Desert landscapes meet royal palaces in this enchanting state.",
    emergency: {
      police: "100",
      ambulance: "102",
      fire: "101",
      touristHelpline: "1800-180-6464",
      control: "Rajasthan Police Control Room"
    },
    bestPlaces: [
      {
        name: "Jaipur - The Pink City",
        desc: "Capital city with Amber Fort, City Palace, and Hawa Mahal",
        image: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=600"
      },
      {
        name: "Udaipur - City of Lakes",
        desc: "Romantic city with Lake Palace and City Palace",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600"
      },
      {
        name: "Jaisalmer - Golden City",
        desc: "Desert city with magnificent sandstone fort",
        image: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=600"
      },
      {
        name: "Jodhpur - Blue City",
        desc: "City of blue houses and Mehrangarh Fort",
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600"
      }
    ],
    music: "Rajasthan is famous for folk music with instruments like Sarangi, Kamaycha, and Khartal. Manganiyar and Langa communities are renowned musicians.",
    cuisine: [
      "Dal Baati Churma - Baked wheat balls with lentils and sweet crumble",
      "Laal Maas - Spicy red meat curry",
      "Gatte ki Sabzi - Gram flour dumplings in curry",
      "Ker Sangri - Desert beans and berries",
      "Ghevar - Traditional sweet disc"
    ],
    festivals: [
      "Pushkar Camel Fair - Largest camel fair in the world",
      "Teej Festival - Celebration of monsoon",
      "Desert Festival - Showcasing Rajasthani culture"
    ],
    culture: "Rich in royal heritage, Rajasthan is known for colorful turbans, folk dances like Ghoomar, puppet shows, and intricate handicrafts including block printing and miniature paintings."
  },
  "Kerala": {
    id: "st17",
    name: "Kerala",
    capital: "Thiruvananthapuram",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
    description: "God's Own Country, Kerala is a tropical paradise with serene backwaters, lush green landscapes, pristine beaches, and rich cultural heritage.",
    emergency: {
      police: "100",
      ambulance: "102",
      fire: "101",
      touristHelpline: "1800-425-4747",
      control: "Kerala Police Control Room"
    },
    bestPlaces: [
      {
        name: "Alappuzha Backwaters",
        desc: "Network of canals, lagoons, and lakes",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600"
      },
      {
        name: "Munnar",
        desc: "Hill station with tea plantations",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600"
      },
      {
        name: "Kochi",
        desc: "Historic port city with colonial architecture",
        image: "https://images.unsplash.com/photo-1580845737322-0e46184f4f45?w=600"
      },
      {
        name: "Wayanad",
        desc: "Misty hills and wildlife sanctuaries",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600"
      }
    ],
    music: "Kerala's music includes classical Carnatic music, Sopana Sangeetham (temple music), and folk songs. Traditional instruments include Chenda, Mridangam, and Edakka.",
    cuisine: [
      "Appam with Stew - Rice pancakes with coconut milk curry",
      "Puttu and Kadala - Steamed rice cake with chickpea curry",
      "Kerala Sadya - Traditional feast on banana leaf",
      "Fish Moilee - Fish in coconut milk sauce",
      "Banana Chips - Crispy fried banana slices"
    ],
    festivals: [
      "Onam - Harvest festival with snake boat races",
      "Thrissur Pooram - Grand temple festival",
      "Vishu - Malayalam New Year"
    ],
    culture: "Kerala is renowned for Kathakali dance-drama, Mohiniyattam dance, Ayurvedic medicine, and boat races. The state has high literacy and unique matrilineal traditions."
  },
  "Tamil Nadu": {
    id: "st32",
    name: "Tamil Nadu",
    capital: "Chennai",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
    description: "The land of temples, Tamil Nadu is one of India's oldest civilizations. Rich in Dravidian culture, classical arts, and ancient architecture.",
    emergency: {
      police: "100",
      ambulance: "102",
      fire: "101",
      touristHelpline: "1800-425-9999",
      control: "Tamil Nadu Police Control Room"
    },
    bestPlaces: [
      {
        name: "Meenakshi Temple, Madurai",
        desc: "Ancient temple with towering gopurams",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600"
      },
      {
        name: "Mahabalipuram",
        desc: "UNESCO site with rock-cut temples",
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600"
      },
      {
        name: "Ooty",
        desc: "Queen of hill stations",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600"
      },
      {
        name: "Rameswaram",
        desc: "Sacred pilgrimage town",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600"
      }
    ],
    music: "Birthplace of Carnatic classical music. Home to the Trinity of Carnatic music - Thyagaraja, Muthuswami Dikshitar, and Syama Sastri.",
    cuisine: [
      "Idli-Sambar - Steamed rice cakes with lentil soup",
      "Dosa - Crispy fermented crepe",
      "Chettinad Chicken - Spicy regional specialty",
      "Pongal - Rice and lentil dish",
      "Payasam - Sweet milk dessert"
    ],
    festivals: [
      "Pongal - Harvest festival",
      "Natyanjali Dance Festival - Classical dance celebration",
      "Karthigai Deepam - Festival of lights"
    ],
    culture: "Tamil Nadu preserves ancient Dravidian culture. Famous for Bharatanatyam dance, Tanjore paintings, Kanchipuram silk, and classical literature. Strong temple traditions and bronze sculptures."
  },
  "Goa": {
    id: "st10",
    name: "Goa",
    capital: "Panaji",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
    description: "India's beach paradise, Goa is famous for its golden beaches, Portuguese heritage, vibrant nightlife, and laid-back coastal culture.",
    emergency: {
      police: "100",
      ambulance: "102",
      fire: "101",
      touristHelpline: "1800-111-363",
      control: "Goa Police Control Room"
    },
    bestPlaces: [
      {
        name: "Calangute Beach",
        desc: "Queen of Beaches",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600"
      },
      {
        name: "Basilica of Bom Jesus",
        desc: "UNESCO World Heritage church",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600"
      },
      {
        name: "Dudhsagar Falls",
        desc: "Majestic four-tiered waterfall",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600"
      },
      {
        name: "Fort Aguada",
        desc: "17th-century Portuguese fort",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600"
      }
    ],
    music: "Goa is famous for Goan Konkani music, Portuguese fado, and electronic trance music. Traditional instruments include Ghumot and Surt.",
    cuisine: [
      "Fish Curry Rice - Goan staple dish",
      "Prawn Balchão - Spicy prawn pickle",
      "Bebinca - Traditional layered dessert",
      "Pork Vindaloo - Tangy spicy pork curry",
      "Xacuti - Aromatic chicken curry"
    ],
    festivals: [
      "Carnival - Pre-Lenten festival",
      "Shigmo - Spring festival",
      "Feast of St. Francis Xavier"
    ],
    culture: "Unique blend of Indian and Portuguese cultures. Known for Goan Catholics' traditions, folk dances like Fugdi and Dhalo, and relaxed beach lifestyle."
  }
};

// Default data for other states
const getDefaultStateData = (name: string) => ({
  name,
  description: `${name} is a beautiful state of India with rich cultural heritage and diverse landscapes. Explore its unique traditions, cuisine, and tourist destinations.`,
  emergency: {
    police: "100",
    ambulance: "102",
    fire: "101",
    touristHelpline: "1363",
    control: `${name} State Control Room`
  },
  bestPlaces: [
    { name: "Major Tourist Spot", desc: "Explore the beauty of this destination", image: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=600" }
  ],
  music: "Rich musical heritage with traditional folk and classical music.",
  cuisine: ["Traditional dishes", "Local specialties", "Regional sweets"],
  festivals: ["State festivals", "Cultural celebrations"],
  culture: `${name} has a vibrant cultural heritage with unique traditions and customs.`
});

const IndiaMap = () => {
  const [selectedState, setSelectedState] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const navigate = useNavigate();

  const handleStateClick = (stateId: string, stateName: string) => {
    const data = stateData[stateName] || getDefaultStateData(stateName);
    setSelectedState(data);
    setShowModal(true);
  };

  // Load map scripts dynamically
  useEffect(() => {
    // Make function globally accessible
    (window as any).handleIndiaStateClick = handleStateClick;

    // Fallback function to draw map directly with Raphael if FlaMap fails
    const tryDirectRaphaelDraw = (container: HTMLElement) => {
      try {
        console.log('🔄 Trying direct Raphael draw...');
        if (!(window as any).Raphael) {
          console.error('✗ Raphael not available');
          return;
        }
        
        const paper = (window as any).Raphael(container, 900, 600);
        console.log('✓ Raphael paper created');
        
        // Draw a simple test shape to verify Raphael works
        paper.rect(50, 50, 100, 100).attr({fill: '#ff6b6b', stroke: '#333'});
        console.log('✓ Test shape drawn - Raphael is working!');
      } catch (err) {
        console.error('✗ Direct Raphael draw failed:', err);
      }
    };

    const loadScript = (src: string, id: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.getElementById(id)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.id = id;
        script.src = src;
        script.async = false; // Load in order
        script.onload = () => {
          console.log(`✓ Loaded: ${src}`);
          resolve();
        };
        script.onerror = () => {
          console.error(`✗ Failed to load: ${src}`);
          reject(new Error(`Failed to load ${src}`));
        };
        document.body.appendChild(script);
      });
    };

    const loadCSS = (href: string) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
        console.log(`✓ Loaded CSS: ${href}`);
      }
    };

    const initializeMap = async () => {
      try {
        console.log('🗺️ Starting map initialization...');
        
        // Load CSS
        loadCSS('/india-html5-map-demo/map.css');

        // Load scripts in order with delays between each
        await loadScript('/india-html5-map-demo/raphael.min.js', 'raphael-script');
        await new Promise(resolve => setTimeout(resolve, 100));
        console.log('✓ Raphael loaded');
        
        await loadScript('/india-html5-map-demo/settings.js', 'settings-script');
        await new Promise(resolve => setTimeout(resolve, 100));
        console.log('✓ Settings loaded');
        
        await loadScript('/india-html5-map-demo/paths.js', 'paths-script');
        await new Promise(resolve => setTimeout(resolve, 100));
        console.log('✓ Paths loaded');
        
        await loadScript('/india-html5-map-demo/map.js', 'map-script');
        await new Promise(resolve => setTimeout(resolve, 300));
        console.log('✓ Map.js loaded');

        // Check if FlaMap is available
        if (!(window as any).FlaMap || !(window as any).map_cfg) {
          console.error('✗ FlaMap not available:', {
            FlaMap: typeof (window as any).FlaMap,
            map_cfg: typeof (window as any).map_cfg,
            Raphael: typeof (window as any).Raphael
          });
          setMapLoaded(true);
          return;
        }

        console.log('✓ FlaMap and map_cfg ready!');
        
        // Override click handlers for all states
        const mapData = (window as any).map_cfg.map_data;
        Object.keys(mapData).forEach((stateId: string) => {
          const stateName = mapData[stateId].name;
          mapData[stateId].link = `javascript:window.handleIndiaStateClick('${stateId}', '${stateName}')`;
        });

        // Configure map settings - Use 0 for responsive width
        (window as any).map_cfg.mapWidth = 900; // Fixed width for better control
        (window as any).map_cfg.mapHeight = 700; // Fixed height
        (window as any).map_cfg.shadowAllow = false;
        (window as any).map_cfg.statesHoverColor = '#64BEC8';
        (window as any).map_cfg.borderColor = '#313131';
        (window as any).map_cfg.namesColor = '#ffffff';
        (window as any).map_cfg.scale = 1; // Ensure no extra scaling

        console.log('🎨 Initializing map on DOM...');
        
        // Make sure container exists and is empty
        const container = document.getElementById('india-map-container');
        if (!container) {
          console.error('✗ Container element not found!');
          setMapLoaded(true);
          return;
        }
        
        // Clear container
        container.innerHTML = '';
        console.log('✓ Container ready');
        
        // Initialize map instance
        const mapInstance = new (window as any).FlaMap((window as any).map_cfg);
        
        // Use draw() instead of drawOnDomReady() for React compatibility
        console.log('🎨 Drawing map...');
        mapInstance.draw('india-map-container');
        
        // Wait and verify SVG was created
        setTimeout(() => {
          const svg = document.querySelector('#india-map-container svg');
          if (svg) {
            console.log('✓ SVG element found!');
            
            // Get the SVG's viewBox to understand its dimensions
            const viewBox = svg.getAttribute('viewBox');
            console.log('SVG viewBox:', viewBox);
            
            // Force SVG to be fully visible with proper scaling
            const svgElement = svg as HTMLElement;
            svgElement.style.cssText = `
              display: block !important; 
              width: 100% !important; 
              height: auto !important; 
              max-width: 900px !important; 
              margin: 0 auto !important;
              transform: translateZ(0);
              backface-visibility: hidden;
              will-change: auto;
            `;
            
            // Ensure viewBox is set for proper scaling
            if (!viewBox || viewBox === '0 0 0 0') {
              svg.setAttribute('viewBox', '0 0 900 700');
              console.log('✓ Set default viewBox');
            }
            
            // Optimize SVG rendering
            svg.setAttribute('shape-rendering', 'geometricPrecision');
            svg.setAttribute('text-rendering', 'geometricPrecision');
            
            // Check paths
            const paths = svg.querySelectorAll('path');
            console.log(`✓ Found ${paths.length} paths in SVG`);
            
            // Log first few path positions to debug
            if (paths.length > 0) {
              const firstPath = paths[0] as SVGPathElement;
              const bbox = firstPath.getBBox();
              console.log('First path bounding box:', bbox);
            }
          } else {
            console.error('✗ SVG element not found after initialization');
            // Try direct Raphael approach as fallback
            console.log('Attempting fallback method...');
            tryDirectRaphaelDraw(container);
          }
          setMapLoaded(true);
          console.log('✓ Map initialization complete!');
        }, 500);
        
      } catch (error) {
        console.error('✗ Error loading map:', error);
        setMapLoaded(true);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initializeMap, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <style>{`
        @property --pulse {
          syntax: '<length>';
          inherits: false;
          initial-value: 80px;
        }

        @property --pulse2 {
          syntax: '<length>';
          inherits: false;
          initial-value: 56px;
        }

        @property --r {
          syntax: '<angle>';
          inherits: false;
          initial-value: 0deg;
        }

        .earth {
          position: fixed;
          right: -10rem;
          top: 50%;
          transform: translateY(-50%);
          width: 50rem;
          height: 50rem;
          border-radius: 50%;
          background-image: url('https://i.postimg.cc/9QCCCVsQ/earth.png');
          background-repeat: repeat-x;
          background-size: cover;
          animation: earth 40s linear infinite, pulse 3s ease-in-out infinite alternate-reverse;
          box-shadow: 0 -1px 1px 1px white,
            -1px 1px 1px 1px #64BEC8, 
            0 0 var(--pulse) -20px #64BEC8, 
            inset 0 0 76px -10px #64BEC8,
            inset 0 0 var(--pulse2) -10px #64BEC8;
          pointer-events: none;
          opacity: 0.4;
          z-index: 0;
          will-change: transform;
        }

        .earth:before,
        .earth:after {
          content: '';
          position: absolute;
          height: 10px;
          border-radius: 45%;
          filter: blur(12px);
          transform: rotate(var(--r));
          animation: rotation 10s linear infinite;
          will-change: transform;
        }

        .earth:before {
          top: 6rem;
          left: 7rem;
          width: 14%;
          box-shadow: inset 0 0 70px 90px #A47478, 
            0 0 140px 70px #A47478;
        }

        .earth:after {
          top: 0rem;
          left: 33rem;
          width: 7%;
          box-shadow: inset 0 0 70px -50px white, 
            inset 0 0 70px 90px #E5BC77, 
            0 0 130px 50px #E5BC77;
        }

        @keyframes earth {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: -199% 0;
          }
        }

        @keyframes pulse {
          0% {
            --pulse: 8rem;
            --pulse2: 5.6rem;
          }
          100% {
            --pulse: 10rem;
            --pulse2: 3.6rem;
          }
        }

        @keyframes rotation {
          from {
            --r: 0deg;
          }
          to {
            --r: 180deg;
          }
        }

        /* Smooth scrolling */
        * {
          scroll-behavior: smooth;
        }

        /* Hardware acceleration for better performance */
        .animate-smooth {
          will-change: transform, opacity;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>

      <div className="min-h-screen bg-[#081621] relative overflow-hidden">
        {/* Animated Earth Background */}
        <div className="earth"></div>

        {/* Header */}
        <div className="relative z-10 bg-gradient-to-r from-orange-500/20 via-transparent to-green-500/20 backdrop-blur-sm py-16 border-b border-white/10">
          <div className="container mx-auto px-4">
            <button
              onClick={() => navigate('/')}
              className="mb-6 flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-all hover:translate-x-[-4px] duration-300 font-semibold"
            >
              ← Back to Home
            </button>
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-green-400 bg-clip-text text-transparent animate-pulse">
                Explore India
              </span>
            </h1>
            <p className="text-center text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-light">
              Click on any state to discover emergency contacts, tourist destinations, culture, cuisine, and more
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">
              Interactive India Map
            </h2>
            
            {/* Map Container */}
            <div className="relative flex items-center justify-center" style={{ minHeight: '650px', width: '100%' }}>
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm rounded-xl z-50 border-2 border-cyan-500/30">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-cyan-400 mx-auto mb-4"></div>
                    <p className="text-cyan-300 text-lg font-semibold">Loading Interactive Map...</p>
                    <p className="text-gray-400 text-sm mt-2">Please wait...</p>
                  </div>
                </div>
              )}
              <div 
                id="india-map-container" 
                className={`w-full bg-white/5 backdrop-blur-sm border-2 border-cyan-500/30 rounded-xl p-6 shadow-2xl animate-smooth ${!mapLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700`}
                style={{ 
                  minHeight: '650px', 
                  maxWidth: '1000px',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              />
            </div>
          
            {/* Instructions */}
            <div className="mt-8 text-center">
              <p className="text-cyan-300 mb-4 text-lg font-medium">
                <MapPin className="inline mr-2" size={20} />
                Click on any state to view detailed information
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
                <span className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  <Phone size={16} className="text-cyan-400" /> Emergency Contacts
                </span>
                <span className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  <Camera size={16} className="text-cyan-400" /> Tourist Spots
                </span>
                <span className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  <Music size={16} className="text-cyan-400" /> Music & Culture
                </span>
                <span className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  <UtensilsCrossed size={16} className="text-cyan-400" /> Cuisine
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* State Detail Modal */}
      {showModal && selectedState && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-5xl w-full my-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-orange-600 to-green-600 text-white p-6 rounded-t-2xl z-10">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">{selectedState.name}</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              {selectedState.capital && (
                <p className="text-white/90 mt-2">Capital: {selectedState.capital}</p>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Description */}
              {selectedState.image && (
                <img
                  src={selectedState.image}
                  alt={selectedState.name}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
              )}
              <p className="text-gray-700 text-lg mb-8">{selectedState.description}</p>

              {/* Emergency Contacts */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
                  <Shield size={28} />
                  Emergency Contacts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                    <div className="font-semibold text-red-800">Police</div>
                    <div className="text-2xl font-bold text-red-600">{selectedState.emergency.police}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <div className="font-semibold text-blue-800">Ambulance</div>
                    <div className="text-2xl font-bold text-blue-600">{selectedState.emergency.ambulance}</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <div className="font-semibold text-orange-800">Fire</div>
                    <div className="text-2xl font-bold text-orange-600">{selectedState.emergency.fire}</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <div className="font-semibold text-green-800">Tourist Helpline</div>
                    <div className="text-2xl font-bold text-green-600">{selectedState.emergency.touristHelpline}</div>
                  </div>
                </div>
                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-700">
                    <AlertCircle size={20} />
                    <span className="font-semibold">{selectedState.emergency.control}</span>
                  </div>
                </div>
              </div>

              {/* Best Places to Visit */}
              {selectedState.bestPlaces && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                    <Landmark size={28} />
                    Best Places to Visit
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedState.bestPlaces.map((place: any, index: number) => (
                      <div key={index} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                        <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                          <h4 className="font-bold text-lg text-gray-800 mb-2">{place.name}</h4>
                          <p className="text-gray-600">{place.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Music & Culture */}
              {selectedState.music && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-purple-600 mb-4 flex items-center gap-2">
                    <Music size={28} />
                    Music & Performing Arts
                  </h3>
                  <p className="text-gray-700 bg-purple-50 p-6 rounded-xl border-l-4 border-purple-600">
                    {selectedState.music}
                  </p>
                </div>
              )}

              {/* Cuisine */}
              {selectedState.cuisine && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
                    <UtensilsCrossed size={28} />
                    Famous Cuisine
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedState.cuisine.map((dish: string, index: number) => (
                      <div key={index} className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                        <p className="text-gray-800">{dish}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Festivals */}
              {selectedState.festivals && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-pink-600 mb-4 flex items-center gap-2">
                    <Calendar size={28} />
                    Major Festivals
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedState.festivals.map((festival: string, index: number) => (
                      <div key={index} className="bg-pink-50 px-6 py-3 rounded-full border-2 border-pink-300">
                        <span className="text-pink-800 font-semibold">{festival}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Culture */}
              {selectedState.culture && (
                <div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">Cultural Heritage</h3>
                  <p className="text-gray-700 bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                    {selectedState.culture}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IndiaMap;
