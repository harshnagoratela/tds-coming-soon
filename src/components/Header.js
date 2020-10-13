import React from 'react';

import config from '../../config';
export default function Header() {
  return (
    <header id="header">
      <h1>
        We are launching very soon!
      </h1>
      <h2>Our website in under construction</h2>
      <br />
      <p>{config.siteTitle} - Thought Leaders in Digital</p>
      <nav>
        <ul>
          {config.authorSocialLinks && config.authorSocialLinks.map(social => {
            const { icon, name, url } = social;
            return (
              <li>
                <a href={url} class={`icon ${icon}`}>
                  <span class="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
