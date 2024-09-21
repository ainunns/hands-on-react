import "./App.css";
import ContactInput from "./containers/ContactInput";
import ContactList from "./containers/ContactList";

function App() {
  return (
    <main className="main__container">
      <h1 className="main__container-heading">Contact Apps</h1>
      <ContactInput />
      <ContactList />
    </main>
  );
}

export default App;
