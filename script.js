const seccionBatalla = document.getElementById('campo-batalla');
const msjBatalla = document.getElementById('msj-batalla');
const imgAtaqueJugador = document.getElementById('img-ataque-jugador');
const imgAtaquePc = document.getElementById('img-ataque-pc');
const btnPiedra = document.getElementById('btn-piedra');
const btnPapel = document.getElementById('btn-papel');
const btnTijeras = document.getElementById('btn-tijeras');

let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;


const imagenes = [{
        name: "Piedra",
        url: "./img/hand_9534498.png"
    },
    {
        name: "Papel",
        url: "./img/spock_9534504.png"
    },
    {
        name: "Tijeras",
        url: "./img/scissors_9534501.png"
    }
];



function iniciar() {
    seccionBatalla.style.display = 'none';
};

btnPiedra.addEventListener('click', function() {
    opcionJugador = "Piedra";
    opPc();
});

btnPapel.addEventListener('click', function() {
    opcionJugador = "Papel";
    opPc();
});

btnTijeras.addEventListener('click', function() {
    opcionJugador = "Tijeras";
    opPc();
})


function opPc() {
    var aleaorio = nAleatorio();

    if (aleaorio == 0) {
        opcionPc = "Piedra";
    } else if (aleaorio == 1) {
        opcionPc = "Papel";
    } else if (aleaorio == 2) {
        opcionPc = "Tijeras"
    };

    batalla();

};

function batalla() {

    if (opcionJugador == opcionPc) {
        msjBatalla.innerHTML = "Empate";
        document.getElementById('img2').style.display = 'inline';
        imgAtaqueJugador.style.display = "inline";
        imgAtaquePc.style.display = "inline";

    } else if (opcionJugador == "Piedra" && opcionPc == "Tijeras") {
        msjBatalla.innerHTML = "Ganaste";
        document.getElementById('img1').style.display = 'inline';
        imgAtaqueJugador.style.display = "inline";
        imgAtaquePc.style.display = "inline";
    } else if (opcionJugador == "Papel" && opcionPc == "Piedra") {
        msjBatalla.innerHTML = "Ganaste";
        document.getElementById('img1').style.display = 'inline';
        imgAtaqueJugador.style.display = "inline";
        imgAtaquePc.style.display = "inline";

    } else if (opcionJugador == "Tijeras" && opcionPc == "Papel") {
        msjBatalla.innerHTML = "Ganaste";
        document.getElementById('img1').style.display = 'inline';
        imgAtaqueJugador.style.display = "inline";
        imgAtaquePc.style.display = "inline";
    } else {
        msjBatalla.innerHTML = "Perdiste";
        document.getElementById('img3').style.display = 'inline';
        imgAtaqueJugador.style.display = "inline";
        imgAtaquePc.style.display = "inline";
    };

    addImagenes();
    setTimeout(() => {
        msjBatalla.innerHTML = "";
        document.getElementById('img1').style.display = 'none';
        document.getElementById('img2').style.display = 'none';
        document.getElementById('img3').style.display = 'none';
        imgAtaqueJugador.style.display = "none";
        imgAtaquePc.style.display = "none";

    }, 1500);


}



function nAleatorio() {
    let n = Math.floor(Math.random() * 3);
    return n;
}


function addImagenes() {
    imgAtaqueJugador.innerHTML = "";
    imgAtaquePc.innerHTML = "";

    for (let i = 0; i < imagenes.length; i++) {
        if (opcionJugador == imagenes[i].name) {
            imgJugador = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
            imgAtaqueJugador.innerHTML = inserta;
        };

        if (opcionPc == imagenes[i].name) {
            imgPc = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
            imgAtaquePc.innerHTML = inserta;
        };
    };


    const btnReiniciar = document.getElementById('btnReiniciar');
    btnReiniciar.addEventListener('click', reiniciar);

    function reiniciar() {
        opcionJugador = null;
        opcionPc = null;
        imgJugador = null;
        imgPc = null;

        for (let i = 1; i <= 3; i++) {
            document.getElementById('img' + i).style.display = 'none';
        }

        seccionBatalla.style.display = 'none';
        msjBatalla.innerHTML = "";

        // Elimina las imágenes de ataque del jugador y PC
        imgAtaqueJugador.innerHTML = "";
        imgAtaquePc.innerHTML = "";
        seccionBatalla.style.display = 'none';
        msjBatalla.innerHTML = "";
    }


    seccionBatalla.style.display = 'flex';

};


window.addEventListener('load', iniciar);