import { ReactElement, useState } from "react";
import styles from "./Tabs.module.css";

export type PropsTabs = {
  tabs: { name: string; content: ReactElement }[];
};

export const Tabs = ({ tabs }: PropsTabs) => {
  const [currentTab, setCurrentTab] = useState(0);

  const toggleTab = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <div className={styles.containerTab}>
      <div className={styles.blocTabs}>
        {tabs.map((tab, index) => (
          <button
            className={`${styles.tabs} ${
              currentTab === index ? styles.activeTabs : ""
            }`}
            onClick={() => toggleTab(index)}
            key={index}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className={styles.contentTabs}>
        {tabs.map((tab, index) => (
          <div
            className={`${styles.content} ${
              currentTab === index ? styles.activeContent : ""
            }`}
            key={index}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};
