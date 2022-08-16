//Renkleri seçip butona basacagımız component
import React,{useState} from 'react';
import {send} from "../socketApi"; //fonksiyonumu kullanmak için buraya import ettim
//GÖNDECEGİM AMA önce rengi bilmem lazım bir state oluşturuoyrum rengimi alalaıom



function Palatte(props) {
    const [color,setColor]=useState('#0000');//başlangıcta default 0000 siyah olsun olsun
    // butona basıldıktan sonra rengi backende göndermem lazım
    const {activeColor}=props;
    return (
        <div className="pallette">
            Palet
        <input type="color"
               value={activeColor}
               onChange={(e)=>setColor(e.target.value)}
        />
        <h2>
            {
                activeColor
            }</h2>
        <button onClick={()=>send(color)}>Tüm kullancılara güncelleClick</button>

        </div>
    );
}

export default Palatte;