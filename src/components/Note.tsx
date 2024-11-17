import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";

interface NoteProps {
    dateNote: string;
    description: string;
}

export default function Note({dateNote, description}: NoteProps) {
  return (
    <div className="note-container">
        <h5 className="date-note">
             {dateNote}
        </h5>
        <p className="note-description">{description}</p>

        <div className="update-del-icons">
          <FaRegPenToSquare className="icon"/>
          <FaRegTrashCan className="icon"/>
        </div>
    </div>
  )
}
