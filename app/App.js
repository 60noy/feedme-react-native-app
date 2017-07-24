import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './views/Home'
import RestaurantCards from './views/RestaurantCards'
import Restaurant from './views/Restaurant'

const App = () => (
  <Router>
    <Scene key="root">
      <Scene initial key="home" component={Home} title="Home" />
      <Scene key="cards" component={RestaurantCards} title="Choose a restaurant" />
      <Scene key="restaurant" component={Restaurant} />
    </Scene>
  </Router>
)

export default App
