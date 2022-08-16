//Kurmuş oldugum modulü buraya dahil edecegim (npm i socket.io-client)
import io from "socket.io-client";

let socket;

export const init = () => {
    console.log("Sunucuya bağlanıyor...")
    //bağlantı saglayacagım yerde kullanacagım backend klasöründe en altta
    // backendimi hangi portta çalıştırdım backend klasöründe npm run start diyerek 3001

    socket = io("http://localhost:3001", {
        transports: ["websocket"],
    });

    socket.on('connect', () =>
        //baglantıyı dinliyorum
        console.log("Sunucuya bağlantı başarılı oldu.")
    );
    //Şimdi gidelim yazmış oldugum bu ffonksiyonu App.js içinde kullanalım
};

//backende veri iletmek
//bir rengi input olacak ve input olarak aktaracak
export const send=(iletilecekcolor)=>{
    socket.emit('newColor',iletilecekcolor);//emit methodu var  clientdaysak backende ---> backenddeysek cliente data aktarımı yapıyor.
    //2 parametre alacak hangi kanala göndereceksin ve data ne ? diye backend app.js içinde nasıl karşılayacagım onu yazmışım nasıl?
//      ---------------------
//     socket.on("newColor", (color) => {
//         //gelen coloru burada karşılamışım newColor adında bana bir renk gelmiş
//         console.log(color);
//
//         lastColor = color;
//         io.emit("receive", color); //backende baglı tüm clientlere bunu iletmişim
//     });
//      ---------------  newCOlor olarak deger bekliyorum o zaman newColor kanalına göndermem lazım ayrıca color diye bir parametre alıyorum

    // şimdi bu fonksiyonumu palet componentinde oluşturarak gönderelim
}

export const subscriber=(cb)=>{ //buraya bir fonksyion geliyor callback fonksiyon cb
    //backend de receive kanalına baglanmak için önce dinlemem gerek (backendimde bunu yazdım zaten)
    socket.on('receive',(gelencolor)=>{
        //buradan bana bir değer gelicek (color)
        console.log(gelencolor);
        cb(gelencolor);

    })
}