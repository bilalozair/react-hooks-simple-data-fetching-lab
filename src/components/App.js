// create your App component here
import React, {useState, useEffect} from "react";


function App() {

    const [image, setImage] = useState(false);
    

    useEffect(() => {
     fetch("https://dog.ceo/api/breeds/image/random")
     .then(resp => resp.json())
     .then (data => setImage(data.message))

  
     }, [])

    return (
        <>
         {image ? <img alt="A Random Dog" src = {image}/> : <p>Loading</p>}
        </>
    )
}

export default App;