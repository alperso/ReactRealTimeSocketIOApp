import './App.css';
import {useEffect,useState} from "react";
import Palatte from "./components/Palatte";
import {init,subscriber} from "./socketApi";


function App() {
    const [activeColor,setActiveColor]=useState('#282c34'); //default color backend dekini yazdım
    useEffect(()=>{
        //componentdidmount anında gittim socket io baglandım
        init();
        subscriber((color)=>{ //bu metoda ben bir fonksiyon gönderdim
            setActiveColor(color)
        });//subscriberden veri(color datası) clienta düştüğünde ben bu rengi alıp backgrounda yazmam gereklidir.

    },[])
    return (
        <div className="App" style={{backgroundColor:activeColor}}>
            <Palatte
                activeColor={activeColor}
            />
        </div>
    );
}

export default App;
