import React from "react"

/* Info page Left */
export default ({ name, email, instagram }) => (
  <div className="Infopage-left">
    <p className="Infopage-name">{name}</p>
    <p className="Infopage-email">{email}</p>
    <a
      href="https://www.instagram.com/katrinagnes/"
      className="Infopage-instagram"
    >
      <p>{instagram}</p>
    </a>
  </div>
)
