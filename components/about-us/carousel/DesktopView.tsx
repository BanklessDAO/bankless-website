import { Heading, Stack, Image } from '@chakra-ui/react'
import { ulid } from 'ulid'
import cards from './cardContent.json'
import styles from 'styles/DesktopView.module.css'

export default function DesktopView() {
  return (
    <Stack pb={12} width='100%'>
      <Heading
        fontSize={{ base: '2xl', md: '3xl' }}
        color={'white.100'}
        fontWeight={600}
        lineHeight={1.5}
        fontFamily='Clear Sans'
        alignSelf={'center'}
        pb={12}
      >
        OUR VALUES
      </Heading>
      <div className={`${styles['card-group']}`}>
        {cards.map(card => {
          return (
            <div className={`${styles['card-content']}`} key={ulid()}>
              <Image
                src={`${card.image}`}
                alt=''
                className={`${styles['card-img']}`}
              />
              <div className={`${styles['card-body']}`}>
                <div
                  className={`${styles['card-title']}`}
                >{`${card.title}`}</div>
                <div className={`${styles['card-text']}`}>{`${card.text}`}</div>
              </div>
            </div>
          )
        })}
      </div>
    </Stack>
  )
}
