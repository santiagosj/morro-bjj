import React, { Component } from 'react'
import './Maps.css'
export default class Maps extends Component {
    render() {
        return (
            <div className="map-container">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19212.28764830394!2d-64.4306434459581!3d-31.653429314119556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d574b737fb795%3A0x6fc3b53aae80ec8!2sBrazilian%20Jiu%20Jitsu%20Carceglia%20Team%20Alta%20Gracia!5e0!3m2!1ses-419!2sar!4v1577972506142!5m2!1ses-419!2sar" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
            </div>
        )
    }
}
