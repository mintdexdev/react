import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  /* useState */
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("randompassword")

  /* useRef */
  const passwordRef = useRef(null)

  /* useCallback */
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdfeghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*-_+=()[]{}";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str[index];
      // pass += str.charAt(index);
    }
    setPassword(pass)
  },
    [length, numberAllowed, characterAllowed, setPassword]
  )

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password)
  }, [password])

  /* useEffect */
  useEffect(() => passwordGenerator(), [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <div className='bg-neutral-200/5 w-[400px] my-[5rem] mx-auto p-5
      flex flex-col gap-4 items-center justify-center
      rounded-xl'>
      <h1 className='text-4xl text-center'>Password Generator</h1>
      <div className='bg-neutral-200/5 w-full p-4 flex flex-col gap-2 rounded-xl'>
        <div>
          <label className='mr-4'>length: {length}</label>
          <input
            onChange={(e) => { setLength(e.target.value) }}
            type="range"
            min={8} max={50}
            value={length}
          />
        </div>
        <div className='flex gap-4'>
          <div>
            <label className='mr-2'>Numbers: </label>
            <input
              onChange={() => setNumberAllowed(prev => !prev)}
              defaultChecked={numberAllowed}
              type="checkbox"
              id="numbersAllowed"
            />
          </div>
          <div>
            <label className='mr-2'>characters:</label>
            <input
              onChange={() => setCharacterAllowed(prev => !prev)}
              type="checkbox"
              id="numbersAllowed"
            />
          </div>
        </div>
        <div className='flex justify-center gap-4'>

          <button onClick={passwordGenerator}
            className='bg-neutral-200/10 w-fit px-4 py-2 rounded-xl'
          >Generate</button>
        </div>

      </div>
      <div className='flex w-full rounded-xl overflow-hidden'>
        <input
          ref={passwordRef}
          type="text"
          value={password}
          className='bg-neutral-200 text-neutral-800 font-semibold w-full p-2 '
          placeholder='password'
          readOnly
        />
        <button
          onClick={copyToClipboard}
          className='bg-blue-500 w-fit p-2 hover:bg-blue-500/80 transition-colors'
        >Copy</button>
      </div>

    </div>
  )
}

export default App