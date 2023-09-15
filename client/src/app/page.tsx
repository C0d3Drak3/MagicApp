import Navbar from "./navbar/navbar"
import ContainerApi from "./container/containerApi"
import FilterMenu from "./filters/filters";

const Home: React.FC = () => {
  return (
    
    <div>
      <header>
        <nav>
          <Navbar/>
        </nav>
      </header>
      
      <main>
        <FilterMenu/>
        <ContainerApi/>
      </main>
    </div>
    
  )
}

export default Home;