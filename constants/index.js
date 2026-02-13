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
  const merch=[
    {
        id:1,
        name:'Urbanville T-shirt', 
        price:'ksh 1000',
        img:'/img/redtee.jpeg',
        images:['/img/bluetee.jpeg','/img/yellowtee.jpeg','/img/navytee.jpeg','/img/redtee.jpeg'],
        alt:'Urbanville red t-shirt',
        colors:["Navy, Yellow, Green"],
        sizes:["XS","S","M","L"],
        badge:"OUT OF STOCK",
        notice:"This item has a 10% discount",
        description:"Heavyweight cotton hoodie....",
        sizeFit:[
            {"Model's height": "177cm / 5' 9½''"},
            {"Model is wearing": "W26 L32 - UK 8 L32"}
        ]
             

        
       
    },
      {
        id:2,
        img:'img/kenyatee.jpeg',
        alt:'Kenya t-shirt',
        name:'Kenya T-shirt',
        price:'ksh 1000'
    },
    {
        id:3,
        img:'img/warmer.jpeg',
        alt:'Kenya t-shirt',
        name:'Urbanville Warmer',
        price:'ksh 2000'
    },{
        id:4,
        img:'img/shorts.jpeg',
        alt:'Kenya t-shirt',
        name:'Urbanville Shorts',
        price:'ksh 1000'
    },{
        id:5,
        img:'img/ubvthreads.jpeg',
        alt:'Kenya t-shirt',
        name:'UBV Threads (White)',
        price:'ksh 1000'
    },{
        id:6,
        img:'img/yellowtee.jpeg',
        alt:'Kenya t-shirt',
        name:'UrbanVille Yellow T-shirt',
        price:'ksh 1000'
    },
    

  ]
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

const players = [
  {
    firstName: "Jericho",
    lastName: "Sims",
    number: "00",
    position: "CENTER",
    height: "6'10\"",
    weight: "250 lbs",
    age: 27,
    yearsPro: 4,
    country: "USA",
    image: "/img/myles.avif",
    stats: {
      gp: 39,
      ppg: 3.7,
      apg: 0.8,
      rpg: 4.3,
    },
  },
   {
    firstName: "Jericho",
    lastName: "Sims",
    number: "00",
    position: "CENTER",
    height: "6'10\"",
    weight: "250 lbs",
    age: 27,
    yearsPro: 4,
    country: "USA",
    image: "/img/myles.avif",
    stats: {
      gp: 39,
      ppg: 3.7,
      apg: 0.8,
      rpg: 4.3,
    },
  }, {
    firstName: "Jericho",
    lastName: "Sims",
    number: "00",
    position: "CENTER",
    height: "6'10\"",
    weight: "250 lbs",
    age: 27,
    yearsPro: 4,
    country: "USA",
    image: "/img/myles.avif",
    stats: {
      gp: 39,
      ppg: 3.7,
      apg: 0.8,
      rpg: 4.3,
    },
  }, {
    firstName: "Jericho",
    lastName: "Sims",
    number: "00",
    position: "CENTER",
    height: "6'10\"",
    weight: "250 lbs",
    age: 27,
    yearsPro: 4,
    country: "USA",
    image: "/img/myles.avif",
    stats: {
      gp: 39,
      ppg: 3.7,
      apg: 0.8,
      rpg: 4.3,
    },
  }, {
    firstName: "Jericho",
    lastName: "Sims",
    number: "00",
    position: "CENTER",
    height: "6'10\"",
    weight: "250 lbs",
    age: 27,
    yearsPro: 4,
    country: "USA",
    image: "/img/myles.avif",
    stats: {
      gp: 39,
      ppg: 3.7,
      apg: 0.8,
      rpg: 4.3,
    },
  },
];

export{
    programs,
    events,
    merch,
    statusStyles,
    games,
    resultStyles,
    players
}
