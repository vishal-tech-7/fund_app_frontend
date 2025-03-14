import React, { useState, useEffect, useRef } from 'react'
import { Bell, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext' 

const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { logout } = useAuth() 
  const navigate = useNavigate()

  
  const dropdownRef = useRef(null)

  const handleLogout = () => {
    
    localStorage.removeItem('authToken')
    logout() 

    navigate('/login')
  }

  
  useEffect(() => {
    function handleClickOutside(event) {
     
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="h-16 border-b border-gray-200 flex items-center justify-end px-6">
      <div className="flex items-center space-x-4">
        <Bell className="h-5 w-5 text-gray-500" />

        
        <div className="flex items-center space-x-2 relative" ref={dropdownRef}>
          <div className="text-sm text-gray-700">Edward Hudson</div>

          
          <div
            className="cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <User className="h-8 w-8 text-gray-500" />
          </div>

          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <div className="py-2">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 space-x-2"
                >
                  <User className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Topbar
