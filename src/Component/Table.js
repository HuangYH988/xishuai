import sampleList from "./Data/dummyData";
import React from "react";

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
  const rows = sampleList.map((item) => [
    item.bugName,
    item.size,
    item.level,
    ...item.stats,
    "",
    "",
    "",
    "", // Three blank columns for updates
  ]);

  return (
    <div>
      <table border="1">
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
              {row.map((cell, cellIndex) => (
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
