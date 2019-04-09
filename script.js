
function queryResults(){
let state = document.getElementById('stateSearch').value;
URL = 'https://developer.nps.gov/api/v1/parks?q='+state+'&api_key=hppPR6XUS6aQatRAXO2X5QPSNTdeLSthZuwa6Esr';
fetch(URL)
.then(response => response.json())
.then(responseJson => console.log(results(responseJson)))
.catch(error => alert('ERROR!'));
};

function results(responseJson){
    for(let i=0; i<responseJson.data.length & i<($('#js-max-results').val()); i++){
        responseJson.data[i].name;
        responseJson.data[i].description;
        responseJson.data[i].url;
        let latLong= responseJson.data[i].latLong;
        let location1= latLong.replace('lat:', '');
        let location2= location1.replace('long:', '');
        let location= location2.replace(/\s/g, '')
        $('.parks').append(
           `<h1>${responseJson.data[i].name}</h1><br>`,
           `<p>${responseJson.data[i].description}</p>`,
           `<a href= ${responseJson.data[i].url}> Link </a>`,
        )}
}


function renderSubmit(){
    $('form').on('submit', function (event){
    (event).preventDefault();
    $('.parks').empty();
    queryResults();
})
};

renderSubmit();

