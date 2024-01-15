import { useState } from "react";
import styles from "../App.module.css";
import { ROOT_URL } from "@/constants";
import { commonExample } from "@/utils";

const HomePage = (): JSX.Element => {
  const urlWithProxy = `${ROOT_URL}version`;
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
