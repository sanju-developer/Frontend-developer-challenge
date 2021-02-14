import React, { Suspense } from 'react'
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux'


import messages from './assets/Internationalisation'
import Routing from './routes/routes'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const lng = useSelector((state) => state.lang.data)

  return <Suspense fallback={<p>loading</p>}>
    <IntlProvider
      locale={lng}
      messages={messages[lng]}
      key={lng}
    >
      <Routing />
    </IntlProvider>
  </Suspense>
}

export default App
