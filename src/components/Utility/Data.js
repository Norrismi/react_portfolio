  import weather_pic from '../../assets/your_weather.jpg'
  import StHillaire_Prod from '../../assets/StHillaire_Prod.jpg'
  import TallGrassland from '../../assets/TallGrassland.jpg'
  import dtKitchen from '../../assets/dtKitchen.jpg'
  
  
  
  
  const data = [
    {
      id: 1,
      title: "TallGrassland.com",
      description:
        "Real Estate website, uses React Redux for state management, Google Cloud Firestore and Google Cloud Storage",
      link: "https://www.tallgrassland.com/",
      source: TallGrassland
    },
    {
      id: 2,
      title: "DT's Kitchen",
      description:
        "Next.js application built for a small business resturant start-up, using React Hook Form and EmailJS for notification of orders.",
      link: "https://dt-kitchen.vercel.app/",
      source: dtKitchen
    },
    {
      id: 3,
      title: "St. Hillaire Productions",
      description:
        "React application build for a small business owner using form validation submitted to Google Firebase Realtime Database.",
      link: "https://dean-productions.vercel.app/",
      source: StHillaire_Prod
    },
    {
      id: 4,
      title: "Your Weather",
      description:
        "Used weatherstack API to retreive weather and weather metrics around the world",
      link: "http://your-weather7.herokuapp.com/",
      source: weather_pic
    }
  ]

  export default data