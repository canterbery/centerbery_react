import {
  Floor1BathroomSlides,
  Floor1GardenSlides,
  Floor1KitchenSlides,
  Floor1LivingRoomSlides,
  Floor2BathroomSlides,
  Floor2BedroomSlides,
  Floor2SmallSlides,
} from "../const/slides";
import styles from "./FurnishingSection.module.css";
import { Swiper } from "./swiper/Swiper";
import { Tabs } from "./tabs/Tabs";

export const FurnishingSection = () => {
  return (
    <div className={styles.section}>
      <h1
        className={styles.desc_text}
        style={{
          color: "#764e23",
          paddingBottom: "20px",
          paddingTop: "20px",
        }}
      >
        ІНТЕР'ЄР
      </h1>

      <div className={styles.container}>
        <Tabs
          tabs={[
            {
              name: "Санвузол",
              content: <Swiper imageList={Floor1BathroomSlides} />,
            },
            {
              name: "Подвір'я",
              content: <Swiper imageList={Floor1GardenSlides} />,
            },
            {
              name: "Вітальня",
              content: <Swiper imageList={Floor1LivingRoomSlides} />,
            },
            {
              name: "Кухня",
              content: <Swiper imageList={Floor1KitchenSlides} />,
            },
          ]}
        />
      </div>
      <div className={styles.container}>
        <Tabs
          tabs={[
            {
              name: "Ванна кімната",
              content: <Swiper imageList={Floor2BathroomSlides} />,
            },
            {
              name: "Дитяча або кабінет",
              content: <Swiper imageList={Floor2SmallSlides} />,
            },
            {
              name: "Головна спальня",
              content: <Swiper imageList={Floor2BedroomSlides} />,
            },
            {
              name: "Гардеробна",
              content: <Swiper imageList={Floor1KitchenSlides} />,
            },
          ]}
        />
      </div>
    </div>
  );
};
