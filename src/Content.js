import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handleClick = () => {
        console.log('You clicked it');
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`); // template literal
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }



    return (
        
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}
            </p>
            <button onClick={handleClick}>Click it</button>
            <button onClick={() => handleClick2('Aleksa')}>Click it</button>
            <button onClick={(e) => handleClick3(e)}>Click it</button>
        </main>
        // kod buttona handleClick 2 pozivamo argument name pomocu anonimne funckije a u zagradi dodeljujemo vrednost imena 
    )
}

export default Content
