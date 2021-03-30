import React, { useState } from 'react'
import ApiMeteo from '../ApiMeteo'

const Home = ({ city, subSearch }) => {
    const [ville, setVille] = useState("netanya");
    if (ville !== city) {
        setVille(city)
    }

    return (
        <>
            <ApiMeteo city={city} subSearch={subSearch} />
        </>
    )
}

export default Home