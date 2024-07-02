const cajaOferta = document.getElementById("oferta")
const imgBomba = document.getElementById("bomba")
const imgExplosion = document.getElementById("explosion")
const btnNos = document.getElementById("nosotros")
const nosTxt = document.getElementById("nosotrostxt")
const principal = document.getElementById("principal")
const btnNuestras = document.getElementById("nuestras")
sessionStorage.setItem("user", "admin")
console.log()
const direccion = "http://" +location.hostname + "8080"
function verPrincipal() {
    nosTxt.classList.add("d-none")
    principal.classList.remove("d-none")
}

function verNosotros() {
    nosTxt.classList.remove("d-none")
    principal.classList.add("d-none")
}

const botonesNav = document.getElementsByClassName("navbar-nav")

for (let boton of botonesNav) {

    const links = boton.getElementsByClassName("nav-link")

    for (let link of links) {


        if (link.getAttribute("href") == "#nosotrostxt") {
            link.addEventListener("click", function () {
                verNosotros()
            })
        }
        else {
            link.addEventListener("click", function () {
                verPrincipal()
            })

        }


    }



}

cajaOferta.addEventListener("mouseover", function () {

    //alert("alalalalala");
    imgBomba.classList.add("d-none")
    imgExplosion.classList.remove("d-none");
})
cajaOferta.addEventListener("mouseout", function () {

    // alert("alalalalala");
    imgExplosion.classList.add("d-none")
    imgBomba.classList.remove("d-none");
})




// CARGO CARDS
const cardCont = document.getElementById("card-cont")

fetch("http://127.0.0.1:8080/motos")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.body.forEach(d => {

            cardCont.innerHTML += `<div class="card bg-transparent border-0" style="width: 18rem;">
                                           <img src="/IMG/${d.foto}" class="card-img-top" alt="...">
                                           <div class="card-body">
                                             <span class="badge rounded-pill bg-warning w-25 ">Naked</span>
                                             <h5 id="1" class="card-title">${d.modelo}</h5>
                                             <p class="card-text ">${d.descripcion}</p>
                                             <div class="border border-black mb-2"> </div>
                                             <div class="d-flex justify-content-around align-items-center">
                                               <span class="fw-bolder">Precio $ </span><span class="fs-5">${d.precio}</span>
                                             </div>
                                             <a id="boton" class="btn btn-primary w-100">Consultar</a>
                                           </div>
                                   </div>`
        });

        const botonesCard = document.getElementsByClassName("card-body")

        for (let boton of botonesCard) {
            boton.getElementsByClassName("btn")[0].innerText = "MAS INFO"
            boton.getElementsByClassName("btn")[0].addEventListener("click", function () {
                var cajatexto = document.getElementById("con-form");
                var epadre = boton.getElementsByClassName("btn")[0].parentElement;
                var nombreMoto = epadre.getElementsByClassName("card-title")[0].textContent
                cajatexto.value = "QUIERO MAS INFO SOBRE " + nombreMoto
              //  alert(nombreMoto)
              // document.getElementById('ayn').focus()

            }
            )
        }



    })


// FUNCION ENVIAR 

const form_con = document.getElementById("form-con")

form_con.addEventListener('submit', (e) => {
    
     e.preventDefault()  
     e.stopPropagation()   
     
     enviarForm()
     
 
 })



const enviarForm = async () => {
    const nya = document.getElementById('ayn')
    const correo = document.getElementById('correo')
    const consulta = document.getElementById('con-form')
    
   
    const datos = {
        nya: nya.value,
        correo: correo.value,
        consulta: consulta.value,
       
    }

    const respuesta = await fetch("http://127.0.0.1:8080/form", {
        method: "POST",
        headers: {
           "Content-Type": "application/json",
        },
        body:JSON.stringify(datos),
    })
    
    mensajeModal(respuesta.status)
   // alert(respuesta.status)

}

function mensajeModal (respuesta){
    let mensaje = "Error al enviar el formulario"

    if (respuesta == '200'){
                mensaje ="Gracias por su Consulta"
    }

   document.body.innerHTML += `
                              <div id="mimodal" data-bs-backdrop="static" data-bs-keyboard="false" class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                               <div class="modal-dialog modal-sm">
                                 <div class="modal-content text-center p-5 fw-bolder fs-3">
                                    ${mensaje}
                                  </div>
                                </div>
                              </div>
                              `
    let mimodal2 = new bootstrap.Modal(document.getElementById('mimodal'), { backdrop: true, keyboard: false })
    mimodal2.show()

}


