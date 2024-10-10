function startUp() {
    let lomko = document.getElementById("lomko")
    let liku = document.getElementById("liku")
    let lose = document.getElementById("lose");
    let loert = document.getElementById("loert");
    let us = document.getElementById("us");
    let contact = document.getElementById("contact");
    let accd = document.getElementById("accd")
    let kiju = document.getElementById("kiju");
    let kommot = document.getElementById("kommot")
    let pisrt = document.getElementById("pisrt")
    let moki = document.getElementById("moki");
    
    setTimeout(() => {
        moki.style.display="none"
    },3000);

    pisrt.style.textAlign="center"
    pisrt.style.transition="1s"
         setTimeout(() => {
            pisrt.style.width="100%"
         },100);

        loert.style.transition="1s"


        accd.addEventListener('click',()=>{
            kiju.style.display="flex"
            loert.style.width="0px"
        })
        kommot.addEventListener('click',()=>{
            kiju.style.display="none"
        })
    lose.addEventListener('click',()=>{
        loert.style.widows="0px"
        loert.style.overflow="hidden"
        loert.style.width="0px"
        loert.style.transition="1s"
    })
    liku.addEventListener('click',()=>{
        us.style.display="none"
    })
    lomko.addEventListener('click',()=>{
        loert.style.width="100%"
    })
    contact.addEventListener('click',()=>{
        us.style.display="flex"
        loert.style.width="0px"
    })
}
startUp()