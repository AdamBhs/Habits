import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "./tableStyle.css";
import { useState } from "react";
import Button from "../../../components/Button";


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

    const handleAddHabit = () => {
        console.log("habit button clicked");
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
        const days = getDaysInMonth(newYear, newMonthIndex);

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
        const days = getDaysInMonth(newYear, newMonthIndex);

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
            <table>
                <colgroup></colgroup>
                <thead>
                    <tr>
                        <th rowSpan={2} className="ant-table-cell habit">Habits</th>
                        {
                            days.map(([, weekday], index) => (
                                <th className="ant-weekday" key={index}>
                                    {weekday}
                                </th>
                            ))
                        }
                        <th rowSpan={2} className="ant-table-cell goal">Goal</th>
                        <th rowSpan={2} className="ant-table-cell arch">Achieved</th>
                    </tr>
                    <tr>
                        {
                            days.map(([day,], index) => (
                                <th className="ant-number-day" key={index}>
                                    {day}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={new Date(year, month+1, 0).getDate() + 3}>
                            <div className="ant-create-habit">
                                <text>Create your first habit by clicking on + New Habit </text>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="btn-container">
                <Button onClick={handleAddHabit} name="New Habit"/>
            </div>
        </div>
  )
}
