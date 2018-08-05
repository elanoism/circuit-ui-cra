import React, { Component } from "react";
import { Card, Button, CardFooter } from "circuit-ui";
// import Card, { CardFooter } from "circuit-ui/lib/components/Card";
// import Button from "circuit-ui/lib/components/Button";
import { circuit } from "circuit-ui/lib/themes";
import { ThemeProvider } from "emotion-theming";

export const Test = ({ onClick }) => (
  <Card style={{ margin: "20px auto", width: "500px" }}>
    Hello circuit-ui
    <CardFooter>
      <Button data-selector="button" primary onClick={onClick}>
        Hello
      </Button>
    </CardFooter>
  </Card>
);

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={circuit}>
        <Test />
      </ThemeProvider>
    );
  }
}

export default App;
