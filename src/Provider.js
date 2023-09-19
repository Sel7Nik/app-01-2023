import { StoreContext } from './redux/StoreContext'

export const Provider = (props) => {
  return <StoreContext.Provider value={props.store}>{props.children}</StoreContext.Provider>
}
