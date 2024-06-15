import CategoryCard from './components/CategoryCard';
import categories from "./data/categories.json"


function App() {
  return (
    <main className="App flex flex-col p-4 justify-center items-center ">
      <h2 className='text-4xl text-black font-extrabold '>Shop by Category</h2>

      <div className='flex p-4 gap-5 overflow-hidden '>
        {
          categories.map((items)=>(
            <CategoryCard  categories={items}/>
          ))
        }
        

      </div>
     
    </main>
  );
}

export default App;
