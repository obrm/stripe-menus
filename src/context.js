import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSunMenuOpen, setIsSunMenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({
    page: '',
    links: [],
  })

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openSubMenu = (text, coords) => {
    const page = sublinks.find((link) => link.page === text)
    setPage(page)
    setLocation(coords)
    setIsSunMenuOpen(true)
  }

  const closeSubMenu = () => {
    setIsSunMenuOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSunMenuOpen,
        openSubMenu,
        openSidebar,
        closeSubMenu,
        closeSidebar,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
