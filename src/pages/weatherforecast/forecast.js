import { useState } from 'react';
import Layout from '../Layout/Layout';
import ForecastComponent from './forecastComponent';

import getForecasts from './forecastmodule';

const Forecast = () => {
    const [wasLoaded, setLoaded] = useState(false);
    const [forecasts, setForecasts] = useState([]);
    const [sliderQtt, setSliderQtt] = useState(4);

    const handleRefreshClick = () => {
        getForecasts((data) => {
            setForecasts(data);
            setLoaded(true);
        }, sliderQtt);


    }

    const handleOnChangeCommitted = (e, val) => {
        if (val < sliderQtt) {
            const newForecasts = forecasts.filter((item, index) => index < val);
            setForecasts(newForecasts);
        }
        else {
            getForecasts((data) => {
                const newForecasts = forecasts.concat(data);
                setForecasts(newForecasts);
            }, val - sliderQtt);
        }
        setSliderQtt(val);
    }

    return (
        <>
            <Layout />
            <ForecastComponent
                source={forecasts}
                Loaded={wasLoaded}
                initialSliderValue={sliderQtt}
                onChangeCommitted={(e, val) => handleOnChangeCommitted(e, val)}
                onClick={() => handleRefreshClick()} />
        </>
    );

};
export default Forecast;