const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
        'X-RapidAPI-Key': 'c02fe76174msh1f91b016511c2edp1b58c3jsn841e5aa89997'
    }
};

fetch('https://yh-finance.p.rapidapi.com/auto-complete?q=tesla&region=US', options)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        displayData(data)
    })
    .catch(err => console.error(err));

    const optionsWatch = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
            'X-RapidAPI-Key': 'c02fe76174msh1f91b016511c2edp1b58c3jsn841e5aa89997'
        }
    };
    
    fetch('https://yh-finance.p.rapidapi.com/market/get-popular-watchlists', options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            displayData(data)
        })
        .catch(err => console.error(err)); 

const displayData = data => {

    //   "MarketWatch"
    document.getElementById("MarketWatch").textContent = data.news[0].publisher
    document.getElementById("titleMarketWatch").textContent = data.news[0].title
    document.getElementById("linkMarketWatch").textContent = data.news[0].link

    // document.getElementById("shortNameMarketWatch").textContent = data.quotes[0].shortname

    //Publisher "Barrons.com"
    document.getElementById("Barronspublisher").textContent = data.news[1].publisher
    document.getElementById("BarronsTitle").textContent = data.news[1].title
    document.getElementById("Barronslink").textContent = data.news[1].link


    //publisher: "GOBankingRates"
    document.getElementById("GOBankingpublisher").textContent = data.news[2].publisher
    document.getElementById("GOBankingTitle").textContent = data.news[2].title
    document.getElementById("linkGOBanking").textContent = data.news[2].link

    //publisher: "Investor's Business Daily"
    document.getElementById("Investorpublisher").textContent = data.news[3].publisher
    document.getElementById("InvestorTitle").textContent = data.news[3].title
    document.getElementById("linkInvestor").textContent = data.news[3].link

    //publisher: "Motley Fool"
    document.getElementById("Motleypublisher").textContent = data.news[4].publisher
    document.getElementById("MotleyTitle").textContent = data.news[4].title
    document.getElementById("Motleylink").textContent = data.news[4].link

  //publisher: "Watchlist API" https://rapidapi.com/apidojo/api/yh-finance/
  document.getElementById("symbol").textContent = data.portfolios[0].name
  document.getElementById("exchDisp").textContent = data.portfolios[0].discription
  document.getElementById("industry").textContent = data.portfolios[0].industry
  document.getElementById("shortname").textContent = data.portfolios[0].shortname



}

