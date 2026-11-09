import { useState , useEffect } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => {
        console.log("2 saniyə keçdi");
      }, 2000);

      return () => {
        clearTimeout(timeout);
        console.log("Timeout silindi");
      };
    }
  }, [show]);

  return(
    <div>
      {show && <h1 className='hade'>Gizlet butonuna klik edende men gizlenecem</h1>}

      <h1>{show ? " Mətn Görünür" : "Mətn Gizledildi"}</h1>
      <button onClick={()=>setShow(!show)}>
        {show ? "Gizlət" : "Göstər"}
      </button>
    </div>
  );
}

export default App;