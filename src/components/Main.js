const Main = ({name, goods, qty, increase, index})=>{
    return(
        <main>
          <div>Welcome to {name} page. We sell {qty} {goods} here<button onClick={()=>increase(index)}>increment</button>
                <button>delete</button>
          </div>
          
        </main>
    )
  }
  export default Main;