// Import React
import React, { Component } from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
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
  showcase: require('../assets/showcase.png'),
}

const latarbelakang = {
  compare: require('../assets/perbandingan.png'),
  rekrutmen: require('../assets/rekrutmen.png'),
  sad: require('../assets/sad.png'),
}

const fitur = {
  brush : require('../assets/brush.png'),
  collection : require('../assets/desain-beragam.png'),
  desain : require('../assets/desain.png'),
  drag : require('../assets/drag.png'),
  file : require('../assets/file.png'),
  font : require('../assets/font.png'),
  warna : require('../assets/warna.png'),
}

const batasan = {
  onepage: require('../assets/onepage.png'),
  template: require('../assets/template.png'),
  webfont: require('../assets/webfont.png'),
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
          <Layout>
            <Appear>
              <Fill>
                <Image width={ 300 } src={ latarbelakang.rekrutmen } />
                <Text textSize={ 22 } textColor='secondary'>Trend rekrutmen di dunia industri kreatif</Text>
              </Fill>
            </Appear>
            <Appear>
              <Fill>
                <Image width={ 300 } src={ latarbelakang.sad } />
                <Text textSize={ 22 } textColor='secondary'>Kemampuan masyarakat belum memenuhi perkembangan</Text>
              </Fill>
            </Appear>
          </Layout>
        </Slide>

        <Slide transition={['fade']}>
          <Image src={ latarbelakang.compare } height={ 300 } />
          <Text textSize={ 24 }>Dari 163 responden, disimpulkan bahwa 6 dari 10 orang tidak bisa membuat desain resume yang baik dan informatif.</Text>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Image src={ image.showcase }></Image>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={4} margin="0 0 50px 0">Fitur-fitur</Heading>
          <Layout>
            <Fill>
              <Image src={fitur.brush} width={ 180 } />
              <Text textSize={ 20 }  margin="0 0 50px 0">Realtime design</Text>
            </Fill>
            <Fill>
              <Image src={fitur.drag} width={ 180 } />
              <Text textSize={ 20 }>Draggable and resizable</Text>
            </Fill>
            <Fill>
              <Image src={fitur.file} width={ 180 } />
              <Text textSize={ 20 }>Export to JPG/PDF</Text>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Image src={fitur.collection} width={ 180 } />
              <Text textSize={ 20 } >Desain yang beragam</Text>
            </Fill>
            <Fill>
              <Image src={fitur.warna} width={ 180 } />
              <Text textSize={ 20 }>Pilih warna sesukamu</Text>
            </Fill>
            <Fill>
              <Image src={fitur.font} width={ 180 } />
              <Text textSize={ 20 }>Gunakan font yang sesuai denganmu</Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={4} margin="0 0 100px">Batasan aplikasi</Heading>
          <Layout>
            <Fill>
              <Image src={batasan.template} width={200} />
              <Text textSize={22}>Build from template</Text>
            </Fill>
            <Fill>
              <Image src={batasan.webfont} width={200} />
              <Text textSize={22}>Free webfont</Text>
            </Fill>
            <Fill>
              <Image src={batasan.onepage} width={200} />
              <Text textSize={22}>One page per design</Text>
            </Fill>
          </Layout>
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

        <Slide>
          <Image width={ 350 } src={ image.logo } />
        </Slide>

      </Deck>
    );
  }
}
