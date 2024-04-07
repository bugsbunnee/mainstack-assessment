import { Avatar, Button, Center, Divider, Flex, HStack, Heading, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react';
import { NavLink as Link } from 'react-router-dom';

import { IconType } from 'react-icons';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import { TbApps } from 'react-icons/tb';
import { MdCardGiftcard, MdLogout, MdOutlineAnalytics, MdOutlineChat, MdOutlineSwitchAccount } from 'react-icons/md';
import { CgBell } from 'react-icons/cg';
import { IoIosMenu } from 'react-icons/io';
import { GoHome } from 'react-icons/go';
import { BsCashStack } from 'react-icons/bs';
import { HiOutlineCog } from 'react-icons/hi';
import { LuBug, LuScrollText } from 'react-icons/lu';
import { FiUsers } from 'react-icons/fi';
import { SUBROUTES } from '../utils/constants';

import useUser from '../hooks/useUser';
import logo from '../assets/logo.svg';

interface Route {
    Icon: IconType;
    route: string;
    label: string;
}

const NavBar = () => {
    const user = useUser();

    const routes: Route[] = [
        {
                Icon: GoHome,
                route: '/',
                label: 'Home'
        },
        {
                Icon: MdOutlineAnalytics,
                route: '/analytics',
                label: 'Analytics'
        },
        {
                Icon: BsCashStack,
                route: '/revenue',
                label: 'Revenue'
        },
        {
                Icon: FiUsers,
                route: '/users',
                label: 'CRM'
        },
    ];

    const settings = [
        {
            label: 'Settings',
            Icon: HiOutlineCog
        },
        {
            label: 'Purchase History',
            Icon: LuScrollText
        },
        {
            label: 'Refer and Earn',
            Icon: MdCardGiftcard
        },
        {
            label: 'Integrations',
            Icon: TbApps
        },
        {
            label: 'Report Bug',
            Icon: LuBug
        },
        {
            label: 'Switch Account',
            Icon: MdOutlineSwitchAccount,
        },
        {
            label: 'Sign Out',
            Icon: MdLogout
        }
    ]

    return (
        <HStack boxShadow='0px 2px 6px 0px #2D3B430F' borderRadius='6.25rem' paddingX='1.5rem' py='0.875rem' alignItems='center'>
            <Link to="/">
                <Image src={logo} boxSize="36px" objectFit='cover' />
            </Link>

            <HStack w='100%' spacing={3} justifyContent='center' alignItems='center'>
                {routes.map(({route, Icon, label}) => (
                    <Button
                        key={route}
                        as={Link}
                        to={route}
                        _activeLink={{ bg: 'gray.900', color: '#ffffff' }}
                        leftIcon={<Icon size={15} color="gray.900" />}
                        variant="ghost"
                        size='md'
                        rounded={100}
                        fontSize='1rem'
                        fontWeight="600"
                        colorScheme='gray'
                    >
                        {label}
                    </Button>
                ))}
            
                <Menu>
                    {({ isOpen }) => (
                        <>
                            {isOpen ? (
                                <MenuButton 
                                    as={Button} 
                                    rounded={100}
                                    fontSize='1rem'
                                    fontWeight="600"
                                    bg='gray.900'
                                    color='gray.50'
                                    _hover={{ bg: 'gray.900' }}
                                    _active={{ bg: 'gray.900' }}
                                    >
                                        <Flex>
                                            <HStack>
                                                <TbApps size={15} />
                                                <Text>Apps</Text>
                                            </HStack>
                                            <Divider orientation='vertical' mx={4} h={10} />
                                            <HStack>
                                                <Text>Link in Bio</Text>
                                                <BiChevronDown size={15} />
                                            </HStack>
                                        </Flex>
                                    </MenuButton>
                            ) : (
                                <MenuButton
                                    as={Button}
                                    leftIcon={<TbApps size={15} color="gray.900" />}
                                    variant="ghost"
                                    size='md'
                                    rounded={100}
                                    fontSize='1rem'
                                    fontWeight="600"
                                    colorScheme='gray'
                                >
                                    Apps
                                </MenuButton>
                            )}

                            <MenuList minW={450} border='none' boxShadow='0px 2px 6px 0px #2D3B430F' p={2}>
                                {SUBROUTES.map((route) => (
                                    <MenuItem key={route.title} bg='white' my={1} p={3} _hover={{ borderRadius: 10, borderWidth: 1, borderColor: 'gray.100', boxShadow: '0px 2px 6px 0px #2D3B430F' }}>
                                        <Center boxSize={50} borderWidth={1} borderColor='gray.100' borderRadius={10}>
                                            <Image src={route.img}  alt='Link in Bio' />
                                        </Center>
                                        <Stack spacing={1} ml={3} flex={1}>
                                            <Heading fontSize='1rem' lineHeight='1rem' fontWeight='600' textTransform='capitalize'>{route.title}</Heading>
                                            <Text color='gray.400' fontSize='0.875rem' lineHeight='1rem' fontWeight='500'>{route.subtitle}</Text>
                                        </Stack>
                                        <BiChevronRight size={15} color='gray.400' />
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </>
                    )}
                </Menu>
            </HStack>

            <HStack spacing={3} justifyContent='center' alignItems='center'>
                <IconButton
                    as={Link}
                    to='/'
                    size="sm"
                    colorScheme="gray"
                    variant="ghost"
                    aria-label="Notifications"
                    icon={<CgBell size={20} color="gray.400" />}
                />

                <IconButton
                    as={Link}
                    to='/'
                    size="sm"
                    colorScheme="gray"
                    variant="ghost"
                    aria-label="Messages"
                    icon={<MdOutlineChat size={20} color="gray.400" />}
                />

                <Menu>
                    <HStack bg='gray.50' p={1} borderRadius={100} spacing={1}>
                        <Avatar 
                            bgGradient='linear(to-r, #5C6670, #131316)' 
                            size='sm' 
                            color='white'
                            name={`${user.data.first_name} ${user.data.last_name}`} 
                            src=''
                        />

                        <MenuButton 
                            as={IconButton}
                            size="sm"
                            colorScheme="gray"
                            variant="ghost"
                            aria-label="Menu"
                            icon={<IoIosMenu size={20} color="gray.400" />}
                        />
                    </HStack>
                    <MenuList minW={450} border='none' boxShadow='0px 2px 6px 0px #2D3B430F' p={2}>
                        <HStack p={3} spacing={3}>
                            <Avatar 
                                bgGradient='linear(to-r, #5C6670, #131316)' 
                                size='md' 
                                color='white'
                                name={`${user.data.first_name} ${user.data.last_name}`} 
                                src=''
                            />

                            <Stack spacing={2}>
                                <Heading fontSize='1.25rem' lineHeight='1rem' fontWeight='600' textTransform='capitalize'>{`${user.data.first_name} ${user.data.last_name}`}</Heading>
                                <Text color='gray.400' fontSize='0.875rem' lineHeight='1rem' fontWeight='500'>{user.data.email}</Text>
                            </Stack>
                        </HStack>

                        {settings.map((setting) => (
                           <MenuItem key={setting.label} bg='white' my={1} p={3}>
                               <setting.Icon size={15} />
                                <Text 
                                    fontWeight={600}
                                    fontSize='1rem'
                                    lineHeight='1.5rem'
                                    color='black.300' 
                                    ml={3}
                                >
                                    {setting.label}
                                </Text>
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </HStack>
        </HStack>
    );
};

export default NavBar;