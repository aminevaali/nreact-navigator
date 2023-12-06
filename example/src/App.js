import React from 'react'

import { NNavigator } from 'nreact-navigator'
import 'nreact-navigator/dist/index.css'
import brandIcon from './brandIcon.jpg'

const App = () => {
  return <NNavigator brandIcon={brandIcon}>
    <h1>This is NNavigator testtttttt</h1>
    <p>This library helps developers to make a stable and reusable structure for web projects</p>
  </NNavigator>
};

export default App;
