import { Calendar, Award, Heart, Utensils, Users, Music, School } from 'lucide-react';

export const services = [
    {
        icon: <Heart className="w-8 h-8 text-pink-400" />,
        title: "Wedding Planning and Management",
        description: "Transforming dreams into reality, our wedding planning services orchestrate unforgettable moments tailored to each family's unique story of precious moments & love.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
        icon: <Utensils className="w-8 h-8 text-pink-400" />,
        title: "Catering Service",
        description: "Elevate your occasion with our impeccable presentation and personalized Catering service, ensuring a memorable dining experience for you and your guests.",
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
        icon: <Users className="w-8 h-8 text-pink-400" />,
        title: "Guest Management",
        description: "Experience seamless hospitality with us. From luxurious accommodations to impeccable guest services, we ensure every attendee feels welcomed and cared for.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
        icon: <Music className="w-8 h-8 text-pink-400" />,
        title: "Celebrity Management",
        description: "Experience the star treatment with our celebrity Band and DJ's. Elevate your occasion with electrifying performances and the hottest beats.",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
        icon: <School className="w-8 h-8 text-pink-400" />,
        title: "College and School Events",
        description: "Engaging and innovative, our approach to institution events guarantees that students and faculty alike will enjoy well-organized festivities.",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
];

export  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Corporate Event",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      quote: "Exceptional service! The team at Aman Events handled everything perfectly. Our corporate event was a huge success thanks to their attention to detail.",
      rating: 5,
      eventImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Priya Patel",
      role: "Wedding Celebration",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      quote: "Made our wedding day absolutely magical! The decor was breathtaking and the coordination was flawless. Couldn't have asked for better service.",
      rating: 5,
      eventImage: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Amit Kumar",
      role: "College Festival",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      quote: "Professional team that delivered beyond expectations. The college fest was a grand success with amazing artist management and seamless execution.",
      rating: 5,
      eventImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

export const packages = [
    {
        id: 1,
        title: 'Wedding Planner',
        features: [
            `Venue Selection Assistance`,
            `Customized Themes`,
            `Vendor Management`,
            `Itinerary Planning`
        ],
        cta: `Get Started`,
    },
    {
        id: 2,
        title: 'College and School Fest',
        features: [
            `Venue Selection Assistance`,
            `Event Coordination`,
            `Stage Setup`,
            `Basic Sound System`
        ],
        cta: `Get Started`,
    },
    {
        id: 3,
        title: 'Custom Events',
        features: [
            `Venue Selection Assistance`,
            `Basic Decor Package`,
            `Event Coordination`,
            `Basic Sound System`
        ],
        cta: `Get Started`,
    },
];

export const celebrities = [
    {
        id: 1,
        name: 'Prafull Billore',
        category: 'MBA Chai Wala',
        image: 'https://res.cloudinary.com/dxuztknp4/image/upload/v1738672479/prafull_tokp2u.jpg',
    },
    {
        id: 2,
        name: 'Dr. Tanu Jain',
        category: 'UPSC Expert',
        image: 'https://res.cloudinary.com/dxuztknp4/image/upload/v1738672478/tanu-jain_qpsusk.webp',
    },
    {
        id: 3,
        name: 'Akhil Sachdeva',
        category: 'Singer',
        image: 'https://res.cloudinary.com/dxuztknp4/image/upload/v1738834271/akhil_hd2s8z.jpg',
    },
    {
        id: 4,
        name: 'Amogh Leela Das',
        category: 'Religion and Motivation',
        image: 'https://res.cloudinary.com/dxuztknp4/image/upload/v1738672477/amogh-leela-das_ucf8r7.jpg',
    },
    {
        id: 5,
        name: 'Anubhav Dubey',
        category: 'Chai Sutta Bar',
        image: 'https://res.cloudinary.com/dxuztknp4/image/upload/v1738672478/anubhav-dubey_osjbvv.jpg',
    },
    {
        id: 5,
        name: 'Ashneer Grover',
        category: 'Entrepreneur',
        image: 'https://res.cloudinary.com/dxuztknp4/image/upload/v1738672478/ashneer-grover_tf8pck.jpg',
    },
    {
        id: 6,
        name: 'Euphony Band',
        category: 'Music Band',
        image: 'https://res.cloudinary.com/dxuztknp4/image/upload/v1738672478/euphony-band_hq3ywv.jpg',
    },
    {
        id: 7,
        name: 'Krishna',
        category: 'Singer',
        image: 'https://res.cloudinary.com/dxuztknp4/image/upload/v1738672479/krshna_clmp6j.jpg',
    },
    {
        id: 8,
        name: 'Mr. Mohan Yadav',
        category: 'Chief Minister of M.P',
        image: 'https://res.cloudinary.com/dxuztknp4/image/upload/v1738672479/mohan-yadav_ijhxzp.webp',
    }
];

export const faqs  = [
    {
      question: "How far in advance should I book your services?",
      answer: "We recommend booking at least 3-6 months in advance for large events like weddings and corporate functions. For smaller events, 1-2 months notice is usually sufficient. However, during peak seasons, earlier bookings are advised to ensure availability.",
      icon: "🗓️"
    },
    {
      question: "What is included in your event planning services?",
      answer: "Our comprehensive services include venue selection, decor design, vendor coordination, timeline planning, budget management, on-site coordination, and post-event cleanup. We also offer specialized services like celebrity artist management, catering, and technical production support.",
      icon: "📋"
    },
    {
      question: "Do you handle both small and large events?",
      answer: "Yes, we cater to events of all sizes! From intimate gatherings of 50 guests to large-scale corporate events with 1000+ attendees. Each event receives the same level of attention and professional service, tailored to its specific requirements.",
      icon: "🎯"
    },
    {
      question: "What makes your event management unique?",
      answer: "Our unique blend of creativity, attention to detail, and experienced team sets us apart. We combine innovative ideas with flawless execution, and our dedicated project managers ensure personalized attention throughout the planning process.",
      icon: "✨"
    },
    {
      question: "How do you handle last-minute changes?",
      answer: "We pride ourselves on flexibility and quick problem-solving. Our team always has contingency plans ready and maintains strong vendor relationships to accommodate last-minute changes smoothly. We ensure your event runs perfectly regardless of any unexpected adjustments.",
      icon: "⚡"
    }
  ];

export const insights = [
    {
        icon: <Calendar className="w-8 h-8 text-purple-600" />,
        value: 500,
        label: "Events Completed",
        suffix: "+"
    },
    {
        icon: <Award className="w-8 h-8 text-purple-600" />,
        value: 50,
        label: "Celebrity Events",
        suffix: "+"
    },
    {
        icon: <Heart className="w-8 h-8 text-purple-600" />,
        value: 98,
        label: "Satisfaction Rate",
        suffix: "%"
    },
    {
        icon: <Calendar className="w-8 h-8 text-purple-600" />,
        value: 100,
        label: "Years of Experience",
        suffix: ""
    }
];

export const images = [
    {
        url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
        height: 500
    },
    {
        url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
        height: 700
    },
    {
        url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
        height: 450
    },
    {
        url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
        height: 600
    },
    {
        url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
        height: 550
    },
    {
        url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
        height: 400
    },
    {
        url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8",
        height: 650
    },
    {
        url: "https://images.unsplash.com/photo-1478146896981-b80fe463b330",
        height: 480
    },
    {
        url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
        height: 520
    }
];