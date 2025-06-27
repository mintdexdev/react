import React from 'react'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/theme'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  const [currentTheme, setCurrentTheme] = useState('light')

  const lightMode = () => {
    setCurrentTheme("light");
  }
  const darkMode = () => {
    setCurrentTheme("dark");
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(currentTheme);

  }, [currentTheme])


  return (
    <ThemeProvider value={{ currentTheme, lightMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider >
  )
}

export default App