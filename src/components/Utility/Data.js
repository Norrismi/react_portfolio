  import weather_pic from '../../assets/your_weather.jpg'
  import StHillaire_Prod from '../../assets/StHillaire_Prod.jpg'
  import TallGrassland from '../../assets/TallGrassland.jpg'
  import JarvisCreek from '../../assets/15JarvisCreek.jpg'
  
  
  
  
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
      title: "St. Hillaire Productions",
      description:
        "React application build for a small business owner using form validation submitted to Google Firebase Realtime Database.",
      link: "https://dean-productions.vercel.app/",
      source: StHillaire_Prod
    },
    {
      id: 3,
      title: "Jarvis Creek",
      description:
        "House ad featuring Leaflet Map, React Responsive Carousel and form validation with form data recorded in firebase firestore.",
      link: "https://jarvis-one.vercel.app/",
      source: JarvisCreek
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