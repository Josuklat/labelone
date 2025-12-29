import { useEffect, useRef, useState } from "react";
import en from "../i18n/en";
import NewsSection from "../components/NewsSection";

export default function Home() {
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
  }, []);

  return (
    <div>
      <section
        ref={heroRef}
        className={`fade-section ${visible ? "visible" : ""}`}
      >
        <h1>{en.homeTitle}</h1>
        <p>{en.homeSubtitle}</p>
        <button>{en.homeCTA}</button>
      </section>
      <section className="fade-section visible">
        <h2>{en.homeHowTitle}</h2>
        <ul>
          <li>{en.homeHowStep1}</li>
          <li>{en.homeHowStep2}</li>
          <li>{en.homeHowStep3}</li>
        </ul>
      </section>
      <section className="fade-section visible">
        <h2>{en.homeWhyTitle}</h2>
        <ul>
          <li>{en.homeWhy1}</li>
          <li>{en.homeWhy2}</li>
          <li>{en.homeWhy3}</li>
        </ul>
      </section>
    </div>
  );
}