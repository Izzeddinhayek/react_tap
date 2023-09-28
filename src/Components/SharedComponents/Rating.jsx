import React from "react";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  let decimalPart = rating - fullStars;

  let starType = "";
  if (decimalPart >= 0.75) {
    starType = "star";
  } else if (decimalPart >= 0.25) {
    starType = "star-half-outline";
  } else {
    starType = "star-outline";
  }

  const generateStars = (type, count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<ion-icon name={type} key={`star-${i}`} />);
    }
    return stars;
  };

  return (
    <div className="flex text-2xl text-[#e8971a]">
      {generateStars("star", fullStars)}
      <ion-icon name={starType}></ion-icon>
      {fullStars === 4 ? "" : <ion-icon name="star-outline"></ion-icon>}
    </div>
  );
};

export default Rating;
