import { useState } from 'react';
import './App.css'

function App() {

  const [oracion, setOracion] = useState("")

  const handleSubmitEncrypt = (e) => {
    e.preventDefault()
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
      l: '¿l',
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
  };

  return (
    <div className='main'>
      <form onSubmit={handleSubmitEncrypt}>
        <textarea onChange={(e) => setOracion(e.target.value)}></textarea>
        <button type='submit'>Encriptar</button>
      </form>
      {
        oracion ? (
          <p>{oracion}</p>
        ) :
          null
      }
    </div>
  )
}

export default App
