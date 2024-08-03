import EditingArea from "./components/EditingArea"
import PreviewArea from "./components/PreviewArea"

function App() {

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 bg-blue-200 order-2 md:order-1">
        <EditingArea />
      </div>
      <div className="w-full md:w-1/2 bg-red-200 order-1 md:order-2">
        <PreviewArea />
      </div>
    </div>
  )
}

export default App
