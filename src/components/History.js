import React, { useState, useEffect } from 'react';
import CardHistory from './components-ui/CardHistory'

const History = ({ local }) => {
    const [hyst, setHys] = useState(localStorage.history ? JSON.parse(localStorage.history) : [])
    return (
        <div className="historyList">
            {local.slice().reverse().slice(0, 10).map((historique, i) => {
                return <CardHistory ville={historique.ville} key={i} />
            })}
        </div>
    )
}

export default History;