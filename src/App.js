
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/header/Header';
import JobGrid from './component/JobGrid/JobGrid';
import SearchBar from './component/SearchBar/SearchBar';
function App() {
  return (
    <>
    <div className="App flex-column w-[80%] mx-auto">
    <Header></Header>
    <SearchBar></SearchBar>
    <JobGrid></JobGrid>
    </div>
    <Footer></Footer>

    </>
  );
}

export default App;
