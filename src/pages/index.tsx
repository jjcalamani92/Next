import type { NextPage } from 'next'
import { HomeLayout } from '../components/layouts';
import { Typography } from '@mui/material'

const Home: NextPage = () => {
  return (
    <HomeLayout
      title={'Inicio - Home'} pageDescription={'Encuentra tu ropa favorita'}
    >
      <Typography variant='h1' component='h1' >Tienda</Typography>
      <Typography variant='h2' sx={{mb: 1}} >Todos los Productos</Typography>
    </HomeLayout>
  )
}

export default Home
