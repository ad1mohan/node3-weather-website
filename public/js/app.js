console.log("Heloo from client side")


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg = document.querySelector('#msg')


weatherForm.addEventListener('submit',(e)=>
{
    e.preventDefault()
    const loc = search.value
    
    fetch('/weather?address='+loc).then((response)=>{
        response.json().then((data)=>{
            // console.log(data)
            msg.textContent = data.msg
        })
    })
    
})