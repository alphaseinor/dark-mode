import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('false')

  useEffect(() => {
    if(darkMode === 'true'){
      document.body.classList.add("dark-mode")
      console.log("darkmode")
    }else{
      document.body.classList.remove("dark-mode")
      console.log("not darkmode")
    }
  }, [darkMode])

  return [darkMode, setDarkMode]
}