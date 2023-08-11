function fetchData(){
    fetch('http://localhost:3000/pups')
    .then(res => res.json())
    .then(pups => {renderPups(pups), renderOnePup(pups)})
    .catch(e => console.log(e))
}

function renderPups(pups){
    pups.forEach((pup)=>{
        let pupSpan = document.createElement('span')
        pupSpan.textContent = pup.name
        document.querySelector('#dog-bar').appendChild(pupSpan)
    })
}

function renderOnePup(pups){
    let pupSpans = document.querySelectorAll('span')
    pupSpans.forEach((pupSpan) =>{
        pupSpan.addEventListener('click', ()=>{
            // console.log(pupSpan.textContent)
            for (pup of pups){
                if (pupSpan.textContent === pup.name){
                    // console.log(`Pup's name: ${pup.name}, Pup's Image: ${pup.image}`)
                    let dogInfo = document.querySelector('#dog-info')
                    dogInfo.innerHTML = `
                        <img src = ${pup.image}>
                        <h2>${pup.name}</h2>
                        <button>${pup.isGoodDog ? "Good dog": "Bad dog"}</button>
                    `;
                    
                }
            }
        })
    })
}


function toggleGoodDog(){
    console.log(dogInfo.h2)
}

fetchData()