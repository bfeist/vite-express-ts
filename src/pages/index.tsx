import { useState, JSX } from "react";
import styles from "./index.module.css";
import { commonExample } from "@/utils/utils.ts";

const HomePage = (): JSX.Element => {
  const urlWithProxy = `api/v1/version`;
  const [data, setData] = useState<RespExampleType | null>(null);

  commonExample();

  async function getDataFromServer(): Promise<void> {
    const res = await fetch(urlWithProxy);
    const data: RespExampleType = await res.json();
    setData(data);
  }

  return (
    <div className={styles.app}>
      <img src="/images/nasa-logo.svg" alt="nasa logo" />
      <button className={styles.button} onClick={getDataFromServer}>
        Access server using proxy
      </button>
      <p>data : {data?.version}</p>
    </div>
  );
};

export default HomePage;
