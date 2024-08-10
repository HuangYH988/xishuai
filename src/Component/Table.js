import React, { useState } from "react";
import sampleList from "./Data/dummyData";
import "./Table1.css"; // Import the CSS file for styling
import ChangeStat from "./EditModals/ChangeStats";
import AddShed from "./EditModals/AddShed";
import ChangeAbnorm from "./EditModals/ChangeAbnorm";
import Delete from "./EditModals/Delete";

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
  const statKeys = ["atk", "def", "hp", "sta", "crt", "hit", "blk", "spd"];

  const [isChange, setIsChange] = useState(false);
  const [isShed, setIsShed] = useState(false);
  const [isAbnorm, setIsAbnorm] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const changeRange = (stat, range) => {
    //console.log(range)
    switch (stat) {
      case "低":
        if (range[0] < 1) {
          range[0] = 1;
        }
        if (range[1] > 9) {
          range[1] = 9;
        }
        break;
      case "中":
        if (range[0] < 10) {
          range[0] = 10;
        }
        if (range[1] > 18) {
          range[1] = 18;
        }
        break;
      case "高":
        if (range[0] < 19) {
          range[0] = 19;
        }
        if (range[1] > 27) {
          range[1] = 27;
        }
        break;
      case "超":
        if (range[0] < 28) {
          range[0] = 28;
        }
        if (range[1] > 36) {
          range[1] = 36;
        }
        break;
      case "神":
        if (range[0] < 37) {
          range[0] = 37;
        }
        break;
      default:
        break;
    }
    return range;
  };

  // Populate rows with data from sampleList
  const rows = sampleList.map((item) => [
    item.bugName,
    item.size,
    item.level,
    ...statKeys.map((key) => ({
      stat: item[key][0],
      arrow: changeRange(item[key][0], item[key][1]),
      change: item[key][2],
    })),
    item.abnorm,
  ]);

  const openModal = (typeID) => {
    switch (typeID) {
      case 1:
        setIsChange(true);
        break;
      case 2:
        setIsShed(true);
        break;
      case 3:
        setIsAbnorm(true);
        break;
      case 4:
        setIsDelete(true);
        break;

      default:
        break;
    }
  };

  const closeModal = (typeID) => {
    switch (typeID) {
      case 1:
        setIsChange(false);
        break;
      case 2:
        setIsShed(false);
        break;
      case 3:
        setIsAbnorm(false);
        break;
      case 4:
        setIsDelete(false);
        break;

      default:
        break;
    }
  };

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
                <td key={cellIndex}>
                  <div className="stat-cell">{cell.stat}</div>
                  <div className="arrow-cell">
                    <span>
                      {cell.arrow[0]}-{cell.arrow[1]}
                    </span>
                    <span>{cell.change}</span>
                  </div>
                </td>
              ))}
              <td key={`变${rowIndex}`}>
                <button onClick={() => openModal(1)}>加/减</button>
              </td>
              <td key={`蜕${rowIndex}`}>
                <button onClick={() => openModal(2)}>加虫蜕</button>
              </td>
              <td key={`异${rowIndex}`}>
                {row[11]} <br />
                <button onClick={() => openModal(3)}>更改异虫</button>
              </td>
              <td key={`删${rowIndex}`}>
                <button onClick={() => openModal(4)}>删除</button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={headers.length + stats.length + updates.length}>+</td>
          </tr>
        </tbody>
      </table>
      <ChangeStat isOpen={isChange} onClose={() => closeModal(1)} />
      <AddShed isOpen={isShed} onClose={() => closeModal(2)} />
      <ChangeAbnorm isOpen={isAbnorm} onClose={() => closeModal(3)} />
      <Delete isOpen={isDelete} onClose={() => closeModal(4)} />
    </div>
  );
}
