import React from "react";
import LatestNewsAndDate from "../../components/LatestNewsAndDate";
import MiddlePost from "../../components/HomeLayout/MiddlePost";
import Title from "../../components/Title";

const Home = () => {
  return (
    <>
      <Title title="Dragon News" />
      <main>
        {/* aside and main layout */}
        <section>
          <MiddlePost />
        </section>
      </main>
    </>
  );
};

export default Home;
