import React from "react"
import { Text } from "../Views/Styled"

/* Info page Left */
export default ({ name, email, instagram }) => (
  <div style={{ lineHeight: `1.5` }}>
    <Text>{name}</Text>
    <Text>{email}</Text>
    <a href={instagram}>
      <Text>instagram</Text>
    </a>
  </div>
)
