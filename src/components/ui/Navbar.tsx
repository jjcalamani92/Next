import * as React from 'react';
import NextLink from 'next/link';
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, MenuIcon, Menu  } from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined  } from '@mui/icons-material';


export const Navbar = () => {

  return (
    <AppBar>
      <Toolbar>
        <NextLink href='/' passHref>
          <Link display='flex' alignItems='center'>
            <img height='60px' src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647095547/piccoletti-logo_j6hxbw.jpg" alt="logo" />

          </Link>
        </NextLink>
        <Box sx={{display:{xs: 'none', sm:'block'}}}> 
          <NextLink href='/category/men' passHref>
            <Link>
              <Button>Hombres</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/women' passHref>
            <Link>
              <Button>Mujeres</Button>
            </Link>
          </NextLink>
          <NextLink href='/category/kid' passHref>
            <Link>
              <Button>Niños</Button>
            </Link>
          </NextLink>
        </Box>

      </Toolbar>
    </AppBar>
  )
}
