import './App.css'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import RowPost from './components/RowPost/RowPost'
import { actions, originals } from './constants/urls'

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={actions} title='Actions' isSmall />
    </>
  )
}

export default App
