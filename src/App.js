import { ThemeProvider } from "styled-components";
import { GlobalTypeStyles } from "styled-typography";
import { ModalProvider } from "styled-react-modal";
import GlobalStyle from "./assets/styles/globalStyles";
import HomeScreen from "./main/Home";
const typographyTheme = {
  fontSizes: ["12px", "14px", "16px", "20px", "24px", "34px"],
  fontWeight: ["normal", "medium"],
  letterSpacing: ["0.4px", "0.1px", "1.25px", "0.25px", "0.5px"],
  colors:["#000","#d1d1d1"]
};

function App() {
  return (
    <ThemeProvider theme={{ typography: typographyTheme }}>
      <>
        <ModalProvider>
          <GlobalStyle />
          <GlobalTypeStyles />
          <HomeScreen />
        </ModalProvider>
      </>
    </ThemeProvider>
  );
}

export default App;
