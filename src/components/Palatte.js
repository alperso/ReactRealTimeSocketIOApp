//Renkleri seçip butona basacagımız component
import React from 'react';

function Palatte(props) {
    return (
        <div className="pallette">
            Palet
        <input type="color"/>
        <button>Tüm kullancılara güncelleClick</button>
        </div>
    );
}

export default Palatte;