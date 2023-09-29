import { Box, Grid, GridItem, Image, VStack } from '@chakra-ui/react'
import { ulid } from 'ulid'

const Center: React.FC = () => (
  <GridItem w={'21%'} h={'21%'} gridArea='1/1/1/1'>
    <Image
      alt='orbit'
      w='100%'
      h='100%'
      borderRadius='50%'
      src={'/bankless-website/images/about-image-orbit-center.png'}
    />
  </GridItem>
)

type RingProps = {
  ringWidth: string
}

const Ring1 = ({ ringWidth }: RingProps) => {
  const rings = [
    {
      rotation: '0',
      innerCircleSize: 20,
      imgSrc: '/bankless-website/images/about-image-orbit-mid-1.png',
    },
    {
      rotation: '135',
      innerCircleSize: 20,
      imgSrc: '/bankless-website/images/about-image-orbit-mid-2.png',
    },
    {
      rotation: '250',
      innerCircleSize: 20,
      imgSrc: '/bankless-website/images/about-image-orbit-mid-3.png',
    },
    { color: '#606060', rotation: '52', innerCircleSize: 14 },
  ]
  return (
    <GridItem
      w={`${ringWidth}%`}
      h={`${ringWidth}%`}
      gridArea='1/1/1/1'
      border='6px solid rgba(255, 16, 19, 0.15);'
      borderRadius='50%'
    >
      <Grid
        w='100%'
        h='100%'
        borderRadius='50%'
        templateColumns='1fr'
        templateRows='1fr'
        alignItems='center'
        justifyItems='center'
      >
        {rings.map(({ color, rotation, innerCircleSize, imgSrc }) => {
          const CIRCLE_CONSTANT = 68 // Helps us maintain the innerCircles on a main axis
          const circleSize = CIRCLE_CONSTANT + innerCircleSize
          return (
            <GridItem
              key={ulid()}
              w={`${circleSize}%`}
              h={`${circleSize}%`}
              gridArea='1/1/1/1'
              transform={`rotate(${rotation}deg)`}
            >
              <Box
                w={`${innerCircleSize}%`}
                h={`${innerCircleSize}%`}
                gridArea='1/1/1/1'
                backgroundColor={color || 'transparent'}
                borderRadius='50%'
              >
                {imgSrc && (
                  <Image
                    w='100%'
                    h='100%'
                    src={imgSrc}
                    transform={`rotate(${-rotation}deg)`}
                    alt='orbit'
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

const Ring2 = ({ ringWidth }: RingProps) => {
  const rings = [
    {
      color: '#D02128',
      rotation: '290',
      innerCircleSize: 8,
    },
    {
      color: '#D02128',
      rotation: '175',
      innerCircleSize: 8,
    },
  ]
  return (
    <GridItem
      w={`${ringWidth}%`}
      h={`${ringWidth}%`}
      gridArea='1/1/1/1'
      border='none'
      borderRadius='50%'
    >
      <Grid
        w='100%'
        h='100%'
        borderRadius='50%'
        templateColumns='1fr'
        templateRows='1fr'
        alignItems='center'
        justifyItems='center'
      >
        {rings.map(({ color, rotation, innerCircleSize }) => {
          const CIRCLE_CONSTANT = 68 // Helps us maintain the innerCircles on a main axis
          const circleSize = CIRCLE_CONSTANT + innerCircleSize
          return (
            <GridItem
              key={ulid()}
              w={`${circleSize}%`}
              h={`${circleSize}%`}
              gridArea='1/1/1/1'
              transform={`rotate(${rotation}deg)`}
            >
              <Box
                w={`${innerCircleSize}%`}
                h={`${innerCircleSize}%`}
                gridArea='1/1/1/1'
                backgroundColor={color || 'transparent'}
                borderRadius='50%'
              ></Box>
            </GridItem>
          )
        })}
      </Grid>
    </GridItem>
  )
}

const Ring3 = ({ ringWidth }: RingProps) => {
  const rings = [
    {
      rotation: '-45',
      imgSrc: '/bankless-website/images/about-image-orbit-outer-3.png',
      innerCircleSize: 16,
    },
    {
      rotation: '75',
      innerCircleSize: 16,
      imgSrc: '/bankless-website/images/about-image-orbit-outer-1.png',
    },
    {
      rotation: '200',
      imgSrc: '/bankless-website/images/about-image-orbit-outer-2.png',
      innerCircleSize: 16,
    },
    {
      color: '#D02128',
      rotation: '10',
      innerCircleSize: 10,
    },
    {
      color: '#D02128',
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
      border='none'
      borderRadius='50%'
    >
      <Grid
        w='100%'
        h='100%'
        borderRadius='50%'
        templateColumns='1fr'
        templateRows='1fr'
        alignItems='center'
        justifyItems='center'
      >
        {rings.map(({ color, rotation, innerCircleSize, imgSrc }) => {
          const CIRCLE_CONSTANT = 68 // Helps us maintain the innerCircles on a main axis
          const circleSize = CIRCLE_CONSTANT + innerCircleSize
          return (
            <GridItem
              key={ulid()}
              w={`${circleSize}%`}
              h={`${circleSize}%`}
              gridArea='1/1/1/1'
              transform={`rotate(${rotation}deg)`}
            >
              <Box
                w={`${innerCircleSize}%`}
                h={`${innerCircleSize}%`}
                gridArea='1/1/1/1'
                backgroundColor={color || 'transparent'}
                borderRadius='50%'
              >
                {imgSrc && (
                  <Image
                    w='100%'
                    h='100%'
                    src={imgSrc}
                    transform={`rotate(${-rotation}deg)`}
                    alt='orbit'
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

const Ring4 = ({ ringWidth }: RingProps) => {
  return (
    <GridItem w={`${ringWidth}%`} h={`${ringWidth}%`} gridArea='1/1/1/1'>
      <Grid
        w='100%'
        h='100%'
        templateColumns='1fr'
        templateRows='1fr'
        alignItems='center'
        justifyItems='center'
        border='rgba(255, 255, 255, 0.05) 1px solid'
        pos='relative'
        borderRadius='50%'
      >
        <GridItem w='124%' h='124%' gridArea='1/1/1/1' pos='absolute'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 781 781'
          >
            <g filter='url(#a)'>
              <path
                stroke='#131313'
                strokeWidth='63.4'
                d='M702.6 390.5a311.9 311.9 0 1 1-311.8-312 311.9 311.9 0 0 1 311.8 312Z'
              />
            </g>
            <defs>
              <filter
                id='a'
                width='780.1'
                height='780.6'
                x='.8'
                y='.2'
                colorInterpolationFilters='sRGB'
                filterUnits='userSpaceOnUse'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend
                  in='SourceGraphic'
                  in2='BackgroundImageFix'
                  result='shape'
                />
                <feGaussianBlur
                  result='effect1_foregroundBlur_741_854'
                  stdDeviation='23.3'
                />
              </filter>
            </defs>
          </svg>
        </GridItem>
      </Grid>
    </GridItem>
  )
}

const CirclesV2: React.FC = () => (
  <VStack d={{ base: 'none', md: 'flex' }} mb={{ base: 0, md: '4rem' }}>
    <Grid
      backgroundColor='black'
      w='53vw'
      h='53vw'
      borderRadius='50%'
      templateColumns='1fr'
      templateRows='1fr'
      alignItems='center'
      justifyItems='center'
    >
      <Center />
      <Ring1 ringWidth='43' />
      <Ring2 ringWidth='53' />
      <Ring4 ringWidth='84' />
      <Ring3 ringWidth='66' />
    </Grid>
  </VStack>
)

export default CirclesV2
