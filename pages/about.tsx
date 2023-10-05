import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      <div className='flex justify-center font-notosans items-center'>
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
          <div className='text-xl font-light'>
            <div className='text-center mt-10'>
              <p>Osaka University</p>
              <p>The Graduate School of Information Science and Technology</p>
              <p>M2</p>
            </div>
            <div className='text-center mt-10'>
              <p>Web開発を勉強中</p>
              <p>フロントエンド開発のアルバイト経験あり</p>
            </div>
            <div className='text-center mt-10'>
              <a href='https://github.com/wani-nkt/portfolio' className=' underline text-nkt-blue  underline-offset-4'>GitHub repository</a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
