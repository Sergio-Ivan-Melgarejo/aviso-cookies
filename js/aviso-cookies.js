const botonAceptarCookies = document.getElementById("btn-aceptar-cookies");
const avisoCookies = document.getElementById("aviso-cookies");
const fondoCookies = document.getElementById("fondo-aviso-cookies");

const quitarCookies = () => {
    avisoCookies.classList.remove("activo");
    fondoCookies.classList.remove("activo");
}

if(localStorage.getItem("cookies-aceptadas")) quitarCookies();

botonAceptarCookies.addEventListener("click",()=>{
    localStorage.setItem("cookies-aceptadas",true);
    quitarCookies();
})
