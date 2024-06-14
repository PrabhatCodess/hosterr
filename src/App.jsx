import Foot from "./components/Foot"
import Head from "./components/Head"
import Middle from "./components/Middle"



function App() {
  

  return (
    <>
   <div className="bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:py-10 2xl:px-20 2xl:py-12">
  
  <Head/>
  <Middle/>
  <Foot/>




   </div>
   </>
  )
}

export default App
