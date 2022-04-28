fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(res => res.json())

    .then(data => {
        console.log(data)
        displayData(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

const displayData = data => {

    //USD section
    document.getElementById("uslist1").textContent = data.chartName
    document.getElementById("uslist3").textContent = data.bpi.USD.rate
    document.getElementById("uslist4").textContent = data.time.updated.slice(0, -12)
    document.getElementById("uslist2").textContent = data.bpi.USD.description

    //EU section
    document.getElementById("eurlist1").textContent = data.chartName
    document.getElementById("eurlist3").textContent = data.bpi.EUR.rate
    document.getElementById("eurlist4").textContent = data.time.updated.slice(0, -12)
    document.getElementById("eurlist2").textContent = data.bpi.EUR.description

    //British section
    document.getElementById("gbplist1").textContent = data.chartName
    document.getElementById("gbplist3").textContent = data.bpi.GBP.rate
    document.getElementById("gbplist4").textContent = data.time.updated.slice(0, -12)
    document.getElementById("gbplist2").textContent = data.bpi.GBP.description
    document.getElementById("disclaimer").textContent = data.disclaimer
    //history

    // document.getElementById("history").textContent = data.price
}



//only to check to see if API is working
// fetch(' https://api.coindesk.com/v1/bpi/currentprice.json')
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });


