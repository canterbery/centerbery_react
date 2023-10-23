import { FooterMap } from "../../FooterMap";
import styles from "./styles.module.scss";
const FooterSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Локація та розташування</h1>
        <div className={styles.location}>
          <p className={styles.address}>
            Київська область, Буча, вул.Шевченка 41-Б
          </p>
          <p>
            ЖК "Кентербері" розташований у центральній частині міста. Абсолютно
            усе необхідне - дитячі майданчики , магазини продуктів , аптека ,
            парк - знаходиться в пішій доступності. На машині до Києва 15 хвилин
            також поруч зупинка маршрутних таксі та електрички.
          </p>
        </div>
        <FooterMap />
        <div className={styles.bottom}>
          <div className={styles.bottomTitle}>
            <p className={styles.slogan}>
              ЖК "Кентербері" - дім де живе щастя!
            </p>
            <div className={styles.contactsWrapper}>
              <p className={styles.contacts}>+38 (050) 302 26 19</p>
              <p className={styles.contacts}>canterbery@ukr.net</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FooterSection };
