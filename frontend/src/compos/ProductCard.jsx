import { Box, Image, Heading, Text, HStack, IconButton } from "@chakra-ui/react";
import React from "react";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { useProductStore } from "../store/product";
const ProductCard = ({ product }) => {
  const {deleteProduct} = useProductStore()
  const handleDeleteProduct = async (pid) => {
    const {success, message} = await deleteProduct(pid)
  }
  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "xl",
      }}
    >
      <Image
        src={product.image || "/placeholder-image.png"} 
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <Text fontSize="xl" fontWeight="bold" color="pink.500">
          Rupees {product.price}
        </Text>
        <Text fontSize="sm" color="gray.500" noOfLines={2}>
          {product.description}
        </Text>
        <HStack wordSpacing={2}>
          <IconButton
          //icon for edit and delete
            icon={<MdEdit />}
            colorScheme="pink"
            aria-label="Edit"
          />
          <IconButton
            icon={<AiFillDelete />}  
            colorScheme="cyan"
            aria-label="Delete"
            onClick={()=>handleDeleteProduct(product._id)} 
          />
        </HStack>
      </Box>
      
    </Box>
  );
};

export default ProductCard;
