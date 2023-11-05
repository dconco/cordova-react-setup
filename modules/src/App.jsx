import React, { useState } from 'react'
import './index.css'

function App({ name }) {
    const [num, setNum] = useState(0)
    
    /* All styles defined */
    const styles = {
        div: {
            margin: 10,
            padding: 30,
            color: 'lightblue',
            textAlign: 'center',
            backgroundColor: 'blue'
        },
        h1: {
            color: 'white'
        }
    }
    
    /* Return JSX output to DOM */
    return (
        <>
            <div style={styles.div}>
                <h1 style={styles.h1}>Hello {name}, Welcome to BetLightening Tips!</h1>
            </div>
            
            <br/>
            <button onClick={() => setNum(num+1)}>Click Me: {num}</button>
        </>
    )
}

export default App