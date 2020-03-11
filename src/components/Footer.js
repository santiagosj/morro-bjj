import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Seguinos{' '}
      <a href="https://instagram.com/morrojiujitsualtagracia/">@morrojiujitsualtagracia</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Morro Brazilian JIU-JITSU {' '}
        </span>
      </div>
    </footer>
  </div>
)
