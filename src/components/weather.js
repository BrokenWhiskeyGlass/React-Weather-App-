import React from 'react';

const Weather = (props) => {
    return (
        <div className="weather-info">
            {props.country && props.city && <p className="weather__key">Город:<span className="weather__value"> {props.city}, {props.country}</span></p>}
            {props.temperature && <p className="weather__key">Температура:<span className="weather__value"> {props.temperature}</span></p>}
            {props.humidity && <p className="weather__key">Влажность:<span className="weather__value"> {props.humidity}</span></p>}
            {props.description && <p className="weather__key">Небо:<span className="weather__value"> {props.description}</span></p>}
            {props.error && <p className="weather__error">{props.error}</p>}
        </div>
    )
}

export default Weather;