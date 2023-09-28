import React, { useState, useEffect, useContext } from "react";
import { json, useParams } from "react-router-dom";
import fetchDetails from "../API/FetchDetails";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import HeroSection from "../Components/HeroSection";
import DetailsContent from "../Components/SharedComponents/DetailsContent";
import SubTopics from "../Components/SharedComponents/SubTopics";
import { FavContext } from "../Contexts/FavContext";
import FavMenu from "../Components/FavMenu";
import FavourtiesCard from "../Components/SharedComponents/FavourtiesCard";

const Details = ({ onClickFav, onClickDark, menuVisible }) => {
  const { id } = useParams();
  const { fav, setFav } = useContext(FavContext);
  const [cardDetail, setCardDetail] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (id) {
          const result = await fetchDetails(id);
          setCardDetail(result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [id]);

  const handleFavButton = () => {
    if (!fav.some((item) => item.id === id)) {
      const updatedFav = [
        ...fav,
        {
          id: id,
          img: cardDetail?.image,
          topic: cardDetail?.topic,
          rating: cardDetail?.rating,
        },
      ];

      setFav(updatedFav);

      localStorage.setItem("favMenu", JSON.stringify(updatedFav));
    } else {
      const updatedFav = fav.filter((item) => item.id !== id);
      setFav(updatedFav);
      localStorage.setItem("favMenu", JSON.stringify(updatedFav));
    }
  };

  return (
    <>
      <Header onClickFav={onClickFav} onClickDark={onClickDark} />

      <FavMenu
        className={`${
          menuVisible
            ? "fixed bottom-0 right-0 z-10 max-h-[26%] w-full bg-bgDefaultLight overflow-y-auto shadow-md transition-max-height duration-300 ease-in-out"
            : "fixed bottom-0 right-0 z-10 max-h-0 w-full bg-bgDefaultLight overflow-y-auto shadow-md transition-max-height duration-300 ease-in-out"
        }`}
        children={fav?.map((fav) => (
          <FavourtiesCard
            key={fav.id}
            img={fav.img}
            topic={fav.topic}
            rating={fav.rating}
          />
        ))}
      />
      <HeroSection />
      <DetailsContent
        category={cardDetail?.category}
        description={cardDetail?.description}
        detailedTopic={cardDetail?.topic}
        img={cardDetail?.image}
        name={cardDetail?.name}
        rating={cardDetail?.rating}
        topic={cardDetail?.topic}
        onClick={handleFavButton}
      />
      <SubTopics sub={cardDetail?.subtopics} topicName={cardDetail?.topic} />
      <Footer />
    </>
  );
};

export default Details;
