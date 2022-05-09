console.log("Heloo from client side")


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg = document.querySelector('#line1')
const time = document.querySelector('#line2')
const tempImg = document.querySelector('.tempImg')

weatherForm.addEventListener('submit',(e)=>
{
    e.preventDefault()
    const loc = search.value
    
    fetch('/weather?address='+loc).then((response)=>{
        response.json().then((data)=>{
            console.log(data)
            msg.textContent = "Templerature at " + data.place + " is " + data.temperature + "℃."
            time.textContent = "Time: " + data.localtime
            tempImg.src = data.iconUrl

        })
    })
    
})