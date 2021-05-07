import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const SubMenu = () => {
  const [columns, setColumns] = useState('col-2')
  const {
    isSunMenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext()
  const container = useRef(null)

  useEffect(() => {
    setColumns(`col-2`)
    const subMenu = container.current
    const { center, bottom } = location
    subMenu.style.left = `${center}px`
    subMenu.style.top = `${bottom}px`

    if (links.length === 3) {
      setColumns(`col-3`)
    }
    if (links.length > 3) {
      setColumns(`col-4`)
    }
  }, [location, links])

  return (
    <aside className={`submenu ${isSunMenuOpen && `show`}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, i) => {
          const { label, icon, url } = link
          return (
            <a href={url} key={i}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default SubMenu
