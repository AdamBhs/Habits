import "./homeStyle.css"
import NavBar from '../layouts/navbar/NavBar'
import Table from "../layouts/tableHabit/Table"
import Notes from "../layouts/notes/Notes"

export default function Home() {
  return (
    <div className='container'>
      <NavBar />
      <Table />
      <div className="ant-notes">
        <Notes />
      </div>
    </div>
  )
}
