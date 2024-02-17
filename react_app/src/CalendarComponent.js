import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarComponent = () => {
  const [earnings, setEarnings] = useState(0);

  // 오늘의 일정 표시 함수
  const updateTodaySchedule = () => {
    return 'Working on: Project XYZ'; // 실제 사용 시 여기를 동적 데이터로 대체
  };

  const ratePerHour = 9860; // 시간당 임금 설정

  // 수익 계산 함수
  const startEarningsTimer = () => {
    const startTime = new Date(); // 타이머 시작 시간
    return setInterval(() => {
      const currentTime = new Date();
      const hoursWorked = (currentTime - startTime) / 1000 / 60 / 60;
      const newEarnings = hoursWorked * ratePerHour;
      setEarnings(newEarnings.toFixed(2));
    }, 1000); // 매 초마다 업데이트
  };

  useEffect(() => {
    const timer = startEarningsTimer();
    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        dateClick={(info) => alert('Schedule for ' + info.dateStr)} // 실제 구현 시 여기에 일정 데이터를 fetch하는 로직 추가
        dayCellContent={(e) => e.dayNumberText}
      />
      <div id="todaySchedule">{updateTodaySchedule()}</div>
      <div id="earningsTimer">Earnings: ₩{earnings}</div>
    </div>
  );
};

export default CalendarComponent;