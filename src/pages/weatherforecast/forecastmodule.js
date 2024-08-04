import Parameters from "../../common/parameters";

const Parameter = new Parameters();

const getForecasts = (forecastHandler, qtd) => {
    const baseaddress = Parameter.ApiBaseAddress;

    return fetch(baseaddress + "/weatherforecast/" + qtd)
        .then((response) => response.json())
        .then((data) => {
            forecastHandler(data);
        })
        .catch((err) => console.log(err));
}

export default getForecasts;