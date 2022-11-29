import { Box, Button, ButtonGroup, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaLock } from 'react-icons/fa'
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'


const Footer = () => {
    return (
        <Box bg={'var(--purple)'} >
            <Container maxW={{ lg: '79.36vw' }} py={10}>
                <Flex alignItems={'center'} justifyContent={'space-between'} flexWrap={'wrap'}>
                    <ButtonGroup flex flexWrap={'wrap'} variant="link" spacing={{ base: "5", lg: '3.30vw' }}>
                        {['Terms Of Service', 'Privacy', 'Fair', 'VIP Club', 'AML', 'Responsible']?.map((item) => (
                            <Button fontSize={{ base: '16px', lg: '1.0vw' }} color={'white'} fontWeight={400} fontFamily={'Public Sans'} key={item}>{item}</Button>
                        ))}
                    </ButtonGroup>
                    <Box mt={{ base: 5, lg: 0 }} flex flexWrap={'wrap'} >
                        <Button leftIcon={<FaLock />} bg={'#464F62'} _hover={{ background: '#464F62' }} color='#60AF5A'  >256-bit Encryption</Button>
                        <Button ml={{ base: 1, lg: '0.5vw' }} mt={{ base: 1, md: 0 }} leftIcon={<FaLock />} bg={'#464F62'} _hover={{ background: '#464F62' }} color='#60AF5A'  >256-bit Encryption</Button>
                    </Box>
                </Flex>


                <Text py={{ base: 5, lg: '0.9vw' }} color={'#9A98AE'} fontSize={{ base: '15px', lg: '0.8vw' }} >Dooo leth wqu dquu hdgwu wgth fawu fghwutqwu uuuwghht hawtuh thquwihqwtuuhtqwu its registered address at Fransche Bloemweg 4, qwdq, licensed to conduct onlinperations by
                    the qwdqwd dawd license 8048/JAZ. Raw Entertainment Ltd, dawdawdqwddwadding its registered address at Voukourestiou, 25. Neptune House, 1st Floor, Flat/Office11, Zakaki,3045,
                    gwdwqdwaddis a wholly owned subsidiary of Raw Entertainment B.V. Raw Entertainment L
                    1 acts as a paving and operational agent on behalf of Raw Entertawdawdwadwadawdwad</Text>


                <Flex justifyContent={'center'} align={'center'} >
                    <Flex w={{ base: '90%', md: '40%', lg: '20%' }} justifyContent={'space-around'} >
                        <Box _hover={{ background: 'var(--secondaryColor)', cursor: 'pointer' }} h={'30px'} w={'30px'} border={'1px solid #A1A1A1'} display={'flex'} borderRadius={100} justifyContent={'center'} alignItems={'center'}  >
                            <FiFacebook color='#A1A1A1' />
                        </Box>
                        <Box _hover={{ background: 'var(--secondaryColor)', cursor: 'pointer' }} h={'30px'} w={'30px'} border={'1px solid #A1A1A1'} display={'flex'} borderRadius={100} justifyContent={'center'} alignItems={'center'}  >
                            <FiTwitter color='#A1A1A1' />
                        </Box>
                        <Box _hover={{ background: 'var(--secondaryColor)', cursor: 'pointer' }} h={'30px'} w={'30px'} border={'1px solid #A1A1A1'} display={'flex'} borderRadius={100} justifyContent={'center'} alignItems={'center'}  >
                            <BsInstagram color='#A1A1A1' />
                        </Box>
                        <Box _hover={{ background: 'var(--secondaryColor)', cursor: 'pointer' }} h={'30px'} w={'30px'} border={'1px solid #A1A1A1'} display={'flex'} borderRadius={100} justifyContent={'center'} alignItems={'center'}  >
                            <FiLinkedin color='#A1A1A1' />
                        </Box>
                    </Flex>
                </Flex>
            </Container>
        </Box >
    )
}

export default Footer