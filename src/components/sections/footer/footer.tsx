import { FooterMap } from "../../FooterMap";
import styles from "./styles.module.scss";
const FooterSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1
          className={styles.desc_text}
          style={{
            paddingBottom: "20px",
            paddingTop: "20px",
          }}
        >
          Локація та розташування
        </h1>
        <FooterMap />
      </div>
    </div>
  );
};

export { FooterSection };
