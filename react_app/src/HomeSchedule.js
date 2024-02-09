import React, { useState } from "react";
import Calendar from "react-calendar";
import PropTypes from "prop-types";
import "react-calendar/dist/Calendar.css";

function HomeSchedule() {
  const [date, setDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const onDayClick = (value, event) => {
    setDate(value);
    setClickPosition({
      x: event.clientX,
      y: event.clientY,
    });
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="calendar-container w-full h-full max-w-screen-lg mx-auto p-4">
        <Calendar onChange={setDate} value={date} onClickDay={onDayClick} />
      </div>
      {showPopup && (
        <Popup date={date} onClose={closePopup} position={clickPosition} />
      )}
    </div>
  );
}

function Popup({ date, onClose, position }) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${position.x}px`, // 클릭한 위치에 따라 팝업창 위치 조정
        top: `${position.y}px`,
        width: "200px", // 팝업창의 너비 조정
        height: "100px", // 팝업창의 높이 조정
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "10px",
        zIndex: 1000,
        boxSizing: "border-box",
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-2 left-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700 focus:outline-none focus:ring focus:border-blue-300"
        style={{ width: "24px", height: "24px" }} // 버튼의 크기를 상대적으로 조절
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "16px", height: "16px" }}
          className="m-auto"
        >
          {" "}
          {/* SVG 아이콘 크기 조절 */}
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <h3 style={{ margin: "0", padding: "0", textAlign: "center" }}>
        {date.toDateString()}
      </h3>
    </div>
  );
}

Popup.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onClose: PropTypes.func.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

export default HomeSchedule;
