import React from "react";
import "../css/RecentNews.css";
import Sectionhead from "../components/Sectionhead";
import RecentNewsViewer from "../components/RecentNewsViewer";

const RecentNews = () => {
  return (
    <section className="Recent-News">
      <Sectionhead sectionname="Recent News" />
      <div className="container">
        <RecentNewsViewer />
      </div>
    </section>
  );
};

export default RecentNews;
