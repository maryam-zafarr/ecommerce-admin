import React, { useEffect, useMemo, useState } from "react";
import Card from "../UI/Card";
import classes from "./SalesChart.module.css";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { getUserStats } from "../../api";

const data = [
  {
    name: "Page A",
    uv: 4000,
  },
  {
    name: "Page B",
    uv: 3000,
  },
  {
    name: "Page C",
    uv: 2000,
  },
  {
    name: "Page D",
    uv: 2780,
  },
  {
    name: "Page E",
    uv: 1890,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page G",
    uv: 3490,
  },
];

const SalesChart = () => {
  const [stats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getUserStats();
      data.map((item) =>
        setUserStats((prev) => [
          ...prev,
          { name: MONTHS[item._id - 1], users: item.total },
        ])
      );
    };
    fetchStats();
  }, [MONTHS]);

  var sortedStats = stats.sort(function (a, b) {
    return MONTHS.indexOf(a.name) - MONTHS.indexOf(b.name);
  });

  return (
    <div className={classes.statistics}>
      <Card>
        <h5>Site Analytics</h5>
        {stats && (
          <LineChart
            width={730}
            height={250}
            data={sortedStats}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#8884d8" />
          </LineChart>
        )}
      </Card>
    </div>
  );
};

export default SalesChart;
