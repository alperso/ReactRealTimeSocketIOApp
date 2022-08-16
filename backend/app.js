const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http); //nodejs üzerinde modül olan socketio ile bu backend çalıştıracagım
//realtime işleri yapmamızı saglıyor bende güncelleme olursa diğer clientlerde de aynı işlem olsun diye düşünebiliriz.
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.send("hello");
});

let lastColor = "#282c34"; //default color

io.on("connection", (socket) => {
    //connection gerçekleştiği anda logluyorum
    console.log("bir kullanıcı bağlandı!");

    socket.emit("receive", lastColor);//bu kanala baglanmak için kanaldır ->herhangi bir client dan butona basıldıgı anda
    //renk kodu iletildiği anda aktarmışım
    socket.on("newColor", (color) => {
        //gelen coloru burada karşılamışım newColor adında bana bir renk gelmiş
        console.log(color);

        lastColor = color;
        io.emit("receive", color); //backende baglı tüm clientlere bunu iletmişim
    });

    socket.on("disconnect", () => {
        console.log("Bir kullanıcı ayrıldı.");
    });
});

http.listen(3001, () => console.log("Server is up 🚀 🚀"));