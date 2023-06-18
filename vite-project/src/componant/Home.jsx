import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Cards";
import Hero from "./Hero";
import { useRef} from "react";

function Home() {
  // const accounts = [
  //   {
  //     url: "https://github.com/Arwaaa9",
  //     label: "Github Account",
  //     type: "gray",
  //     icon: <FaGithub />,
  //   },
  //   {
  //     url: "https://www.linkedin.com/in/arwa-aiharbi%F0%9F%91%A9%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB-931a44253/",
  //     label: "LinkedIn Account",
  //     type: "linkedin",
  //     icon: <FaLinkedin />,
  //   },
  // ];
    const cardProps = [
      {
        title: "كل عام وانتم بخير اعاده الله علينا وعليكم بالمسرات والخيرات🥳💖",
          Image:
"https://i.pinimg.com/564x/4a/37/e8/4a37e800c82c2683fb87df96725a70ed.jpg"       
      },
      {
        title:"كل عام وانتم بخير اعاده الله علينا وعليكم بالمسرات والخيرات 🥳💖",
        Image:
          "https://i.pinimg.com/564x/4a/37/e8/4a37e800c82c2683fb87df96725a70ed.jpg",
      },
      {
        title: "كل عام وانتم بخير اعاده الله علينا وعليكم بالمسرات والخيرات🥳💖",
        Image:" https://i.pinimg.com/564x/4a/37/e8/4a37e800c82c2683fb87df96725a70ed.jpg "   
      },
      {
    
        title: "كل عام وانتم بخير اعاده الله علينا وعليكم بالمسرات والخيرات 🥳💖",
      Image:" https://i.pinimg.com/564x/4a/37/e8/4a37e800c82c2683fb87df96725a70ed.jpg"    
        },
      {
      
        title: "كل عام وانتم بخير اعاده الله علينا وعليكم بالمسرات والخيرات 🥳💖",
        Image:"https://i.pinimg.com/564x/4a/37/e8/4a37e800c82c2683fb87df96725a70ed.jpg"     },
      {
        title: "كل عام وانتم بخير اعاده الله علينا وعليكم بالمسرات والخيرات🥳💖",
        Image:" https://i.pinimg.com/564x/4a/37/e8/4a37e800c82c2683fb87df96725a70ed.jpg "      },
    ];
    const ref = useRef(null);
  return (
    <>
      <Navbar />
      <Hero ref={ref} />
      <Card cardProps={cardProps}  ref={ref} />
      <Footer />
    </>
  );
}

export default Home;
