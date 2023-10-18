import { Link } from "react-router-dom"

const _404 = () => {
  return (
    <div className="full-center flex-col h-screen">
      <p>It appears this page does not exist...</p>
      <p>How about you try <Link to="/" className="text-blue-500 underline">our home page</Link> which definitely does exist.</p>
    </div>
  )
}

export default _404