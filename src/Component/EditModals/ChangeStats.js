import Modal from "react-modal";
import { useState } from "react";
import "./Modal.css";

export default function ChangeStat(prop) {
  const { isOpen, onClose } = prop;
  const [statChange, setStatChange] = useState(Array(8).fill(0));
  const [statRatings, setStatRatings] = useState(Array(8).fill(""));

  const handleCloseModal = () => {
    onClose();
  };

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

  const ratingOptions = ["低", "中", "高", "超", "神"];

  const handleInputChange = (index, value) => {
    const newStatChange = [...statChange];
    let intValue = parseInt(value, 10);
    if (isNaN(intValue)) {
      intValue = 0;
    }
    // Rounding down positive decimals and rounding up negative decimals
    if (intValue > 10) intValue = 10;
    else if (intValue < -10) intValue = -10;
    else if (intValue > 0) intValue = Math.floor(intValue);
    else intValue = Math.ceil(intValue);

    newStatChange[index] = intValue;
    setStatChange(newStatChange);
  };

  const handleRatingChange = (index, value) => {
    const newStatRatings = [...statRatings];
    newStatRatings[index] = value;
    setStatRatings(newStatRatings);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={handleCloseModal}
          style={{ cursor: "pointer", padding: "5px" }}
        >
          X
        </button>
      </div>
      <table className="pop-up-table">
        <thead>
          <tr>
            <td>数值</td>
            <td>增加/减少</td>
            <td>最终评价</td>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat, index) => (
            <tr key={index}>
              <td>{stat}</td>
              <td>
                <input
                  type="number"
                  value={statChange[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  min="-10"
                  max="10"
                />
              </td>
              <td>
                <select
                  value={statRatings[index]}
                  onChange={(e) => handleRatingChange(index, e.target.value)}
                >
                  <option value="" disabled>
                    Select rating
                  </option>
                  {ratingOptions.map((option, optIndex) => (
                    <option key={optIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Modal>
  );
}
