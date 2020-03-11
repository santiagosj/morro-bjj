import React, { Component } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './layout.css'
import './Wapp.css'
class Wapp extends Component {

    render(){

        const { number, message } = this.props;

        const linkAPI = `https://api.whatsapp.com/send?phone=549${number}&text=%20${message}`;

        return(
                <a href={linkAPI} target="_blank" rel="noopener noreferrer" className="Contact--Details--Item"> <FaWhatsapp /> Enviar whatsapp </a>
        )
    }
}

export default Wapp;