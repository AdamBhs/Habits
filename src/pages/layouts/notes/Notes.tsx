import Button from "../../../components/Button";
import Note from "../../../components/Note";
import "./styleNotes.css";

export default function Notes() {
    const handleAddNote = () => {
        console.log("add Note button clicked");
    }
    return (
        <div className="notes-container">
            <div className="section one">
                <p>Notes</p>
                <Button onClick={handleAddNote} name="New Note" />
            </div>
            <div className="section two">
                <p>Create your first note by clicking on + New Note</p>
                <Note />
            </div>
        </div>
    )
}
