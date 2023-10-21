import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./HouseTypesPage.module.css";

type Props = {
  house: {
    address: string;
    size: string;
    floors: string;
    bedrooms: string;
    bathrooms: string;
    yard: string;
    parking: string;
    kitchen: string;
    hardware: string;
    imgUrl: string;
    slideDirection: "left" | "right";
  };
};

export const HouseTypesPage: React.FC<Props> = ({ house }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      treshhold: 1.0,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    let current = containerRef.current;

    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [containerRef, options]);
  return (
    <div className={styles.section_120m}>
      <div className={styles.container} ref={containerRef}>
        <h1
          className={styles.desc_text}
          style={{ color: "#764e23", marginBottom: "20px", marginTop: "20px" }}
        >
          {house.address}
        </h1>
        <div
          className={`${styles.row} ${styles.hidden} ${
            isVisible ? styles.show : ""
          } ${house.slideDirection === "left" ? styles.left : styles.right}`}
        >
          <div className={styles.col_house_description}>
            <div className={styles.house_description_card}>
              <h1 className={styles.desc_text}>
                {house.size} <sup>2</sup>
              </h1>
            </div>
            <div className={styles.house_description_card}>
              <h1 className={styles.desc_text}>{house.floors}</h1>
            </div>
            <div className={styles.house_description_card}>
              <h1 className={styles.desc_text}>{house.bedrooms}</h1>
            </div>
            <div className={styles.house_description_card}>
              <h1 className={styles.desc_text}>{house.bathrooms}</h1>
            </div>
            <div className={styles.house_description_card}>
              <h1 className={styles.desc_text}>{house.yard}</h1>
            </div>
            <div className={styles.house_description_card}>
              <h1 className={styles.desc_text}>{house.parking}</h1>
            </div>
            <div className={styles.house_description_card}>
              <h1 className={styles.desc_text}>{house.kitchen}</h1>
            </div>
            <div className={styles.house_description_card}>
              <h1 className={styles.desc_text}>{house.hardware}</h1>
            </div>
          </div>
          <div className={styles.col_house_picture}>
            <img className={styles.house_img} src={house.imgUrl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
