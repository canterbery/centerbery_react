import { useRef, useState } from "react";
import { getTouchEventData } from "../../lib/dom";
import { getRefValue, useStateRef } from "../../lib/hooks";
import "./Swiper.css";
import { SwiperItem, SwiperItemProps } from "./SwiperItem";

type Props = {
  imageList: SwiperItemProps[];
};

export const Swiper = ({ imageList }: Props) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const minOffsetXRef = useRef(0);
  const currentOffsetXRef = useRef(0);
  const startXRef = useRef(0);

  const [offsetX, setOffsetX, offSetXRef] = useStateRef(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onTouchMove = (e: MouseEvent | TouchEvent) => {
    const currentX = getTouchEventData(e).clientX;
    const diff = getRefValue(startXRef) - currentX;
    let newOffsetX = getRefValue(currentOffsetXRef) - diff;

    const maxOffsetX = 0;
    const minOffsetX = getRefValue(minOffsetXRef);
    if (newOffsetX > maxOffsetX) {
      newOffsetX = 0;
    }

    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX;
    }

    setOffsetX(newOffsetX);
  };
  const onTouchEnd = () => {
    let newOffsetX = getRefValue(offSetXRef);
    const containerWidth = getRefValue(containerRef).offsetWidth;
    const currentOffsetX = getRefValue(currentOffsetXRef);

    const diff = currentOffsetX - newOffsetX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;
      } else {
        newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth;
      }
    } else {
      newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;
    }

    setIsSwiping(false);
    setOffsetX(newOffsetX);
    setCurrentIndex(Math.abs(newOffsetX / containerWidth));

    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("touchend", onTouchEnd);
    window.removeEventListener("mousemove", onTouchMove);
    window.removeEventListener("mouseup", onTouchEnd);
  };

  const onTouchStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    setIsSwiping(true);
    currentOffsetXRef.current = getRefValue(offSetXRef);
    startXRef.current = getTouchEventData(e).clientX;

    const containerEL = getRefValue(containerRef);
    minOffsetXRef.current = containerEL.offsetWidth - containerEL.scrollWidth;

    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("mousemove", onTouchMove);
    window.addEventListener("mouseup", onTouchEnd);
  };

  const indicatorOnClick = (index: number) => {
    const containerEL = getRefValue(containerRef);
    setCurrentIndex(index);
    setOffsetX(-(containerEL.offsetWidth * index));
  };
  return (
    <div
      className="swiper-container"
      onTouchStart={onTouchStart}
      onMouseDown={onTouchStart}
    >
      <ul
        ref={containerRef}
        className={`swiper-list ${isSwiping ? "swiping" : ""}`}
        style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
      >
        {imageList.map((image, index) => (
          <SwiperItem key={index} {...image} />
        ))}
      </ul>
      <ul className="swiper-indicator">
        {imageList.map((_image, index) => (
          <li
            key={index}
            className={`swiper-indicator-item ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => indicatorOnClick(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};
