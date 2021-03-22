import React , {Component} from 'react'
import { Provider } from 'react-redux';
import FirstScreen from './src/screen/FirstScreen/FirstScreen'
import { store } from "./src/redux/store/store"


class App extends Component {

  render () {
    return (
      <Provider store={store}>
        <FirstScreen/>
      </Provider>
    )
  }
}

export default App