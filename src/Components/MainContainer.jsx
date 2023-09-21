import React from "react";
import InputForm from "./InputForm";
import SearchOutput from "./SharedComponents/SearchOutput";
import CardContainer from "./CardContainer";
import Footer from "../Layout/Footer";
const MainContainer = () => {
  return (
    <main className="flex flex-col pb-[30px]">
      <section>
        <div className="pt-5 pb-[30px] px-[60px]">
          <InputForm />
          <SearchOutput />
          <CardContainer />
          <Footer />
        </div>
      </section>
    </main>
  );
};

export default MainContainer;
