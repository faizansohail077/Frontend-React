import { Box, Image } from "@chakra-ui/react";
import { leftgradient } from "./assests/img";
import { Footer, Navbar } from "./components";
import { Herobg } from './assests/img'

// font-family: 'Montserrat', sans-serif;
// font-family: 'Public Sans', sans-serif;
function App() {
  return (
    <Box bg={'var(--primaryLight)'} >
      <Navbar />

      <Box backgroundImage={Herobg} backgroundRepeat={'no-repeat'} w={'100vw'} backgroundSize={'cover'} position={'relative'}  h={'100vh'} >
        <Image zIndex={1} src={leftgradient} position={'absolute'} top={0} bgRepeat={'no-repeat'} w={'100vw'} />
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
