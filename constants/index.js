const programs = [
  {
    title: "Tennis Coaching",
    image: "/img/bball.jpg",
    synopsis:
      "Personalized one-on-one coaching focused on technique, footwork, and match confidence.",
  },
  {
    title: "Tennis for Kids",
    image: "/img/bball.jpg",
    synopsis:
      "Fun, structured sessions helping kids build fundamentals, discipline, and love for the game.",
  },
  {
    title: "Squash Coaching",
    image: "/img/bball.jpg",
    synopsis:
      "High-intensity squash training focused on agility, precision, and competitive play.",
  },
  {
    title: "Private Group",
    image: "/img/bball.jpg",
    synopsis:
      "Train with friends or teammates in a focused group environment led by a professional coach.",
  },
];
 const events = [
    {
      id: 1,
      title: "The state of the nation show TV47",
      date: "2026-01-22T00:00:00",
      day:"22 January 2026",
      comments: 2,
      description:
        "Tomorrow, as the National Teacher, Fred Ogola, I will address the nation about the state of the country—especially the economy, governance, education, and national development—via TV47, particularly after Kenya was ranked as the 10th country in the world with the highest levels of extreme poverty, while the current administration continues to mislead Kenyans into believing that we are on the path to achieving Singapore’s status.",
      image: "/img/bball.jpg",
      link:"https://youtu.be/gqB6ILXeEv0?si=YdqdtY5-gzFY2NzU"
     
    },
    {
      id: 2,
      title: "Linda Jamii initiative meeting",
      date: "2026-01-19T00:00:00",
      day:"19 January 2026",
      comments: 2,
      description:
        "Prof. Fred Ogola, CEO of Operation Linda Jamii and the Liberal Democratic Party, is flanked by Dr. Rev. Jeconiah Musembi, Religious Liaison of Operation Linda Jamii, before the Departmental Committee on Finance and National Planning, jointly with the Select Committee on Public Debt and Privatization. The session, chaired by Molo MP Kimani Kuria and Balambala MP Abdi Shurie, discussed the partial divestiture of the Government of Kenya’s shareholding in Safaricom PLC at Glee Hotel, Kiambu Road.",
      image: "/img/bball.jpg",
      
    },
    {
              id: 3,
      title: "Breaking Colonial Chains: How Western Approaches Propel Africa Toward Policy Independence",
      date: "2026-01-23T00:00:00",
      day:"23 January 2026",
      comments: 2,
      description:
        "This podcast examines the dual pressures of economic conditionalities and unresolved colonial disputes pushing African nations toward strategic autonomy. We analyze the continent's deliberate shift towards independent policy formulation and its growing opposition to unipolar world politics.",
      image: "/img/bball.jpg",
      link:"https://en.sputniknews.africa/20260123/breaking-colonial-chains-how-western-approaches-propel-africa-toward-policy-independence-1082750832.html"
      
    },
   
  ];
  const merch = [
  {
    id: 1,
    name: "Urbanville T-shirt",
    price: "ksh 1000",
    priceValue: 1000,
    img: "/img/redtee.jpeg",
    images: [
      "/img/bluetee.jpeg",
      "/img/yellowtee.jpeg",
      "/img/navytee.jpeg",
      "/img/redtee.jpeg"
    ],
    alt: "Urbanville red t-shirt",
    colors: ["Navy", "Yellow", "Green", "Red"],
    sizes: ["XS", "S", "M", "L"],
    inStock: false,
    badge: "OUT OF STOCK",
    notice: "This item has a 10% discount",
    description:
      "Premium heavyweight cotton t-shirt designed for comfort and durability. Perfect for everyday wear.",
    sizeFit: {
      modelHeight: "177cm / 5' 9½''",
      modelWearing: "Size M"
    }
  },

  {
    id: 2,
    name: "Kenya T-shirt",
    price: "ksh 1000",
    priceValue: 1000,
    img: "/img/kenyatee.jpeg",
    images: ["/img/kenyatee.jpeg"],
    alt: "Kenya t-shirt",
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    badge: null,
    notice: null,
    description:
      "Soft cotton Kenya-themed t-shirt with breathable fabric for daily comfort.",
    sizeFit: {
      modelHeight: "180cm",
      modelWearing: "Size L"
    }
  },

  {
    id: 3,
    name: "Urbanville Warmer",
    price: "ksh 2000",
    priceValue: 2000,
    img: "/img/warmer.jpeg",
    images: ["/img/warmer.jpeg"],
    alt: "Urbanville warmer",
    colors: ["Black", "Grey"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    badge: "BEST SELLER",
    notice: "Limited stock available",
    description:
      "Premium fleece warmer built for comfort during cold weather training sessions.",
    sizeFit: {
      modelHeight: "182cm",
      modelWearing: "Size L"
    }
  },

  {
    id: 4,
    name: "Urbanville Shorts",
    price: "ksh 1000",
    priceValue: 1000,
    img: "/img/shorts.jpeg",
    images: ["/img/shorts.jpeg"],
    alt: "Urbanville shorts",
    colors: ["Black", "Red"],
    sizes: ["S", "M", "L"],
    inStock: true,
    badge: null,
    notice: null,
    description:
      "Lightweight athletic shorts designed for mobility and comfort during workouts.",
    sizeFit: {
      modelHeight: "175cm",
      modelWearing: "Size M"
    }
  },

  {
    id: 5,
    name: "UBV Threads (White)",
    price: "ksh 1000",
    priceValue: 1000,
    img: "/img/ubvthreads.jpeg",
    images: ["/img/ubvthreads.jpeg"],
    alt: "UBV Threads white t-shirt",
    colors: ["White"],
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    badge: "NEW",
    notice: "New arrival",
    description:
      "Classic UBV Threads white edition made from high-quality cotton blend.",
    sizeFit: {
      modelHeight: "178cm",
      modelWearing: "Size M"
    }
  },

  {
    id: 6,
    name: "UrbanVille Yellow T-shirt",
    price: "ksh 1000",
    priceValue: 1000,
    img: "/img/yellowtee.jpeg",
    images: ["/img/yellowtee.jpeg"],
    alt: "Urbanville yellow t-shirt",
    colors: ["Yellow"],
    sizes: ["S", "M", "L"],
    inStock: true,
    badge: null,
    notice: "Buy 2 get 1 free",
    description:
      "Bright yellow UrbanVille tee designed for bold streetwear style.",
    sizeFit: {
      modelHeight: "176cm",
      modelWearing: "Size M"
    }
  }
];

  const statusStyles = {
  HOME: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-200",
  },
  AWAY: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-200",
  },
   FINAL: {
    bg: "bg-gray-100",
    text: "text-gray-700",
    border: "border-gray-300"
  }
};
const resultStyles = {
  W: "text-green-600",
  L: "text-red-600",
};

const games = [
  {
    day: "Wednesday",
    date: "Feb 11",
    time: "6:00 PM CST",
    venue: "Jomo Kenyatta Sports Ground",
    city: "Kisumu, Kenya",
    tv: "FanDuel Sports Network - Wisconsin",
    radio: "620 AM/103.3 FM WTMJ",
    opponent: "Orlando Magic",
    logo: "/img/magic.png",
    jersey: "/img/jersey.png",
    status: "HOME",
    type:  "UPCOMING"
   

  },
  {
    day: "Wednesday",
    date: "Feb 11",
    time: "6:00 PM CST",
    venue: "Don Bosco",
    city: "Nairobi, Kenya",
    tv: "FanDuel Sports Network - Wisconsin",
    radio: "620 AM/103.3 FM WTMJ",
    opponent: "Orlando Magic",
    logo: "/img/magic.png",
    jersey: "/img/jersey.png",
    status: "AWAY",
    type:  "UPCOMING"
    
  },{
    day: "Wednesday",
    date: "Feb 11",
    time: "6:00 PM CST",
    venue: "Police Canteen",
    city: "Kakamega, Kenya",
    tv: "FanDuel Sports Network - Wisconsin",
    radio: "620 AM/103.3 FM WTMJ",
    opponent: "Orlando Magic",
    logo: "/img/magic.png",
    jersey: "/img/jersey.png",
    status: "AWAY",
    type:  "FINAL",
    result: "W",      // only if FINAL
    homeScore: 110,
    awayScore: 98,
  },{
    day: "Wednesday",
    date: "Feb 11",
    time: "6:00 PM CST",
    venue: "Nyayo National Gymnasium",
    city: "Nairobi, Kenya",
    tv: "FanDuel Sports Network - Wisconsin",
    radio: "620 AM/103.3 FM WTMJ",
    opponent: "Orlando Magic",
    logo: "/img/magic.png",
    jersey: "/img/jersey.png",
    status: "HOME",
    type:  "FINAL",
    result: "L",      // only if FINAL
    homeScore: 32,
    awayScore: 40,
  },{
    day: "Wednesday",
    date: "Feb 11",
    time: "6:00 PM CST",
    venue: "United States International University",
    city: "Nairobi, Kenya",
    tv: "FanDuel Sports Network - Wisconsin",
    radio: "620 AM/103.3 FM WTMJ",
    opponent: "Orlando Magic",
    logo: "/img/magic.png",
    jersey: "/img/jersey.png",
    status: "HOME",
    type:  "FINAL",
    result: "W",      // only if FINAL
    homeScore: 60,
    awayScore: 53,
  },
];
const management=[
  {
    firstName:"Oliver",
    lastName:'Nyawanda',
    position:"Head Coach",
     img:"img/picture.avif",
    audio:"/audio/jean.mp4"
  },
  {
    firstName:"Oliver",
    lastName:'Nyawanda',
    img:"img/picture.avif",
    position:"Head Coach",
    audio:"/audio/jean.mp4"
  },{
    firstName:"Oliver",
    lastName:'Nyawanda',
    position:"Head Coach",
     img:"img/picture.avif",
    audio:"/audio/jean.mp4"
  },{
    firstName:"Oliver",
    lastName:'Nyawanda',
    position:"Head Coach",
     img:"img/picture.avif",
    audio:"/audio/jean.mp4"
  },
]
const players = [
  {
    firstName: "Antony",
    lastName: "William",
    number: "23",
    position: "FOWARD/CENTER",
    height: "6'4\"",
    weight: "80kg",
    age: 27,
    nickname: "Anto",
    team: "ubv",
    image: "/img/antony.png",
    stats: {
      gp: 39,
      ppg: 3.7,
      apg: 0.8,
      rpg: 4.3,
    },
  },
   {
    firstName: "Moses",
    lastName: "Odhiambo",
    number: "3",
    position: "POINT GUARD",
    height: "5'8\"",
    weight: " 60kg",
    age: 26,
    nickname: "Msanii",
    team: "ubv",
    image: "/img/moses.png",
    stats: {
      gp: 39,
      ppg: 3.7,
      apg: 0.8,
      rpg: 4.3,
    },
  }, {
    firstName: "Bradley",
    lastName: "Joshua",
    number: "12",
    position: "POINT GUARD",
    height: "5'10\"",
    weight: "70kg",
    age: 22,
    nickname: "",
    team: "ubv",
    image: "/img/brad.png",
    stats: {
      gp: 39,
      ppg: 3.7,
      apg: 0.8,
      rpg: 4.3,
    },
  }, {
    firstName: "Carl",
    lastName: "Kanga",
    number: "5",
    position: "COMBO GUARD",
    height: "6'00\"",
    weight: " 72kg",
    age: 23,
    nickname: "Kanga blaq",
    team: "ubv",
    image: "/img/carl.png",
    stats: {
      gp: 39,
      ppg: 3.7,
      apg: 0.8,
      rpg: 4.3,
    },
  }, {
    firstName: "Mark",
    lastName: "Obondi",
    number: "10",
    position: "CENTER/FORWARD",
    height: "6'3\"",
    weight: "87 kg",
    age: "24",
    nickname: "",
    team: "ubv",
    image: "/img/picture.avif",
    stats: {
      gp: 39,
      ppg: 3.7,
      apg: 0.8,
      rpg: 4.3,
    },
  },
   {
    firstName: "Cyrille",
    lastName: "Akongo",
    number: "4",
    position: "SHOOTING GUARD/FORWARD",
    height: "6'1\"",
    weight: "80 kg",
    age: "23",
    nickname: "",
    team: "ubv",
    image: "/img/picture.avif",
    stats: {
      gp: 39,
      ppg: 3.7,
      apg: 0.8,
      rpg: 4.3,
    },
  },
  {
    firstName: "Geoffrey",
    lastName: "Aduda",
    number: "8",
    position: "CENTER",
    height: "6'4\"",
    weight: "84 kg",
    age: "21",
    nickname: "",
    team: "ubv",
    image: "/img/jeff.png",
    stats: {
      gp: 39,
      ppg: 3.7,
      apg: 0.8,
      rpg: 4.3,
    },
  },{
    firstName: "Dwayne",
    lastName: "Israel",
    number: "30",
    position: "POINT GUARD",
    height: "5'5\"",
    weight: " 65 kg",
    age: "22",
    nickname: "",
    team: "ubv",
    image: "/img/israel.png",
    stats: {
      gp: 39,
      ppg: 3.7,
      apg: 0.8,
      rpg: 4.3,
    },
  },
  {
    firstName: "Edward",
    lastName: "Kizito",
    number: "7",
    position: "SMALL FORWARD",
    height: "5'11\"",
    weight: " 70 kg",
    age: "36",
    nickname: "Tedize",
    team: "ubv",
    image: "/img/ted.png",
    stats: {
      gp: 39,
      ppg: 3.7,
      apg: 0.8,
      rpg: 4.3,
    },
  },{
    firstName: "Nelson",
    lastName: "Onyimbi",
    number: "24",
    position: "SHOOTING GUARD",
    height: "5'9\"",
    weight: " 70 kg",
    age: "31",
    nickname: "Nel",
    team: "ubv",
    image: "/img/nelson.png",
    stats: {
      gp: 39,
      ppg: 3.7,
      apg: 0.8,
      rpg: 4.3,
    },
  },
  {
    firstName: "Peter",
    lastName: "Muhati",
    number: "34",
    position: "SMALL FORWARD",
    height: "6'1\"",
    weight: " 76 kg",
    age: "23",
    nickname: "",
    team: "ubv",
    image: "/img/israel (6).png",
    stats: {
      gp: 39,
      ppg: 3.7,
      apg: 0.8,
      rpg: 4.3,
    },
  },{
    firstName: "Milton",
    lastName: "Hamadi",
    number: "32",
    position: "SHOOTING GUARD",
    height: "6'00\"",
    weight: " 69 kg",
    age: "22",
    nickname: "",
    team: "ubv",
    image: "/img/milton.png",
    stats: {
      gp: 39,
      ppg: 3.7,
      apg: 0.8,
      rpg: 4.3,
    },
  },
  {
    firstName: "Jean",
    lastName: "Powell",
    number: "",
    position: "SHOOTING GUARD/SMALL FORWARD",
    height: "6'00\"",
    weight: " 75kg",
    age: "22",
    nickname: "Jay/Jay Bale",
    team: "ubv",
    image: "/img/picture.avif",
    stats: {
      gp: 39,
      ppg: 3.7,
      apg: 0.8,
      rpg: 4.3,
    },
    audio:"/audio/jean.mp4"
  }
];

export{
    programs,
    events,
    merch,
    statusStyles,
    games,
    resultStyles,
    players,
    management
}
