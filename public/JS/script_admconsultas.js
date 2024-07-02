const tablita = document.getElementById('t-body')

async function cargar2() {
   const resp = await fetch('http://127.0.0.1:8080/form')
   const data = await resp.json()
   //console.log(data.body)
   return data.body
}

const prueba2 = cargar2()
console.log(prueba2)

function cargar() {
   fetch('http://127.0.0.1:8080/form')
      .then(response => response.json())
      .then(data => {
         tablita.innerHTML = ""
         //  console.log(data.body)

         data.body.forEach(d => {

            tablita.innerHTML += ` 
              <tr> 
                  <td scope="row">${d.id_consulta}</td>
                  <td>${d.nya}</td>
                  <td class="text-wrap">${d.correo}</td>
                  <td class="text-wrap">${d.consulta}</td>
                  <td><div class=" d-flex gap-3"> <a title="ACTUALIZAR" id="${d.id_consulta}" class="u link-body-emphasis" href=""><svg class="bi actualizar" width="18" height="18">
                  <use xlink:href="../bootstrap-icons.svg#pencil-square"></use>
                  </svg></a>
                  <a title="ELIMINAR" id="${d.id_consulta}" class="b link-body-emphasis" href=""><svg class="bi borrar" width="18" height="18">
                  <use xlink:href="../bootstrap-icons.svg#x-lg"></use>
                  </svg></a></div></td>
              </tr>`

         });

         tablita.innerHTML += '<p class="fw-bolder border border-primary text-center"> TOTAL DE REGISTROS ' + data.rows + '</p>'
         let boton = document.getElementsByClassName("b link-body-emphasis")
         for (let b of boton) {
            // alert(b.id)
            b.addEventListener('click', (e) => {
               e.preventDefault()
               const direcion = 'http://127.0.0.1:8080/form/BORRAR/' + b.id
               fetch(direcion, {
                  method: 'DELETE',
               })
                  .then(res => res.json()) // or res.json()
                  .then(res => {
                     console.log(res)
                     cargar()
                     modal("SE BORRO REGISTRO N° " + res.id)
                  })


            })



         }
         let boton2 = document.getElementsByClassName("u link-body-emphasis")
         for (let b of boton2) {
            // alert(b.id)
            b.addEventListener('click', (e) => {
               e.preventDefault()
               const direcion = 'http://127.0.0.1:8080/form/leido/' + b.id
               fetch(direcion, {
                  method: 'put',
               })
                  .then(res => res.json()) // or res.json()
                  .then(res => {
                     console.log(res)
                     cargar()
                     modal("SE MARCO COMO LEIDO REGISTRO N° " + res.id)
                  })


            })



         }
         /* boton.addEventListener('click', (e)=>{
                 e.preventDefault() 
                 const direcion = 'http://127.0.0.1:8080/form/BORRAR/' + d.id_consulta 
                 alert(direcion)
                 fetch(direcion , {
                    method: 'DELETE',})
                 .then(res => res.json()) // or res.json()
                 .then(res => console.log(res))
                 

          })*/


      })
}


function modal(mensaje) {
   tablita.innerHTML += `
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

cargar()