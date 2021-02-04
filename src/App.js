import Navbar from './Navbar'
import Form from './Form'
import PageContent from './PageContent';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';


function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeProvider>
    </div>
  );
}

export default App;
