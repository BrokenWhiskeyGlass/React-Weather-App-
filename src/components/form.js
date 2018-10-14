import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="Город..."/>
            <input type="text" name="country" placeholder="Страна..."/>
            <button>Погода</button>
        </form>
    )
}

export default Form;