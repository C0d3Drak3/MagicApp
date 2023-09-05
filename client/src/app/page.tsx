import Navbar from "./navbar/navbar"
import ContainerBd from "./container/containerBd"
import ContainerApi from "./container/containerApi"

export default function Home() {
  return (
    
      <div>
      <header>
        <nav>
          <Navbar/>
        </nav>
      </header>
      
      <main>
        <ContainerApi/>
        <ContainerBd/>
      </main>

    </div>
    
  )
}
