import Header from '../components/Header'
import Image from 'next/image'

export default function IndexPage() {
  return (
    <>
      <Header />
      <div className='flex justify-center items-center font-notosans m-32'>
          <Image
            src="/image/nkt_logo_v2.png"
            width={300}
            height={300}
            alt="nkt logo"
          />
        </div>
    </>
  )
}
