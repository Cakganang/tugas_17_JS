var satu1 = "Saya beLajar bahaSa peMrograman deNgan khUsuk."
var satu2 = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual";
var dua ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

function upperlower(){
    console.log("tugas 1");
    console.log(satu1.toLowerCase());
    console.log(satu1.toUpperCase());
    console.log(satu2.toLowerCase());
    console.log(satu2.toUpperCase());
}
function KodeAscii(){
    console.log("tugas 2");
    console.log(dua.charCodeAt(0),"-",
    dua.charCodeAt(1),"-",
    dua.charCodeAt(2),"-",
    dua.charCodeAt(3),"-",
    dua.charCodeAt(4),"-",
    dua.charCodeAt(5));
}
upperlower();
KodeAscii();