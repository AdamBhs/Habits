import "./homeStyle.css"
import NavBar from '../layouts/navbar/NavBar'
import Table from "../layouts/tableHabit/Table"

export default function Home() {
  return (
    <div className='container'>
      <NavBar />
      <Table />
    </div>
  )
}
