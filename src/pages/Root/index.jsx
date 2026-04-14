import React, { Suspense } from "react";
import Navbar from "../../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../components/Footer";
import LeftAside from "../../components/HomeLayout/LeftAside";
import RightAside from "../../components/HomeLayout/RightAside";
import LatestNewsAndDate from "../../components/LatestNewsAndDate";
import { NewsLoading } from "../../components/Loading";

const Root = () => {
  const navigate = useNavigation();
  console.log(navigate);
  return (
    <>
      <Navbar></Navbar>
      <LatestNewsAndDate />
      <main className="grid grid-cols-12 gap-5 container py-5">
        <aside className="col-span-3">
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-md"></span>
            }
          >
            <LeftAside />
          </Suspense>
        </aside>
        <section className="col-span-6">
          {navigate.state == "loading" ? (
            <NewsLoading></NewsLoading>
          ) : (
            <Outlet></Outlet>
          )}
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Root;
