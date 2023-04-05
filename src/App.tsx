import React, { useEffect, useState } from "react";
import "./App.style.scss";
import Box from "./components/Box";
import Page from "./components/Page/Page";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="container">
      <Page>
        <Box>
          <p className={scrollPosition > 250 ? "fadeOut" : "fadeIn"}>
            Hi there...
          </p>
        </Box>
      </Page>
      <Page>
        <p
          style={{ display: "relative", top: "50%" }}
          className={
            scrollPosition > 300 && scrollPosition < 1200 ? "fadeIn" : "fadeOut"
          }
        >
          About me
        </p>
      </Page>
      <Page>
        <p
          style={{ display: "relative", top: "50%" }}
          className={
            scrollPosition > 1300 && scrollPosition < 1900
              ? "fadeIn"
              : "fadeOut"
          }
        >
          Thingd I've done
        </p>
      </Page>
      <Page>
        <p
          style={{ display: "relative", top: "50%" }}
          className={scrollPosition > 2100 ? "fadeIn" : "fadeOut"}
        >
          Contact
        </p>
      </Page>
    </div>
  );
}

export default App;
