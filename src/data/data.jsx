import { Calendar, Award, Heart } from 'lucide-react';

export const services = [
    {
        id: 1,
        title: `Wedding Planner`,
        description: `Transforming dreams into reality, our wedding planning services orchestrate unforgettable moments tailored to each family's unique story of precious moments & love.`,
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
    },
    {
        id: 2,
        title: `Catering Service`,
        description: `Elevate your occasion with our impeccable presentation and personalized Catering service, ensuring a memorable dining experience for you and your guests.`,
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    },
    {
        id: 3,
        title: `Hospitality & Guest Management`,
        description: `Experience seamless hospitality with us. From luxurious accommodations to impeccable guest services, we ensure every attendee feels welcomed and cared for.`,
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    },
    {
        id: 4,
        title: `Celebrity DJ & Band`,
        description: `Experience the star treatment with our celebrity Band and DJ's. Elevate your occasion with electrifying performances and the hottest beats.`,
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
    },
    {
        id: 5,
        title: `College Fest`,
        description: `Engaging and innovative, our approach to institution events guarantees that students and faculty alike will enjoy well-organized festivities.`,
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    },
    {
        id: 6,
        title: `Decor & Design`,
        description: `From concept to execution, we seamlessly integrate design and decoration to create unforgettable experiences that perfectly reflect our clients' visions.`,
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
    },
];

export const testimonials = [
    {
        id: 1,
        name: 'Rahul Sharma',
        event: 'Corporate Event',
        review: 'Exceptional service! The team at Aman Events handled everything perfectly. Our corporate event was a huge success thanks to their attention to detail.',
        image: 'https://avatar.iran.liara.run/public',
    },
    {
        id: 2,
        name: 'Priya Patel',
        event: 'Wedding Celebration',
        review: `Made our wedding day absolutely magical! The decor was breathtaking and the coordination was flawless. Couldn't have asked for better service.`,
        image: 'https://avatar.iran.liara.run/public',
    },
    {
        id: 3,
        name: 'Amit Kumar',
        event: 'College Festival',
        review: `Professional team that delivered beyond expectations. The college fest was a grand success with amazing artist management and seamless execution.`,
        image: 'https://avatar.iran.liara.run/public',
    },
];

export const packages = [
    {
        id: 1,
        title: 'Basic',
        price: '50,000',
        features: [
            `Venue Selection Assistance`,
            `Basic Decor Package`,
            `Event Coordination`,
            `Basic Sound System`
        ],
        cta: `Get Started`,
        badge: true,
    },
    {
        id: 1,
        title: 'Popular',
        price: '100,000',
        features: [
            `Venue Selection Assistance`,
            `Basic Decor Package`,
            `Event Coordination`,
            `Basic Sound System`
        ],
        cta: `Get Started`,
        badge: false,
    },
    {
        id: 3,
        title: 'Custom',
        price: '150,000',
        features: [
            `Venue Selection Assistance`,
            `Basic Decor Package`,
            `Event Coordination`,
            `Basic Sound System`
        ],
        cta: `Get Started`,
        badge: false,
    },
];

export const celebrities = [
    {
        id: 1,
        name: 'Dr. Tanu Jain',
        category: 'UPSC Expert',
        image: 'https://avatar.iran.liara.run/public',
    },
    {
        id: 2,
        name: 'Dr. Tanu Jain',
        category: 'UPSC Expert',
        image: 'https://avatar.iran.liara.run/public',
    },
    {
        id: 3,
        name: 'Dr. Tanu Jain',
        category: 'UPSC Expert',
        image: 'https://avatar.iran.liara.run/public',
    },
    {
        id: 4,
        name: 'Dr. Tanu Jain',
        category: 'UPSC Expert',
        image: 'https://avatar.iran.liara.run/public',
    },
    {
        id: 5,
        name: 'Dr. Tanu Jain',
        category: 'UPSC Expert',
        image: 'https://avatar.iran.liara.run/public',
    },
    {
        id: 5,
        name: 'Dr. Tanu Jain',
        category: 'UPSC Expert',
        image: 'https://avatar.iran.liara.run/public',
    }
];

export const faqService = [
    {
        question: "How far in advance should I book your services?",
        answer: "We recommend booking at least 6-8 months in advance for large events like weddings and corporate conferences. For smaller events, 3-4 months notice is usually sufficient. However, we can sometimes accommodate last-minute requests depending on availability."
    },
    {
        question: "What is included in your event planning services?",
        answer: "Our services include venue selection, vendor coordination, budget management, timeline creation, on-site coordination, and post-event cleanup. We can customize our services based on your specific needs and preferences."
    },
    {
        question: "Do you handle both small and large events?",
        answer: "Yes, we handle events of all sizes! From intimate gatherings of 20 people to large-scale corporate events with 1000+ attendees. Each event receives the same level of attention and dedication from our team."
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