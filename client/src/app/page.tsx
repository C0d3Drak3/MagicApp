import Navbar from "./navbar/navbar"
import ContainerApi from "./container/containerApi"
import FilterMenu from "./filters/filters";
import Filter1 from "./filters/filtersTuk";

const Home: React.FC = () => {
  return (
    
    <div>
      <header>
        <nav>
          <Navbar/>
        </nav>
      </header>
      
      <main>
        <Filter1/>
        <ContainerApi/>
      </main>
    </div>
    
  )
}

export default Home;