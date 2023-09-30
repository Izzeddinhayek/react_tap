import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import HeroSection from "../Components/HeroSection";
import MainContainer from "../Components/MainContainer";
import InputForm from "../Components/InputForm";
import SearchOutput from "../Components/SharedComponents/SearchOutput";
import CardContainer from "../Components/CardContainer";
import Card from "../Components/SharedComponents/Card";
import fetchCards from "../API/FetchCards";
import Footer from "../Layout/Footer";
import FavMenu from "../Components/FavMenu";
import FavourtiesCard from "../Components/SharedComponents/FavourtiesCard";
import { FavContext } from "../Contexts/FavContext";

function Home({ onClickFav, onClickDark, menuVisible }) {
  const [topics, setTopics] = useState(null); //Server-side
  const [viewTopics, setViewTopics] = useState(null); //Client-side
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [filterOptions, setFilterOptions] = useState(null);
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  const { fav } = useContext(FavContext);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [search]);

  useEffect(() => {
    async function fetchData() {
      setTopics(null);
      try {
        const result = await fetchCards(debouncedSearch);
        setTopics(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [debouncedSearch]);

  // useEffect(() => {
  //   if (topics) {
  //     let categoriesList = new Set();
  //     topics.forEach((topic) => categoriesList.add(topic.category));
  //     setFilterOptions([...categoriesList]);

  //     let updatedTopics = [...topics];
  //     if (sort) {
  //       updatedTopics.sort((a, b) => {
  //         switch (sort) {
  //           case "DEFAULT":
  //             return updatedTopics;
  //           case "AUTHOR":
  //             return a["name"] < b["name"] ? -1 : 1;

  //           case "TOPIC":
  //             return a["topic"] < b["topic"] ? -1 : 1;

  //           default:
  //             throw `Unknown sort by option ${sort}`;
  //         }
  //       });
  //     }

  //     if (filter) {
  //       updatedTopics = updatedTopics.filter(
  //         (topic) => topic.category === filter
  //       );
  //     }
  //     setViewTopics(updatedTopics);
  //   }
  // }, [topics, sort, filter]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="w-screen h-screen bg-bgBodyLight dark:bg-bgBodyDark">
      <Header onClickFav={onClickFav} onClickDark={onClickDark} />
      <HeroSection />
      <MainContainer>
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

        <InputForm
          placeholder="Search... "
          onSearchChange={handleSearchChange}
          label1={"Sort By"}
          value1={sort}
          options1={[
            { title: "DEFAULT", value: "" },
            { title: "Author Name", value: "AUTHOR" },
            { title: "TOPIC TITLE", value: "TOPIC" },
          ]}
          onChange1={(e) => {
            setSort(e.target.value);
          }}
          label2={"Filter By"}
          value2={filter}
          options2={[
            { title: "Default", value: "" },
            ...(Array.isArray(filterOptions)
              ? filterOptions.map((cat) => ({ title: cat }))
              : []),
          ]}
          onChange2={(e) => {
            setFilter(e.target.value);
          }}
        />
        <SearchOutput value={viewTopics?.length} />
        <CardContainer>
          {viewTopics?.map((data) => (
            <Link key={data.id} to={`/details/${data.id}`}>
              <Card
                img={data.image}
                category={data.category}
                topic={data.topic}
                rating={data.rating}
                name={data.name}
              ></Card>
            </Link>
          ))}
        </CardContainer>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default Home;
