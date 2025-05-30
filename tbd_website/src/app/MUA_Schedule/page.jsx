"use client";

import Navbar from "@/components/Navbar";
import styles from "./MUA_Schedule.module.css";
import { useEffect, useState } from "react";

const MUA_Schedule = () => {
  const [data, setData] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await fetch("/api");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log("API Response:", result); // Debugging
        setData(result);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    };

    fetchData();
    }, []);

  return (
    <div>
      <Navbar />
      <section className={`container ${styles.section}`}>
        <div className={styles.cardWrapper}>
          <h2 className={styles.sectionTitle}>Service & Booking List</h2>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>MUA Name</th>
                  <th>Expertise</th>
                  <th>Booking Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.mua_name}</td>
                    <td>
                      {item.expertise.split(",").map((e, i) => (
                        <span key={i} className={styles.badgeCategory}>
                          {e}
                        </span>
                      ))}
                    </td>
                    <td>{new Date(item.booking_date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</td>
                    <td>
                      <span className={`${styles.status} ${styles[item.status]}`}>
                        {item.status.replace(/-/g, " ").toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MUA_Schedule;