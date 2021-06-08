import { useState } from 'react'

function Contador() {
    const [contador, setContador] = useState(0);

    function addContador() {
        setContador(contador + 1);
    }

    const button = <button onClick={addContador} children="Clique me" />

    return (
        <div>
            <h2 children={contador} />
            <div children={button} />
        </div>
    );
}

function Home() {
    return (
        <div>
            <h1 children="Hello World" />
            <Contador />
        </div>
    );
}

export default Home;