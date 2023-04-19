import React from 'react'

import i18next from 'i18next'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import routes from '@/constants/routes'
import Layout from '@/Layout'
import Home from '@/pages/Home'
import Project from '@/pages/Project'
import translations_en from '@/translations/en.json'
import translations_es from '@/translations/es.json'

const resources = {
  en: {
    translation: translations_en
  },
  es: {
    translation: translations_es
  }
}

void i18next.init({
  resources,
  interpolation: { escapeValue: false },
  // get lang from user data
  lng: 'en'
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: routes.HOME,
        element: <Home />
      },
      {
        path: routes.PROJECT,
        element: <Project />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
)
