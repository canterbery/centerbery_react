import "./SwiperItem.css";

export type SwiperItemProps = {
  imageSrc: string;
  imageAlt: string;
};

export const SwiperItem = ({ imageSrc, imageAlt }: SwiperItemProps) => {
  return (
    <li className="swiper-item">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="swiper-img"
        draggable="false"
      ></img>
    </li>
  );
};
