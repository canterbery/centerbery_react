import { useEffect, useState } from "react";
import styles from "./ImageSlider.module.css";

type ImageSliderProps = {
  slides: { imageSrc: string; imageAlt: string }[];
  autoPlayInterval?: number;
  showControls?: boolean;
};

export const ImageSlider: React.FC<ImageSliderProps> = ({
  slides,
  autoPlayInterval,
  showControls,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    let interval: undefined | NodeJS.Timer = undefined;
    if (autoPlayInterval) {
      interval = setInterval(goToNext, autoPlayInterval * 1000);
    }

    return interval ? () => clearInterval(interval) : () => {};
  });

  return (
    <div className={styles.slider}>
      {showControls && (
        <div>
          <div onClick={goToPrevious} className={styles.leftArrow}>
            ❰
          </div>
          <div onClick={goToNext} className={styles.rightArrow}>
            ❱
          </div>
        </div>
      )}
      <div
        className={styles.slide}
        style={{ backgroundImage: `url(${slides[currentIndex].imageSrc})` }}
      ></div>
    </div>
  );
};
