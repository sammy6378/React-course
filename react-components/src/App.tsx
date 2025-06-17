// import Image from "./components/image"

import Extensions from "./components/Extensions";
import Tabs from "./components/Tabs";


function App() {
  
  return (
    <div className="p-4">
      <Tabs />
      <Extensions activeFilter={"all"} />
    </div>
  );
}

export default App
