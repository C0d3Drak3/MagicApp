"use client";
import React, { useState } from "react";
import Navbar from "./navbar/navbar";
import ContainerApi from "./container/containerApi";
import Filter1 from "./filters/filtersTuk";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm: string) => {
    // Realiza alguna acción en el componente Home con el término de búsqueda, si es necesario.
    // Por ejemplo, puedes guardar el término de búsqueda en el estado de Home o realizar alguna otra lógica.
    console.log(searchTerm, "llega a home");
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>

      <main>
        <Filter1 onSearch={handleSearch} />
        <ContainerApi searchTerm={searchTerm} />
      </main>
    </div>
  );
};

export default Home;
