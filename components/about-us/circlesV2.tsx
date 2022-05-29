import { border, Box, Grid, GridItem, Image, VStack } from '@chakra-ui/react'
import { ulid } from 'ulid'

const Center = () => (
  <GridItem w={'21%'} h={'21%'} gridArea='1/1/1/1'>
    <Image
      alt='orbit'
      w='100%'
      h='100%'
      borderRadius='50%'
      src={'/images/about-image-orbit-center.png'}
    />
  </GridItem>
)

const Ring1 = ({ ringWidth, border }) => {
  const rings = [
    {
      rotation: '0',
      innerCircleSize: 20,
      imgSrc: '/images/about-image-orbit-mid-1.png',
    },
    {
      rotation: '135',
      innerCircleSize: 20,
      imgSrc: '/images/about-image-orbit-mid-2.png',
    },
    {
      rotation: '250',
      innerCircleSize: 20,
      imgSrc: '/images/about-image-orbit-mid-3.png',
    },
    { color: '#606060', rotation: '48', innerCircleSize: 15 },
  ]
  return (
    <GridItem
      w={`${ringWidth}%`}
      h={`${ringWidth}%`}
      gridArea='1/1/1/1'
      border={border || 'none'}
      borderRadius='50%'>
      <Grid
        w='100%'
        h='100%'
        borderRadius='50%'
        templateColumns='1fr'
        templateRows='1fr'
        alignItems='center'
        justifyItems='center'>
        {rings.map(({ color, rotation, innerCircleSize, imgSrc }) => {
          const CIRCLE_CONSTANT = 68 // Helps us maintain the innerCircles on a main axis
          const circleSize = CIRCLE_CONSTANT + innerCircleSize
          return (
            <GridItem
              key={ulid()}
              w={`${circleSize}%`}
              h={`${circleSize}%`}
              gridArea='1/1/1/1'
              transform={`rotate(${rotation}deg)`}>
              <Box
                w={`${innerCircleSize}%`}
                h={`${innerCircleSize}%`}
                gridArea='1/1/1/1'
                backgroundColor={color || 'transparent'}
                borderRadius='50%'>
                {imgSrc && (
                  <Image
                    w='100%'
                    h='100%'
                    src={imgSrc}
                    transform={`rotate(${-rotation}deg)`}
                  />
                )}
              </Box>
            </GridItem>
          )
        })}
      </Grid>
    </GridItem>
  )
}

const Ring2 = ({ ringWidth, border = null }) => {
  const rings = [
    
    {
      color: '#FF1013',
      rotation: '290',
      innerCircleSize: 8,
    },
    {
      color: '#FF1013',
      rotation: '175',
      innerCircleSize: 8,
    },
    
  ]
  return (
    <GridItem
      w={`${ringWidth}%`}
      h={`${ringWidth}%`}
      gridArea='1/1/1/1'
      border={border || 'none'}
      borderRadius='50%'>
      <Grid
        w='100%'
        h='100%'
        borderRadius='50%'
        templateColumns='1fr'
        templateRows='1fr'
        alignItems='center'
        justifyItems='center'>
        {rings.map(({ color, rotation, innerCircleSize, imgSrc }) => {
          const CIRCLE_CONSTANT = 68 // Helps us maintain the innerCircles on a main axis
          const circleSize = CIRCLE_CONSTANT + innerCircleSize
          return (
            <GridItem
              key={ulid()}
              w={`${circleSize}%`}
              h={`${circleSize}%`}
              gridArea='1/1/1/1'
              transform={`rotate(${rotation}deg)`}>
              <Box
                w={`${innerCircleSize}%`}
                h={`${innerCircleSize}%`}
                gridArea='1/1/1/1'
                backgroundColor={color || 'transparent'}
                borderRadius='50%'>
                {imgSrc && (
                  <Image
                    w='100%'
                    h='100%'
                    src={imgSrc}
                    transform={`rotate(${-rotation}deg)`}
                  />
                )}
              </Box>
            </GridItem>
          )
        })}
      </Grid>
    </GridItem>
  )
}

const Ring3 = ({ ringWidth, border = null }) => {
  const rings = [
    {
      rotation: '-45',
      imgSrc: '/images/about-image-orbit-outer-3.png',
      innerCircleSize: 16,
    },
    {
      rotation: '75',
      innerCircleSize: 16,
      imgSrc: '/images/about-image-orbit-outer-1.png',
    },
    {
      rotation: '200',
      imgSrc: '/images/about-image-orbit-outer-2.png',
      innerCircleSize: 16,
    },
    {
      color: '#FF1013',
      rotation: '10',
      innerCircleSize: 10,
    },
    {
      color: '#FF1013',
      rotation: '120',
      innerCircleSize: 10,
    },
    {
      color: '#606060',
      rotation: '-90',
      innerCircleSize: 10,
    },
  ]
  return (
    <GridItem
      w={`${ringWidth}%`}
      h={`${ringWidth}%`}
      gridArea='1/1/1/1'
      border={border || 'none'}
      borderRadius='50%'>
      <Grid
        w='100%'
        h='100%'
        borderRadius='50%'
        templateColumns='1fr'
        templateRows='1fr'
        alignItems='center'
        justifyItems='center'>
        {rings.map(({ color, rotation, innerCircleSize, imgSrc }) => {
          const CIRCLE_CONSTANT = 68 // Helps us maintain the innerCircles on a main axis
          const circleSize = CIRCLE_CONSTANT + innerCircleSize
          return (
            <GridItem
              key={ulid()}
              w={`${circleSize}%`}
              h={`${circleSize}%`}
              gridArea='1/1/1/1'
              transform={`rotate(${rotation}deg)`}>
              <Box
                w={`${innerCircleSize}%`}
                h={`${innerCircleSize}%`}
                gridArea='1/1/1/1'
                backgroundColor={color || 'transparent'}
                borderRadius='50%'>
                {imgSrc && (
                  <Image
                    w='100%'
                    h='100%'
                    src={imgSrc}
                    transform={`rotate(${-rotation}deg)`}
                  />
                )}
              </Box>
            </GridItem>
          )
        })}
      </Grid>
    </GridItem>
  )
}

const CirclesV2 = () => (
  <VStack>
    <Grid
      backgroundColor='black'
      w='53vw'
      h='53vw'
      borderRadius='50%'
      templateColumns='1fr'
      templateRows='1fr'
      alignItems='center'
      justifyItems='center'>
      <Center />
      <Ring1 border='6px solid rgba(255, 16, 19, 0.15);' ringWidth='43' />
      <Ring2 ringWidth='53' />
      <Ring3 ringWidth='66' />
    </Grid>
  </VStack>
)

export default CirclesV2
