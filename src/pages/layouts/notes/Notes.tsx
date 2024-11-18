import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Note from "../../../components/Note";
import "./styleNotes.css";


interface NoteTypes {
    month: string;
    day: number;
    description: string;
    year: number;
}

interface NotesProps {
    notes: NoteTypes[]; 
}

export default function Notes({notes}: NotesProps) {
    const now = new Date();

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const [notesList, setNotes] = useState<NoteTypes[]>(notes);

    useEffect(() => {
        setNotes(notes)
    }, [notes]);

    const handleAddNote = () => {
        console.log("add Note button clicked");
        const month = monthNames[now.getMonth()];
        const year  = now.getFullYear();
        const day = now.getDate();

        const newNote: NoteTypes = {
            month,
            day,
            description: "good", 
            year
        };

        setNotes((prevNotes) => [...prevNotes, newNote]);
    }

    return (
        <div className="notes-container">
            <div className="section one">
                <p>Notes</p>
                <Button onClick={handleAddNote} name="New Note" />
            </div>
            <div className="section two">
                <p>Create your first note by clicking on + New Note</p>
                {
                    notesList.map((note) => (
                        <Note dateNote={note.day +' '+ note.month +' '+note.year}
                            description={note.description}
                        />
                    ))
                }
            </div>
        </div>
    )
}
