import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "./tableStyle.css";
import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Notes from "../notes/Notes";

const NotesData = {
    Notes: [
        {
            month: "November",
            day: 17,
            description: "azeazeaze",
            year: 2024
        },
        {
            month: "November",
            day: 18,
            description: "azeazeaze",
            year: 2024
        },
        {
            month: "December",
            day: 25,
            description: "Christmas",
            year: 2024
        },
        {
            month: "December",
            day: 31,
            description: "New Year's Eve",
            year: 2024
        }
    ]
}

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
    const [filteredNotes, setFilteredNotes] = useState(NotesData.Notes.filter(note => note.month === monthNames[month] && note.year === year));

    useEffect(() => {
        const filtered = NotesData.Notes.filter(note => note.month === monthNames[month] && note.year === year);
        setFilteredNotes(filtered);
    }, [month, year]);

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
    // TODO: bish n5dim il zyada mta3 Habit fil tableau
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

            <div className="ant-notes">
                <Notes notes={filteredNotes}/>
            </div>
        </div>
  )
}
