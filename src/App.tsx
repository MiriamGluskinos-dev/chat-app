import '@igds/tokens/lib/index.min.css';
import './App.css'
import ChatWindow from './components/ChatWindow/ChatWindow';
import WelcomeModal from './components/WelcomeModal/WelcomeModal';

function App() {

  return (
    <>
      <WelcomeModal></WelcomeModal>
      <ChatWindow></ChatWindow>
    </>

  )
}

export default App
