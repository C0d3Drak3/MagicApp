"use client";
import React, { useState } from 'react';


const styles = {
  navbar: 'bg-[#110F02] p-4',
  container: 'container mx-auto flex items-center justify-between',
  logo: 'text-white text-2xl font-semibold',
  search: 'flex items-center space-x-2 rounded-full bg-white p-2',
  searchIcon: 'w-6 h-6 text-blue-500',
  searchInput: 'border-none focus:outline-none bg-transparent',
  menu: 'flex items-center justify-between',
  menuButton: 'text-white focus:outline-none md:hidden',
  menuIcon: 'w-6 h-6',
  menuList: 'md:flex md:space-x-4',
  menuItem: 'text-white hover:text-blue-300',
  gif: 'w-480 h-480 block ',
};

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const performSearch = () => {
    // Aquí puedes manejar la búsqueda y enviar los datos al componente de búsqueda en tiempo real
    console.log('Realizar búsqueda con:', searchTerm);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>         
        <div className={styles.logo}>MagicApp</div>
        <div className={styles.search}>
          <svg
            className={styles.searchIcon}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M11 21s4.5-6 7-10c2.5-4-1-10-1-10s-7.5 5-10 10a9.956 9.956 0 0010 10z"
            />
          </svg>
          <input
            type="text"
            placeholder="Card Name..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                performSearch(); // Llama a la función de búsqueda cuando se presiona Enter
              }
            }}
          />
          <button onClick={performSearch} className="bg-[#726379] text-white rounded-full p-2">Search</button>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuButton}>
            <button onClick={toggleMobileMenu} className={styles.menuButton}>
              <svg
                className={styles.menuIcon}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
          <ul className={`${styles.menuList} ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <li><a href="#" className={styles.menuItem}>Buscar</a></li>
            <li><a href="#" className={styles.menuItem}>Agregar</a></li>
            <li><a href="#" className={styles.menuItem}>Sobre nosotros</a></li>
            <li><a href="#" className={styles.menuItem}>Contacto</a></li>
          </ul>
        </div>     
      </div>
    </nav>
  );
}

export default NavBar;
