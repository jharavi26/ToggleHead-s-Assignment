import React from 'react';
import '../styles/Examination.css';

const Examination = () => {
  const examinations = [
    {
      date: '02th October 2014',
      level: 'Level 1 exam',
    },
    {
      date: 'Nov-Dec 2016',
      level: 'Level 2',
      details: ['Lorem Ipsum', 'Lorem Ipsum'],
    },
    {
      date: 'Ongoing this year',
      level: 'Level 3 (Grad)',
    },
  ];

  return (
    <section className="upcoming-examinations">
      <div className="header">
        <h2>Upcoming Examinations</h2>
        <p>Enquire about the examination & register for the exams</p>
      </div>
      <div className="exams-grid">
        {examinations.map((exam, index) => (
          <div className="exam-card" key={index}>
            <div className="icon">
              <img
                src="https://img.icons8.com/ios-filled/50/003366/calendar.png"
                alt="Calendar Icon"
              />
            </div>
            <h3>{exam.date}</h3>
            <p>{exam.level}</p>
            {exam.details &&
              exam.details.map((detail, i) => <p key={i}>{detail}</p>)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Examination;