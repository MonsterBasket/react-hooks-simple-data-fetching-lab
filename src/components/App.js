import { useEffect, useState } from "react";

function App(){
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState("");

    useEffect(_ => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setImage(json.message);
            setLoading(false);
        })
    }, [])

    return <div>
        {loading ? <p>Loading...</p> : null}
        {image ? <img src={image} alt="A Random Dog"></img> : null}
    </div>

}

export default App;