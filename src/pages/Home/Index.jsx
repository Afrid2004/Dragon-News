import React from "react";
import LatestNewsAndDate from "../../components/LatestNewsAndDate";
import MiddlePost from "../../components/HomeLayout/MiddlePost";

const Home = () => {
  return (
    <>
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
