import { Box } from '@chakra-ui/react'
import { ChakraNextImage } from 'components/common/ChakraNextImage'

type ConsultImageProps = {
    alt: string
    src: string
}

export const ConsultImage = ({alt, src}: ConsultImageProps) => (
  <Box
    position={'relative'}
    height={{base: '350px', lg: '440px', 'xl': '600px'}}
    rounded={'2xl'}
    boxShadow={'2xl'}
    width={'full'}
    overflow={'hidden'}>
    <ChakraNextImage
      alt={alt}
      fit={'cover'}
      align={'center'}
      w={'100%'}
      h={'100%'}
      src={src}
    />
  </Box>
)
