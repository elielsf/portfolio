import Header from "./components/header/Header"
import styles from './App.module.css';
import Body from './components/body/Body'

function App() {
  return (
    <div className={styles.container}>
      <Header/>
      <Body/>
    </div>
  )
}

export default App
