import React, { useRef, useEffect, FC } from 'react';
import './index.less'

const img = require('./img/amazon_view.jpg')

export default (): any => {

  useEffect(() => {
  }, [])

  return (
    <div className="svgBgMask">
      <div className="picture">
          <img src={img} alt="" />
          <svg width="100%" height="1280">
              <defs>
                  <linearGradient id="gradient" gradientTransform="rotate(76)">
                      <stop offset="18%" stop-color="#1a237e" />
                      <stop offset="80%" stop-color="#00e5ff" />
                  </linearGradient>
                  <mask id="mask">
                      <rect width="100%" height="100%" fill="#fff" />
                      <text x="10%" y="25%" font-size="50px" font-weight="300">hello</text>
                      <text x="10%" y="50%" font-size="100px" letter-spacing="8">My Friend</text>
                  </mask>
              </defs>
              <rect width="100%" height="100%" fill="url(#gradient)" fill-opacity="0.8" mask="url(#mask)" />
          </svg>
      </div>
          
      <div className="article">
          <h1>You Are The Best</h1>
          <ul>
              <li>
                  <img src="https://s.cdpn.io/387787/scalable.svg" alt="" width="60" height="60" />
                  <h2>bread</h2>
              </li>
              <li>
                  <img src="https://s.cdpn.io/387787/customizable.svg" alt="" width="60" height="60" />
                  <h2>hand</h2>
              </li>
              <li>
                  <img src="https://s.cdpn.io/387787/accessible.svg" alt="" width="60" height="60" />
                  <h2>heart</h2>
              </li>
          </ul>
      </div>
  </div>
  )
}