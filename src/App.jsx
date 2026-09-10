import { ThemeProvider } from "./context/ThemeContext"
import Parent from "./components/parent"
import "./App.css"

const App = () => (
  <ThemeProvider>
    <Parent />
  </ThemeProvider>
)

export default App
