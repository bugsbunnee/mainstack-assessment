import React  from 'react';

import { Box, Center, Grid, GridItem, Image, Show, Stack} from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';
import { SUBROUTES } from '../utils/constants';

import NavBar from '../components/NavBar';




const Layout: React.FC = () => {
	return (
        <Center width='100vw' height='100vh' overflow='hidden' bg='#EDE5FE'>
            <Box p='1rem' bg='white' h='90vh' w='80vw'>
                <NavBar />
                <Grid
                    height='100%'
                    overflow="hidden"
                    templateAreas={{
                        base: `"main"`,
                        lg: `"aside main"`,
                    }}
                    templateColumns={{
                        base: '1fr',
                        lg: `48px 1fr`,
                    }}
                >
                    <Show above="lg">
                        <GridItem area="aside" display='flex' alignItems='center' justifyContent='center'>
                            <Stack borderRadius={100} p='0.25rem' boxShadow='0px 6px 12px 0px #5C738314' alignItems='center'>
                                {SUBROUTES.map((route) => (
                                    <Center key={route.title} width='2.5rem' height='2.5rem'>
                                        <Link to='/'>
                                            <Image
                                                boxSize='1.5rem'
                                                src={route.img}
                                                alt={route.title}
                                                objectFit='contain'
                                                filter='grayscale(100%)'
                                                _hover={{ filter: 'none' }}
                                            />
                                        </Link>
                                    </Center>
                                ))}
                            </Stack>
                        </GridItem>
                    </Show>

                    <GridItem area="main" overflowY="scroll" maxH='80vh' py='4rem' px='4.75rem'>
                       <Outlet />
                    </GridItem>
                </Grid>
            </Box>
        </Center>
	);
};

export default Layout;
