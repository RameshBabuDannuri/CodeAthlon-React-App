import React, { Component } from "react";
import Header from "./components/Layouts/Heaader/Header";
import Banner from "./components/Layouts/Banner/Banner";
import Course from "./components/Section/course";
import CourseWrappedLabel from "./components/Section/courseWrappedLabel";
import Faq from "./components/Layouts/faq/faq";
import Footer from "./components/Layouts/footer/Footer";
import Pricing from "./components/Section/pricing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Course />
        <CourseWrappedLabel />

        <Pricing />
        <Faq />
        <Footer />
      </div>
    );
  }
}

export default App;
