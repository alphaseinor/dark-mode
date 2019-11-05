import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('false')

  useEffect(() => {
    const body = document.getElementById("body")
    if(darkMode === 'true'){
      body.className = "dark-mode"
    }else{
      body.className = ""
    }
    return [darkmode, setDarkMode]
  })

}