  import weather_pic from '../../assets/your_weather.jpg'
  import StHillaire_Prod from '../../assets/StHillaire_Prod.jpg'
  import TallGrassland from '../../assets/TallGrassland.jpg'
  
  
  
  
  const data = [
    {
      id: 1,
      title: "TallGrassland.com",
      description:
        "Real Estate website, uses React Redux for state management, Google Cloud Firestore and Google Cloud Storage",
      link: "https://tallgrassland.com",
      source: TallGrassland
    },
    {
      "id": "2",
      title: "St. Hillaire Productions",
      description:
        "React and Node app utilizing Node Mailer to keep business owner up-to-date on website submissions. Submissions are backed up with Google Firebase Realtime Database.",
      link: "https://deanproductions-75095.web.app",
      source: StHillaire_Prod
    },
    {
      "id": "4",
      title: "Your Weather",
      description:
        "Used weatherstack API to retreive weather and weather metrics around the world",
      link: "http://your-weather7.herokuapp.com/",
      source: weather_pic
    }
  ]

  export default data