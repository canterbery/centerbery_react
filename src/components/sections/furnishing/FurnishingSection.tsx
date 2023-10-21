import {
  Floor1BathroomSlides,
  Floor1GardenSlides,
  Floor1KitchenSlides,
  Floor1LivingRoomSlides,
  Floor2BathroomSlides,
  Floor2BedroomSlides,
  Floor2SmallSlides,
} from "../../../const/slides";
import styles from "./FurnishingSection.module.scss";
import { Swiper } from "../../swiper/Swiper";
import { Tabs } from "../../tabs/Tabs";

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
        <Swiper
          imageList={Floor1LivingRoomSlides.concat(Floor1KitchenSlides).concat(
            Floor2BedroomSlides
          )}
        />
        ,
      </div>
    </div>
  );
};
