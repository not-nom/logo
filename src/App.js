import { useEffect, useState } from "react";
import ItemList from "./Components/ItemsList/ItemList";
import ModalWindow from "./Components/ModalWindow/ModalWindow";

export default function App() {
  const [mWURL, mWURLS] = useState(false)
  useEffect(() => {console.log(mWURL)}, [mWURL])
  return (
    <div>
        <ItemList fnSt={mWURLS}/>
        {mWURL && <ModalWindow pURL={mWURL} fnSt={mWURLS}/>}
    </div>    
  )
}
