import React from "react";
import {
  Blog,
  Features,
  Header,
  Footer,
  Possibility,
  WhatGPT3,
} from "./container";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};
