const fetch = require('node-fetch');
const apikey = process.env.APIKEY;

exports.handler = async(event) => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.queryStringParameters.q}&appid=${apikey}`)
    let data = await response.json();
    const answer = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(data)
    }

    return answer;
};
