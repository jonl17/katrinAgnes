import React from "react"
import { Provider } from "react-redux"
import { createStore as createKataStore } from "redux"
import rootReducer from "./src/state/index"
import { GlobalStyle } from "./src/components/GlobalStyle"

const createStore = () => createKataStore(rootReducer)

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={createStore()}>
      <GlobalStyle />
      {element}
    </Provider>
  )
}
