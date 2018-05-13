// Import React
import React, { Component } from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const image = {
  logo: require('../assets/logo-color.png'),
  showcase: require('../assets/showcase.png')
}

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Intreactive
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            aplikasi web desain resume
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={ 3 } textColor='tertiary'>Latar belakang</Heading>
          <List ordered>
            <ListItem>Perkembangan sistem rekrutmen di dunia industri kreatif telah berkembang</ListItem>
            <ListItem>Kemampuan masyarakat membuat resume yang terdesain baik dan informatif kurang</ListItem>
            <ListItem>Harga desain yang cukup mahal</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Image src={ image.showcase }></Image>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={3}>Dibangun dengan</Heading>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={3}>Fitur-fitur</Heading>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={3}>Batasan aplikasi</Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={2} fit caps>Demo aplikasi</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>The world is yours to explore</Quote>
            <Cite>Anonymous</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['zoom']} bgColor='primary'>
          <Heading size={ 2 } fit caps textColor='tertiary'>Terima kasih</Heading>
          <Text>- Ashari Muhammad Hisbulloh -</Text>
        </Slide>

      </Deck>
    );
  }
}
