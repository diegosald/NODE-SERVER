const modelo = document.getElementById('modelo')
const descri = document.getElementById('descri')
const precio = document.getElementById('precio')
const foto = document.getElementById('foto')

const verTodo = async function () {
    const result = await fetch("../motos/")
    const data = await result.json()
    console.log(result.status)
    const tablita = document.getElementById('t-body')
    tablita.innerHTML = ""
    data.body.forEach(d => {

        tablita.innerHTML += ` 
              <tr> 
                  <td scope="row">${d.id_moto}</td>
                  <td>${d.modelo}</td>
                  <td class="text-wrap">${d.descripcion}</td>
                  <td class="text-wrap">${d.precio}</td>
                  <td class="text-wrap"><img src="../IMG/${d.foto}" alt="" style="width:200px;"></td>
                  <td><div class=" d-flex gap-3"> <a title="ACTUALIZAR" id="${d.id_moto}" class="u link-body-emphasis" href=""><svg class="bi actualizar" width="18" height="18">
                  <use xlink:href="../bootstrap-icons.svg#pencil-square"></use>
                  </svg></a>
                  <a title="ELIMINAR" id="${d.id_moto}" class="b link-body-emphasis" href=""><svg class="bi borrar" width="18" height="18">
                  <use xlink:href="../bootstrap-icons.svg#x-lg"></use>
                  </svg></a></div></td>
              </tr>`

    });

    let boton = document.getElementsByClassName("b link-body-emphasis")
    for (let b of boton) {
        // alert(b.id)
       /* b.addEventListener('click',*/
        b.onclick = (e) => {
            e.preventDefault()
            e.stopPropagation()
            const direcion = '../motos/BORRAR/' + b.id
            fetch(direcion, {
                method: 'DELETE',
            })
                .then(res => res.json()) // or res.json()
                .then(res => {
                    const borrado = res.id
                    modal("SE BORRO REGISTRO N° " + borrado)
                    verTodo()
                    console.log(res.id)
                    //modal("SE BORRO REGISTRO N° " + borrado)
                })


        }//)
    }
    let boton2 = document.getElementsByClassName("u link-body-emphasis")
    for (let b of boton2) {
        // alert(b.id)
        b.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            const direcion = '../motos/' + b.id
            fetch(direcion, {
                method: 'GET',
            })
                .then(res => res.json()) // or res.json()
                .then(res => {
                    console.log(res.body)
                    const id_moto = res.body[0].id_moto
                    const foto = res.body[0].foto
                    modelo.value = res.body[0].modelo
                    descri.value = res.body[0].descripcion
                    precio.value = res.body[0].precio
                    modalcarga.show()
                    const enviarMoto = document.getElementById("enviarMoto");
                   // enviarMoto.removeEventListener('click',"")
                    enviarMoto.onclick = (e) => { updateMoto(id_moto, foto)}
                   /* enviarMoto.addEventListener('click', (e) => {
                        // e.preventDefault();
                        updateMoto(id_moto, foto);

                    })*/





                })


        })
    }

    document.getElementById("nuevaMoto").addEventListener("click", (e) => {
        e.preventDefault()
        e.stopPropagation()
        limpiarForm()
        modalcarga.show()
        const enviarMoto = document.getElementById("enviarMoto");
        enviarMoto.onclick =  cargarMoto
        
    })
  
}

verTodo()


//MODAL PARA VER INFO
function modal(mensaje) {

    document.body.innerHTML += `
                               <div id="mensaje" data-bs-backdrop="static" data-bs-keyboard="false" class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-sm">
                                  <div class="modal-content text-center p-5 fw-bolder fs-3">
                                     ${mensaje}
                                   </div>
                                 </div>
                               </div>
                               `
    let mimodal2 = new bootstrap.Modal(document.getElementById('mensaje'), { backdrop: true, keyboard: false })
    mimodal2.show()
}
// FIN DE MODAL

// CARGAR LA MOTO
let modalcarga = new bootstrap.Modal(document.getElementById('modalcarga'), { backdrop: true, keyboard: false })
async function cargarMoto() {
     console.log("CARGA NUEVA MOTO")

    const datos_form = new FormData();

    datos_form.append("modelo", modelo.value);
    datos_form.append("descri", descri.value);
    datos_form.append("precio", precio.value)
    datos_form.append("uploaded_file", foto.files[0])

    const resp = await fetch('../motos/', {
        method: "POST",
        body: datos_form,
    })

    if (resp.status == "200") {
        modalcarga.hide()
        modelo.value = null
        descri.value = null
        precio.value = null
        foto.value = null
        verTodo()
    }

}

/*document.getElementById("nuevaMoto").addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    modalcarga.show()
    const enviarMoto = document.getElementById("enviarMoto");
    enviarMoto.onclick =  cargarMoto
    
})*/


//FIN CARGAR LA MOTO
//ACTUALIZAR MOTO 
async function updateMoto(id_moto, foto_ant) {
    console.log("ACTUALIZAR NUEVA MOTO")

    const datos_form = new FormData();

    datos_form.append("modelo", modelo.value);
    datos_form.append("descri", descri.value);
    datos_form.append("precio", precio.value);
    datos_form.append("fotoant", foto_ant)
    datos_form.append("uploaded_file", foto.files[0])

    const resp = await fetch('../motos/ACTUALIZAR/' + id_moto, {
        method: "PUT",
        body: datos_form,
    })

    if (resp.status == "200") {
        modalcarga.hide()
        modelo.value = null
        descri.value = null
        precio.value = null
        foto.value = null
        verTodo()

    }

}

function limpiarForm(){
        modelo.value = null
        descri.value = null
        precio.value = null
        foto.value = null
}