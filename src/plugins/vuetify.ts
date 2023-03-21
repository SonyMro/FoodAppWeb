// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  {
    theme: {
      defaultTheme: 'Dark',
      themes: {
        Light: {
          dark: false,
          colors: {
            background: '#F8E9A1',
            surface: '#FFFFFF',
            primary: '#F44336',
            'primary-darken-1': '#D32F2F',
            secondary: '#FFC107',
            'secondary-darken-1': '#FFA000',
            error: '#FF5722',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FF9800'
          }
        },
        Dark:{
          colors:{
          background: '#1E1E1E',
          surface: '#424242',
          primary: '#FF5252',
          'primary-darken-1': '#FF1744',
          secondary: '#FFD740',
          'secondary-darken-1': '#FFC400',
          error: '#FFB74D',
          info: '#90CAF9',
          success: '#81C784',
          warning: '#FFA726'
        }}
      }
    }
  }
)
