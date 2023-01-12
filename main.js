let form=document.querySelector("form")
let input=document.querySelector("input")
let image=document.querySelector("img")
let select=document.querySelector("select")


async function qrSet(e){
    e.preventDefault()
    let text=input.value
    let size=select.value
    let res= await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${text}`)
    let qr=res.url
    image.setAttribute("src",qr)
}

form.addEventListener("submit", qrSet )



// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example



