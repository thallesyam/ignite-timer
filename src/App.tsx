import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello Timer</h1>

      <GlobalStyle />
    </ThemeProvider>
  )
}
