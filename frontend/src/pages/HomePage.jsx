import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../compos/ProductCard';
import { useProductStore } from '../store/product';

const HomePage = () => {

  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("products", products);
  return (
    <Container maxW="container.xl" py={12}>
      <VStack wordSpacing={8}>
        <Text
          fontSize={"xl"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Current Projects:
        </Text>
        <Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
          Edit or delete your products here.
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          width={"full"}
          spacing={10}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (<Text fontSize={'xl'} textAlign={'center'} fontWeight={"bold"} color={'gray.500'}>
          No product found. Please create a new product.
          <Link to={"/create"}>
            <Text as={"span"} color={"pink.500"} fontWeight={"bold"} _hover={{ textDecoration: "underline" }}> Create New Product</Text>
          </Link>
        </Text>)}
      </VStack>
    </Container>
  )
}

export default HomePage