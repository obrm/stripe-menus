import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext()

  return (
    <aside className={`sidebar-wrapper ${isSidebarOpen && `show`}`}>
      <div className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item, i) => {
            const { links, page } = item
            return (
              <article key={i}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link, i) => {
                    const { url, label, icon } = link
                    return (
                      <a href={url} key={i}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
