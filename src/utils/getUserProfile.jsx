import image1 from "../Assets/img1.jpeg";
import image2 from "../Assets/img2.jpeg";
import image3 from "../Assets/img3.avif";
import image4 from "../Assets/img4.webp";
import image5 from "../Assets/img5.jpg";
import image6 from "../Assets/img6.jpg";
import image7 from "../Assets/img7.jpg";
import image8 from "../Assets/img8.jpeg";
import image9 from "../Assets/img9.webp";
import image10 from "../Assets/img10.avif";
import image11 from "../Assets/img11.avif";
// import random;
import { BsFillCircleFill } from "react-icons/bs";
import { userAvailabilityColor } from "./mapping";

const getUserIcon = (user) => {
  const images = [image1 , image2 , image3 , image4 , image5 , image6 , image7 , image8 , image8 , image9 , image10 , image11];
  const random_index = Math.floor(Math.random() * 11) + 1;
  // const img = "https://source.unsplash.com/random/600x600?sig=incrementingIdentifier";
  // let url = user.photoURL
  //   ? user.photoURL
  //   : "https://firebasestorage.googleapis.com/v0/b/nextjs-firebase-auth-1a1b2.appspot.com/o/user.png?alt=media&token=8b4b2b9e-5b0e-4b0e-9b0e-5b0e4b0e9b0e";
  return (
    <div
      style={{
        position: "relative",
        width: "min-content",
      }}
    >
      <img
        src={images[random_index]}
        alt=""
        style={{
          borderRadius: "50%",
          height: "2rem",
          width: "2rem",
        }}
      />
      <BsFillCircleFill
        color={userAvailabilityColor(user.available)}
        size={"0.7rem"}
        style={{
          position: "absolute",
          bottom: "0rem",
          right: "0rem",
          border: "2px white solid",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export { getUserIcon };
