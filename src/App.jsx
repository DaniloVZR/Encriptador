import { useState } from 'react';
import './App.css';

function App() {
  const [oracion, setOracion] = useState('');
  const [isEncrypted, setIsEncrypted] = useState(false);

  const letterMapping = {
    a: '%¡',
    b: '%"',
    c: '%@',
    d: '%$',
    e: '&¡',
    f: '&"',
    g: '&@',
    h: '&#',
    i: '&$',
    j: '¿¡',
    k: '¿"',
    l: '¿@',
    m: '¿$',
    n: '?¡',
    ñ: '?"',
    o: '?@',
    p: '?#',
    q: '?$',
    r: '*¡',
    s: '*"',
    t: '*@',
    u: '*#',
    v: '*$',
    w: '-¡',
    x: '-"',
    y: '-@',
    z: '-#',
    // Add mappings for other letters as needed
  };

  const encryptOracion = () => {
    const encryptedOracion = oracion
      .split('')
      .map((char) => {
        const lowercaseChar = char.toLowerCase();
        if (lowercaseChar in letterMapping) {
          return letterMapping[lowercaseChar];
        } else {
          return char;
        }
      })
      .join('');

    setOracion(encryptedOracion);
    setIsEncrypted(true);
  };

  const decryptOracion = () => {
    let decryptedOracion = oracion;
    for (const [key, value] of Object.entries(letterMapping)) {
      decryptedOracion = decryptedOracion.split(value).join(key);
    }

    setOracion(decryptedOracion);
    setIsEncrypted(false);
  };

  return (
    <div className="main">
      <textarea onChange={(e) => setOracion(e.target.value)}></textarea>
      <div className="button-container">
        <button onClick={encryptOracion}>Encriptar</button>
        <button onClick={decryptOracion}>Desencriptar</button>
      </div>
      {oracion && <p>{oracion}</p>}
    </div>
  );
}

export default App;