import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-screen flex flex-col [&_*]:[-webkit-tap-highlight-color:transparent]">
      <div className="h-full w-full overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  )
}

export default App
