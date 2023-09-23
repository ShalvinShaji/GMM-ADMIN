import React from "react";
import "../css/RecentNews.css";
import Sectionhead from "../components/Sectionhead";

import NewNewsItemAdder from "../components/NewNewsItemAdder";
import RecentNewsViewer from "../components/RecentNewsViewer";

const RecentNews = () => {
  return (
    <section className="Recent-News">
      <Sectionhead sectionname="Recent News" />
      <div className="container">
        <RecentNewsViewer />
        <NewNewsItemAdder />
      </div>
    </section>
  );
};

export default RecentNews;
