// import { useState } from "react"

// const images = [
//   {
//     url: "https://firebasestorage.googleapis.com/v0/b/temp-39228.appspot.com/o/XKART%2FScreenshot%20(1).png?alt=media&token=5512974c-9e96-432c-904e-66c0a0ae9dc8",
//     alt: "Mountain",
//   },
//   {
//     url: "https://firebasestorage.googleapis.com/v0/b/temp-39228.appspot.com/o/XKART%2FScreenshot%20(110).png?alt=media&token=094d5a1d-25d5-4422-b594-35b59c949c54",
//     alt: "Beach",
//   },
//   {
//     url: "https://firebasestorage.googleapis.com/v0/b/temp-39228.appspot.com/o/XKART%2FScreenshot%20(28).png?alt=media&token=9a0d571a-438e-4f9a-af04-c0bcc3904924",
//     alt: "City",
//   },
// ];

// function Slider() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handlePrevClick = () => {
//     const newIndex = (currentImageIndex - 1) % 3;
//     // if (newIndex >= 0) {
//     setCurrentImageIndex(newIndex);
//     // } else {
//     //   setCurrentImageIndex(images.length - 1);
//     // }
//   };

//   const handleNextClick = () => {
//     const newIndex = (currentImageIndex + 1) % 3;
//     // if (newIndex < images.length) {
//     setCurrentImageIndex(newIndex);
//     // } else {
//     //   setCurrentImageIndex(0);
//     // }
//   };

//   return (
//     <div className="slider-container">
//       <div className="slider">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image.url}
//             alt={image.alt}
//             className={`slide ${index === currentImageIndex ? "active" : ""} ${
//               index > currentImageIndex
//                 ? "next"
//                 : index < currentImageIndex
//                 ? "prev"
//                 : ""
//             }`}
//           />
//         ))}
//       </div>
//       <div className="buttons">
//         <button
//           className="prev-button"
//           onClick={handlePrevClick}
//           //   disabled={currentImageIndex === 0}
//         >
//           Prev
//         </button>
//         <button
//           className="next-button"
//           onClick={handleNextClick}
//           //   disabled={currentImageIndex === images.length - 1}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Slider;

import { useState } from "react";
import "./temp.css";

const images = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/temp-39228.appspot.com/o/XKART%2FScreenshot%20(1).png?alt=media&token=5512974c-9e96-432c-904e-66c0a0ae9dc8",
    alt: "Mountain",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/temp-39228.appspot.com/o/XKART%2FScreenshot%20(110).png?alt=media&token=094d5a1d-25d5-4422-b594-35b59c949c54",
    alt: "Beach",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/temp-39228.appspot.com/o/XKART%2FScreenshot%20(28).png?alt=media&token=9a0d571a-438e-4f9a-af04-c0bcc3904924",
    alt: "City",
  },
];

function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.alt}
            className={`slide ${index === currentImageIndex ? "active" : ""} ${
              index > currentImageIndex
                ? "next"
                : index < currentImageIndex
                ? "prev"
                : ""
            }`}
          />
        ))}
      </div>
      <div className="buttons">
        <button className="prev-button" onClick={handlePrevClick}>
          Prev
        </button>
        <button className="next-button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
