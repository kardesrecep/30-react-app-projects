import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import { ThemeContext,themes } from './context/ThemeContext'




const LightDarkMode = () => {
    const [theme, setTheme] = useState(themes.light)
const changeTheme = () => { 
   theme===themes.light  ?  setTheme(themes.dark) : setTheme(themes.light)

}
useEffect(() => {
  switch(theme){
    case themes.light:
        document.body.classList.remove('bg-dark')
        document.body.classList.remove('text-light')
        
        document.body.classList.add('bg-light')
        document.body.classList.add('text-dark')
        break;
    case themes.dark:
        document.body.classList.remove('bg-light')
        document.body.classList.remove('text-dark')
        document.body.classList.add('bg-dark')
        document.body.classList.add('text-light')
        break;
        default:
        break;
  }

 
}, [theme])


  return (
    <ThemeContext.Provider value={{theme,changeTheme}} >
        <Blog theme={"light"}  />
    </ThemeContext.Provider>
  )
}

export default LightDarkMode