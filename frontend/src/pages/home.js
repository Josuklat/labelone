import { useEffect, useRef, useState } from "react";
import en from "../i18n/en";

export default function Home() {
  const sectionRef = useRef(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (ye
    <div>
      <section
        ref={sectionRef}
        className={`fade-section ${visible ? "visible" : ""}`}
      >
        <h1>{en.homeTitle}</h1>
      </section>
    </div>
  );
}