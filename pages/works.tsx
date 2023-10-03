import Header from '../components/Header'
import Image from 'next/image'

export default function AboutPage() {
    return (
        <>
            <div className='flex justify-center items-center font-notosans text-center'>
                <div>
                    <h2 className=' text-5xl mt-10'>Works</h2>
                    <div className=' border-black border rounded-3xl p-10 mt-10'>
                        <h3 className='text-3xl'>研究室向けデジタルサイネージ</h3>
                        <p className='text-xl p-5'>2023 May</p>
                        <div className='flex justify-center items-center'>
                            <Image src="/image/watalab_signage.png"
                                width={480}
                                height={270}
                                alt="nkt logo" />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
