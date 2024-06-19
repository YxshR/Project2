import './App.css';
import ContactHeader from './Compound/Contact/ContactHeader';
import Contactform from './Compound/Contactform/Contactform';
import Navi from './Compound/Navigation/Navi';

function App() {

  return (
    <div>
      <Navi />
      <main className="main_container">
      <ContactHeader />
      <Contactform />
      </main>

    </div>
  )
}

export default App;
