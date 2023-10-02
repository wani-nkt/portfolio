import Header from '../components/Header'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className='flex justify-center items-center font-notosans'>
        <div>
          <h2 className='text-center text-4xl mt-10'>About</h2>
          <div className='flex justify-center items-center mt-10'>
            <Image
              src="/image/nkt_logo_v2.png"
              width={150}
              height={150}
              alt="nkt logo"
            />
          </div>
          <div className='text-xl'>
            <div className='text-center mt-10'>
              <p>Osaka University</p>
              <p>The Graduate School of Information Science and Technology</p>
              <p>M2</p>
            </div>
            <div className='text-center mt-10'>
              <p>Web開発を勉強中</p>
              <p>フロントエンド開発のアルバイト経験あり</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
