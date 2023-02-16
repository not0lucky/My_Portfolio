import FullPageScroll from "./FullPageScroll"
import { About, Header, Hero, Skills, Work } from "./components"
import styled from "styled-components"

function App() {

  return (
    <>
    <Layout>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
    </Layout>
        
    </>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  @media (max-width: 1200px) {
    width: 100vw;
    gap: 100px;
  }
`


export default App
