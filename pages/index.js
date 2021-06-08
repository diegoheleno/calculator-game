import { useState } from 'react'

function Contador() {
    const [contador, setContador] = useState(0);

    function addContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <span>
                {contador}
            </span>
            <span>
                <button onClick={addContador} children="Clique me" />
            </span>
        </div>
    );
}

function Home() {
    return <h1>Hello World <Contador /></h1>
}

export default Home;