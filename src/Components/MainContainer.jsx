import React from "react";

const MainContainer = ({ children }) => {
  return (
    <main className="flex flex-col pb-[30px] bg-bgBodyLight dark:bg-bgBodyDark">
      <section>
        <div className="pt-5 pb-[30px] px-[60px]">{children}</div>
      </section>
    </main>
  );
};

export default MainContainer;
