import React from "react";
import sampleList from "./Data/dummyData";
import "./Table1.css"; // Import the CSS file for styling

export default function Table1() {
  const headers = ["蟋蟀名", "大小", "等级"];
  const stats = [
    "攻击",
    "防御",
    "斗性",
    "体力",
    "暴击",
    "命中",
    "格挡",
    "攻速",
  ];
  const updates = ["加减", "虫蜕", "异虫", "删除"];

  // Populate rows with data from sampleList
  const rows = sampleList.map((item) => [
    item.bugName,
    item.size,
    item.level,
    ...item.stats.map((stat, index) => ({
      stat,
      arrow: item.arrows[index],
    })),
    "",
    "",
    "无",
    ""
  ]);

  return (
    <div>
      <table border="1" className="custom-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            {stats.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            {updates.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.slice(0, 3).map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
              {row.slice(3, 11).map((cell, cellIndex) => (
                <td key={cellIndex} >
                  <div className="stat-cell">{cell.stat}</div>
                  <div className="arrow-cell">
                    <span >
                      {cell.arrow[0]}-{cell.arrow[1]}
                    </span>
                    <span>0</span>
                  </div>
                </td>
              ))}
              {row.slice(11).map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td colSpan={headers.length + stats.length + updates.length}>+</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
