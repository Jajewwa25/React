import Contact from "./assets/Contact";
import Hello from "./assets/Hello";

function App() {
  const helloData = [
    {name: 'John', message: 'Hi there'},
    {name: 'Paul', message: 'Hello..'}
  ]
    return(
      <div>
        {helloData.map((data, index) => (
          <Hello key={index} name={data.name} message={data.message} />
        ))}

        <Contact email="Anirach@gmail0com" phone="0972725236" />
      </div>
    );
}

export default App;
