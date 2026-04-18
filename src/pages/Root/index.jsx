import React, { Suspense } from "react";
import Navbar from "../../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../components/Footer";
import LeftAside from "../../components/HomeLayout/LeftAside";
import RightAside from "../../components/HomeLayout/RightAside";
import LatestNewsAndDate from "../../components/LatestNewsAndDate";
import { CategoryLoad, NewsLoading } from "../../components/Loading";

const Root = () => {
  const navigate = useNavigation();
  return (
    <>
      <Navbar></Navbar>
      <LatestNewsAndDate />
      <main className="grid grid-cols-12 gap-5 container py-5">
        <aside className="col-span-3 hidden lg:block">
          <Suspense fallback={<CategoryLoad></CategoryLoad>}>
            <LeftAside />
          </Suspense>
        </aside>
        <section className="col-span-12 lg:col-span-6">
          {navigate.state == "loading" ? (
            <NewsLoading></NewsLoading>
          ) : (
            <Outlet></Outlet>
          )}
        </section>
        <aside className="col-span-12 lg:col-span-3">
          <RightAside />
        </aside>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Root;
