import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "./tableStyle.css";
import { useState } from "react";

export default function Table() {
    const getDaysInMonth = (year: number, month: number) => {
        const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
        const DaysInMonth =  new Date(year, month+1, 0).getDate();
        const result = [];

        for(let day = 1; day <= DaysInMonth; day++) {
            const date = new Date(year, month, day);
            const weekday = weekdays[date.getDay()];
            result.push([day, weekday]);
        }
        return result;
    }

    const now = new Date();

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const [month, setMonth] = useState(now.getMonth());
    const [year, setYear] = useState(now.getFullYear());
    const [days, setDays] = useState(getDaysInMonth(year, month));
    

    const changeDateLeft = () => {
        let newMonthIndex = month - 1;
        let newYear = year;

        if(newMonthIndex < 0) {
            newMonthIndex = 11;
            newYear -= 1;
        }
        let days = getDaysInMonth(newYear, newMonthIndex);

        setMonth(newMonthIndex);
        setYear(newYear);
        setDays(days);
    }

    const changeDateRight = () => {
        let newMonthIndex = month + 1;
        let newYear = year;

        if(newMonthIndex > 11) {
            newMonthIndex = 0;
            newYear += 1;
        }
        let days = getDaysInMonth(newYear, newMonthIndex);

        setMonth(newMonthIndex);
        setYear(newYear);
        setDays(days);
    }

    return (
        <div className="table-container">
            <div className="month">
                <FaAngleLeft className="left" onClick={changeDateLeft}/>
                <h4>{monthNames[month]}, {year}</h4>
                <FaAngleRight className="right" onClick={changeDateRight}/>
                
            </div>
            <table className="habit-table">
            <thead>
                <tr>
                    <th>Habits</th>
                    
                    {["T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M"].map((day, index) => (
                        <th key={`day-${index}`}>{day}</th>
                    ))}
                    <th>Goal</th>
                    <th>Achieved</th>
                </tr>
                <tr>
                    <th></th>
                    
                    {Array.from({ length: 31 }, (_, i) => (
                        <th key={`date-${i}`}>{i + 1}</th>
                    ))}
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={33} className="message-row">Create your first habit by clicking on + New Habit</td>
                </tr>
            </tbody>
        </table>
        </div>
  )
}
