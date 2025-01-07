import { Country } from '../types';

export const countries: Country[] = [
  {
    name: "Kazakhstan",
    slogan: "Building Doctors, Shaping Futures.",
    image: "https://images.unsplash.com/photo-1562924690-91bc1a9f3909?auto=format&fit=crop&q=80",
    universities: [
      {
        id: "west-kazakhstan",
        name: "West Kazakhstan State Medical University",
        city: "Aktobe",
        tuitionFeeUSD: 3700,
        hostelFeeUSD: 400,
        totalFeeINR: "₹22-23 Lakhs",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
      },
      {
        id: "south-kazakhstan",
        name: "South Kazakhstan Medical Academy",
        city: "Shymkent",
        tuitionFeeUSD: 4200,
        hostelFeeUSD: 800,
        totalFeeINR: "₹24-25 Lakhs",
        image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80"
      },
      {
        id: "kazakh-national",
        name: "Kazakh National Medical University",
        city: "Almaty",
        tuitionFeeUSD: 5300,
        hostelFeeUSD: 800,
        totalFeeINR: "₹34-35 Lakhs",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
      },
      {
        id: "al-farabi",
        name: "AL Farabi Kazakh National University",
        city: "Almaty",
        tuitionFeeUSD: 4700,
        hostelFeeUSD: 800,
        totalFeeINR: "₹32-33 Lakhs",
        image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80"
      },
      {
        id: "semey-state",
        name: "Semey State Medical University",
        city: "Semey",
        tuitionFeeUSD: 3700,
        hostelFeeUSD: 600,
        totalFeeINR: "₹22-23 Lakhs",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
      },
      {
        id: "astana-medical",
        name: "Astana Medical University",
        city: "Astana",
        tuitionFeeUSD: 5300,
        hostelFeeUSD: 700,
        totalFeeINR: "₹34-35 Lakhs",
        image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80"
      },
      {
        id: "karaganda-state",
        name: "Karaganda State Medical University",
        city: "Karaganda",
        tuitionFeeUSD: 3800,
        hostelFeeUSD: 700,
        totalFeeINR: "₹22-23 Lakhs",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
      }
    ],
    highlights: [
      "Low MBBS Fees in Kazakhstan: Study at costs far lower than in India.",
      "Globally Recognized: NMC & WHO-approved degrees for worldwide practice.",
      "English Medium: Courses designed for international students.",
      "No Hassle Admission: NEET qualified? That's all you need! No donations, no entrance exams.",
      "Safe & Supportive: Secure campuses with a vibrant Indian student community."
    ],
    facts: {
      capital: "Astana",
      population: "19.4 million",
      currency: "Kazakhstani Tenge",
      indianStudents: "1,830",
      cellularProviders: ["Beeline", "Kcell", "Tele2"],
      airports: ["Nursultan Nazarbayev International Airport", "Almaty International Airport"],
      transportation: ["Buses", "Trolleybuses", "Marshrutkas", "Taxis", "Ride-sharing", "Metro system"]
    }
  },
  {
    name: "Nepal",
    slogan: "Where Medical Dreams Meet Global Opportunities.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80",
    universities: [
      {
        id: "kathmandu-medical",
        name: "Kathmandu Medical College",
        city: "Kathmandu",
        tuitionFeeINR: 5500000,
        hostelFeeINR: 1000000,
        totalFeeINR: "₹65-67 Lakhs",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80"
      },
      {
        id: "manipal-medical",
        name: "Manipal College of Medical Science",
        city: "Pokhara",
        tuitionFeeINR: 6261000,
        hostelFeeINR: 800000,
        totalFeeINR: "₹70-72 Lakhs",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
      },
      {
        id: "nepal-medical",
        name: "Nepal Medical College",
        city: "Kathmandu",
        tuitionFeeINR: 5500000,
        hostelFeeINR: 800000,
        totalFeeINR: "₹63-65 Lakhs",
        image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80"
      },
      {
        id: "kist-medical",
        name: "KIST Medical College",
        city: "Kathmandu",
        tuitionFeeINR: 5500000,
        hostelFeeINR: 450000,
        totalFeeINR: "₹59-61 Lakhs",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
      },
      {
        id: "lumbini-medical",
        name: "Lumbini Medical College",
        city: "Palpa",
        tuitionFeeINR: 5000000,
        hostelFeeINR: 1000000,
        totalFeeINR: "₹60-61 Lakhs",
        image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80"
      }
    ],
    highlights: [
      "Cost-Effective MBBS in Nepal: Budget-friendly tuition and living expenses.",
      "Globally Recognized: NMC & WHO-approved universities for worldwide practice.",
      "Language Ease: Courses in English, with Hindi/Nepali widely spoken.",
      "Hassle-Free Admission: NEET qualified? No donations, no extra exams.",
      "Close to Home: Proximity to India for easy travel and cultural familiarity."
    ],
    facts: {
      capital: "Kathmandu",
      population: "31.24 million",
      currency: "Nepalese Rupee",
      indianStudents: "2,000",
      cellularProviders: ["Nepal Telecom", "Ncell", "Smart Telecom"],
      airport: "Tribhuvan International Airport",
      transportation: ["Buses", "Minibuses", "Taxis", "Ride-sharing", "Rickshaws", "Tempos"]
    }
  },
  {
    name: "Kyrgyzstan",
    slogan: "WE HANDLE THE JOURNEY, YOU FOCUS ON SUCCESS.",
    image: "https://images.unsplash.com/photo-1562924690-91bc1a9f3909?auto=format&fit=crop&q=80",
    universities: [
      {
        id: "osh-state",
        name: "Osh State Medical University",
        city: "Osh",
        tuitionFeeUSD: 4000,
        hostelFeeUSD: 600,
        totalFeeINR: "₹23-24 Lacs",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
      },
      {
        id: "jalalabad-state",
        name: "Jalalabad State Medical University",
        city: "Jalalabad",
        tuitionFeeUSD: 4200,
        hostelFeeUSD: 700,
        totalFeeINR: "₹24-25 Lacs",
        image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80"
      },
      {
        id: "international-kyrgyzstan",
        name: "International University of Kyrgyzstan",
        city: "Bishkek",
        tuitionFeeUSD: 3500,
        hostelFeeUSD: 600,
        totalFeeINR: "₹21-22 Lacs",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
      },
      {
        id: "international-medicine",
        name: "International School of Medicine",
        city: "Bishkek",
        tuitionFeeUSD: 6000,
        hostelFeeUSD: 700,
        totalFeeINR: "₹35-36 Lacs",
        image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80"
      },
      {
        id: "kyrgyz-state",
        name: "Kyrgyz State Medical Academy",
        city: "Bishkek",
        tuitionFeeUSD: 4800,
        hostelFeeUSD: 600,
        totalFeeINR: "₹30-31 Lacs",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
      },
      {
        id: "asian-medical",
        name: "Asian Medical Institute",
        city: "Kant",
        tuitionFeeUSD: 3400,
        hostelFeeUSD: 400,
        totalFeeINR: "₹20-21 Lacs",
        image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80"
      }
    ],
    highlights: [
      "Low-Cost Education: Budget-friendly tuition and living costs.",
      "Globally Accredited: Recognized by NMC, WHO, and more.",
      "English Programs: Learn in English without language barriers.",
      "Easy Admission: Just NEET qualification required, no extra exams or donations.",
      "Safe & Affordable: A warm and welcoming environment for international students."
    ],
    facts: {
      capital: "Bishkek",
      population: "7.2 million",
      currency: "Kyrgyzstani Som",
      indianStudents: "8,000",
      cellularProviders: ["Beeline", "MegaCom", "O!"],
      airport: "Manas International Airport",
      transportation: ["Buses", "Marshrutkas", "Taxis", "Shared rides"]
    }
  },
  {
    name: "Russia",
    slogan: "ENSURES A HASSLE-FREE JOURNEY, FOCUS ON STUDIES, WE HANDLE THE REST!",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80",
    universities: [
      {
        id: "voronezh-state",
        name: "Voronezh State Medical University",
        city: "Voronezh",
        tuitionFeeINR: 380000,
        hostelFeeINR: 40000,
        totalFeeINR: "₹38-41 Lacs",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
      },
      {
        id: "kabardino-state",
        name: "Kabardino Balkarian State University",
        city: "Nalchik",
        tuitionFeeINR: 219000,
        hostelFeeINR: 12000,
        totalFeeINR: "₹21-22 Lacs",
        image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80"
      },
      {
        id: "rostov-state",
        name: "Rostov State Medical University",
        city: "Rostov Oblast",
        tuitionFeeINR: 326000,
        hostelFeeINR: 21000,
        totalFeeINR: "₹32-33 Lacs",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
      },
      {
        id: "ingush-state",
        name: "Ingush State University",
        city: "Magas",
        tuitionFeeINR: 180000,
        hostelFeeINR: 30000,
        totalFeeINR: "₹18-19 Lacs",
        image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80"
      },
      {
        id: "kazan-federal",
        name: "Kazan Federal University",
        city: "Kazan",
        tuitionFeeINR: 493740,
        hostelFeeINR: 15000,
        totalFeeINR: "₹49-51 Lacs",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
      }
    ],
    highlights: [
      "World-Class Education: Study in one of the world's leading medical education destinations.",
      "Rich Medical Heritage: Benefit from Russia's long-standing medical education tradition.",
      "Advanced Infrastructure: Access to modern facilities and research opportunities.",
      "Cultural Experience: Immerse yourself in rich Russian culture and history.",
      "Career Opportunities: Open doors to global medical practice opportunities."
    ],
    facts: {
      capital: "Moscow",
      population: "145 million",
      currency: "Russian Ruble",
      indianStudents: "300,000+",
      language: "Russian (official), English (widely used in academics)",
      internationalStudents: "Over 300,000 from 170+ countries",
      internships: "Included in the final year",
      eligibility: "50% in PCB (Class 12), NEET qualification required",
      weather: "Cold winters (-15°C to -30°C) and mild summers (15°C to 30°C)",
      airport: "Sheremetyevo International Airport"
    }
  },
  {
    name: "Georgia",
    slogan: "FROM DREAMS TO DOCTORS - WE MAKE IT HAPPEN!",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80",
    universities: [
      {
        id: "bau-international",
        name: "Bau International University",
        city: "Batumi",
        tuitionFeeUSD: 4800,
        hostelFeeUSD: 2500,
        totalFeeINR: "₹36-34 Lacs",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
      },
      {
        id: "university-georgia",
        name: "The University of Georgia",
        city: "Tbilisi",
        tuitionFeeUSD: 6000,
        hostelFeeUSD: 2500,
        totalFeeINR: "₹36-37 Lacs",
        image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80"
      },
      {
        id: "geomedi-medical",
        name: "Geomedi Medical University",
        city: "Tbilisi",
        tuitionFeeUSD: 5500,
        hostelFeeUSD: 3000,
        totalFeeINR: "₹34-35 Lacs",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
      }
    ],
    highlights: [
      "European Standards: Study medicine following European education standards.",
      "Strategic Location: Experience the unique blend of European and Asian cultures.",
      "Quality Education: Benefit from Georgia's renowned medical education system.",
      "Affordable Living: Enjoy a high standard of living at reasonable costs.",
      "International Environment: Study alongside students from around the world."
    ],
    facts: {
      capital: "Tbilisi",
      population: "3.7 million",
      currency: "Georgian Lari",
      indianStudents: "8,000",
      weather: "Warm summers, mild winters in lowlands, colder in mountains",
      cellularProviders: ["Beeline", "MegaCom", "O!"],
      airport: "Shota Rustaveli Tbilisi International Airport",
      transportation: ["Buses", "Minibuses", "Metro", "Taxis"]
    }
  },
  {
    name: "Uzbekistan",
    slogan: "CRAFTING CAREERS IN MEDICINE, STARTING WITH GLOBAL SIKSHA",
    image: "https://images.unsplash.com/photo-1528644495100-e7fe1f72b995?auto=format&fit=crop&q=80",
    universities: [
      {
        id: "andijan-state",
        name: "Andijan State Medical University",
        city: "Andijan",
        tuitionFeeUSD: 3500,
        hostelFeeUSD: 2000,
        totalFeeINR: "₹28-30 Lacs",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
      },
      {
        id: "tashkent-medical",
        name: "Tashkent Medical Academy",
        city: "Tashkent",
        tuitionFeeUSD: 4000,
        hostelFeeUSD: 2500,
        totalFeeINR: "₹32-33 Lacs",
        image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80"
      },
      {
        id: "samarkand-state",
        name: "Samarkand State Medical University",
        city: "Samarkand",
        tuitionFeeUSD: 4000,
        hostelFeeUSD: 2500,
        totalFeeINR: "₹32-33 Lacs",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80"
      }
    ],
    highlights: [
      "Affordable Education: One of the most cost-effective destinations for medical studies.",
      "Rich Medical Tradition: Benefit from Uzbekistan's strong medical education heritage.",
      "Modern Facilities: Access to well-equipped laboratories and hospitals.",
      "Cultural Experience: Immerse in the unique Uzbek culture and hospitality.",
      "Growing Destination: Join the increasing number of international medical students."
    ],
    facts: {
      capital: "Tashkent",
      population: "34 million",
      currency: "Uzbekistani Som",
      indianStudents: "4,000",
      airport: "Islam Karimov Tashkent International Airport",
      transportation: ["Buses", "Minibuses", "Taxis", "Subway"]
    }
  }
];