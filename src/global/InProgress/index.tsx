import { Link } from "react-router-dom"

const InProgress = () => {
  return (
    <div className="full-center flex-col">
      <p>This page is still in progress.</p>
      <p>But you can always find your way back <Link to="/" className="text-blue-500 underline">home</Link></p>
    </div>
  )
}

export default InProgress