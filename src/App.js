import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/inlineStyle";
import { StyledJsx } from "./components/styledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
