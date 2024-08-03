import EditingArea from "./components/EditingArea"
import PreviewArea from "./components/PreviewArea"

function App() {

  return (
    <div className='flex flex-row '>
      <PreviewArea />

      <EditingArea />
    </div>
  )
}

export default App
