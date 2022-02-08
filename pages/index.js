import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import { baseUrl, fetchApi } from '../utils/FetchApi'
import Property from '../components/Property'


export const Banner = ({ purpose, title1, title2, desc1, linkName, buttonText, desc2 }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" margin="10">
    {/* <Image src={imageUrl} width="500" height="300" alt="banner" /> */}
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1} <br /> {title2}</Text>
      <Text fontSize="lg" paddingTop="5" paddingBottom="3" color="gray.700"> {desc1} <br /> {desc2}</Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)


export default function Home({propertiesForSale, propertiesForRent}) {
  // console.log({propertiesForSale, propertiesForRent})
  return (
    <div>
      <h1>Hello world
      </h1>
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1=' Explore from Apartments, builder floors, villas'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        // imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <Flex flexWrap="wrap">
      {propertiesForRent.map((property) => 
         <Property property={property} key={property.key}/>
        )}
      </Flex>
      <Banner
        purpose='BUY A HOME'
        title1=' Find, Buy  Own Your'
        title2='Dream Home'
        desc1=' Explore from Apartments, land, builder floors,'
        desc2=' villas and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        // imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png'
      /> 
      {propertiesForRent.map((property) => 
         <Property property={property} key={property.key}/>
        )}
    </div>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props:{
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits
    }
  }
}