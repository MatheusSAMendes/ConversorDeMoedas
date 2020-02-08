import React, { Component } from 'react';
import './conversor.css';

var response = require('./currencies.json');

export default class Conversor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            moedaA_valor: '',
            moedaB_valor: 0,
        }

        this.converter = this.converter.bind(this);
    }

    build_dropdown() {
        for (var currency in response.results) {
            console.log(currency)
        }

        $.each(currency, function (id, option) {
            //$('#sel').append($('<option/>').attr("value", option.id).text(option.name));
            alert( id + ": " + option );
        });

    }

    converter() {
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=y&apiKey=3223555c44053b653c5a`

        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(json => {
                let cotacao = json[de_para].val;
                let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
                this.setState({ moedaB_valor })
            });
    }

    render() {
        return (
            <div className="flex-container">
                <div className="Conversor">
                    <div id="match-list"></div>
                    <form action="/action_page.php">
                        <select name="Currencies">
                            <option value="{this.currency}">{this.currency}</option>
                        </select>
                        <br></br>
                    </form>
                    <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                    <input type="button" value="build" onClick={this.build_dropdown}></input>
                    <input type="text" onChange={(event) => (this.setState({ moedaA_valor: event.target.value }))} ></input>
                    <p></p>
                    <input type="button" value="Conveter" onClick={this.converter}></input>
                    <h2>{this.state.moedaB_valor}</h2>
                </div>
            </div>
        )
    }
}