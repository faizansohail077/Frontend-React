import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Drawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import { Logo } from '../../assests/img'

const Navbar = () => {
    // const isDesktop = useBreakpointValue({ base: false, lg: true })
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Box as="section">
            <Box as="nav" bg="var(--primaryColor)">
                <Container maxW={{ lg: '79.36vw' }} py={{ base: '4', lg: '1.3vw' }}>
                    <HStack justify="space-between">

                        <img src={Logo} alt='newlogo' />
                        {isDesktop ? (

                            <HStack spacing="10">
                                <ButtonGroup variant="link" spacing={{ base: "12", lg: '3.30vw' }}>
                                    {['Home', 'Explore', 'My Collection', 'Marketplace', 'FAQ']?.map((item) => (
                                        <Button fontSize={{ base: '16px', lg: '1.0vw' }} color={'white'} fontWeight={400} fontFamily={'Public Sans'} key={item}>{item}</Button>
                                    ))}
                                </ButtonGroup>

                                <Button marginLeft={{ lg: '1.98vw' }} marginRight={{ lg: '1.98vw' }} bg={'var(--secondaryColor)'} borderRadius={500} color={'white'} height={{ base: '30px', lg: '1.98vw' }} width={{ base: '150px', lg: '10.5vw' }} fontSize={{ base: '16px', lg: '0.9vw' }} variant="primary">Connect</Button>
                            </HStack>
                            // </Flex>
                        ) : (
                            <>
                                <IconButton
                                    variant="ghost"
                                    icon={<FiMenu fontSize="1.25rem" color='white' />}
                                    ref={btnRef}
                                    _hover={{ background: 'var(--primaryColor)' }}
                                    onClick={onOpen}
                                    aria-label="Open Menu"
                                />

                                <Drawer
                                    isOpen={isOpen}
                                    placement='right'
                                    onClose={onClose}
                                    finalFocusRef={btnRef}
                                >
                                    <DrawerOverlay />
                                    <DrawerContent>
                                        <DrawerCloseButton color={'white'} />
                                        <ButtonGroup paddingTop={5} bg={'var(--primaryColor)'} color={'white'} h={'100%'} variant="link" spacing="8">
                                            <Flex flexDirection={'column'} alignItems={'center'} height={'50%'} justifyContent={"space-around"} w={'100%'} >
                                                {['Home', 'Explore', 'My Collection', 'Marketplace', 'FAQ']?.map((item) => (
                                                    <Button fontSize={{ base: '16px', lg: '1.0vw' }} color={'white'} fontWeight={600} fontFamily={'Public Sans'} key={item}>{item}</Button>
                                                ))}
                                                <Button marginLeft={{ lg: '1.98vw' }} marginRight={{ lg: '1.98vw' }} bg={'var(--secondaryColor)'} borderRadius={500} color={'white'} height={{ base: '30px', lg: '1.98vw' }} width={{ base: '150px', lg: '10.5vw' }} fontSize={{ base: '16px', lg: '0.9vw' }} variant="primary">Connect</Button>
                                            </Flex>
                                        </ButtonGroup>
                                    </DrawerContent>
                                </Drawer>
                            </>

                        )}
                    </HStack>
                </Container>
            </Box >
        </Box >
    )
}

export default Navbar 