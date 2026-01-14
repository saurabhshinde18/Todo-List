import Create from "./components/Create";
import Read from "./components/Read"

function App() {
  return (
    <>
      <div className="w-full h-screen flex justify-center gap-[3%] items-center bg-gray-500">
        <Create />
        <Read />
      </div>
    </>
  )
}

export default App
