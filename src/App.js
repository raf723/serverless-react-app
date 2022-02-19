import React, { useState, useEffect } from "react";
import "./css/app.css";

import Card from "./components/Card";
import BarChart from "./components/BarChart";

export default function App() {
  const [counts, setCounts] = useState();
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const apiResponse = await fetch(
      `https://pm4cl2wa8a.execute-api.eu-west-2.amazonaws.com/dev`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const response = await apiResponse.json();
    setCounts(response);
  };

  useEffect(() => {
    setTotalCount(counts?.reduce((sum, it) => sum + it.count, 0));
  }, [counts]);

  return (
    <div className="page-container">
      <div className="link-container">
        <a
          href="https://11fognbk8e.execute-api.eu-west-2.amazonaws.com/dev"
          target="_blank"
          rel="noreferrer"
          onClick={getData()}
          className="redirect-link"
        >
          Redirect Me
        </a>
      </div>

      <div className="stats-container">
        {counts?.map((it) => {
          return (
            <Card key={it.os} os={it.os} count={it.count} total={totalCount} />
          );
        })}
      </div>

      <div className="graph-container">
        <BarChart counts={counts} />
      </div>
    </div>
  );
}
