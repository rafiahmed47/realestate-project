import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import defaultImage from '../assets/images/house.jpg'


const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId } }) => {
    return (
        <Link href={`/property/${externalId}`} passHref>
            <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
                    <Box>
                        <Image src={coverPhoto ? coverPhoto.url : defaultImage}  height={400} width={400} alt="banner"/>
                    </Box>
            </Flex>
        </Link>
    )
}
export default Property;