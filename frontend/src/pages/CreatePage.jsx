import { Box, Button, Container, Heading, Input, Toaster, VStack } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react'
import { useColorModeValue } from '../components/ui/color-mode';
import { useProductStore } from '../store/product';
const CreatePage = () => {

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { createProduct } = useProductStore();
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct)
    if (!success) {
      Toaster({
        title: "error",
        description: message,
        status: "error",
        duration: 3500,
        isClosable: true,
      })
    } else {
      Toaster({
        title: "success",
        description: message,
        status: "success",
        duration: 3500,
        isClosable: true,
      })
    }
    setNewProduct({ name: "", price: "", image: "" })
  }
  return (
    <Container maxW={"container.sm"}>
      <VStack wordSpacing={8}>
        <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box
          w={'full'} bg={useColorModeValue("white", "gray.900")} p={6} rounded={"lg"} shadow={"md"}>
          <VStack wordSpacing={4} >
            <Input
              placeholder='Product Name'
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <Input
              placeholder='Price'
              name='price'
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <Input
              placeholder='Image URL'
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />
            <Button bgColor={useColorModeValue("cyan", "cyan")} onClick={handleAddProduct} w='full'>Add Product</Button>
          </VStack>
        </Box>

      </VStack>
    </Container>
  )
}

export default CreatePage