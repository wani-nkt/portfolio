import Header from '../components/Header'

export default function AboutPage() {
    return (
        <>
            <Header />
            <div className='flex justify-center items-center font-notosans text-center'>
                <div>
                    <h2 className=' text-5xl mt-10'>Contact</h2>
                    <div>
                        <h3 className='text-3xl mt-16'>Email</h3>
                        <p className='text-xl mt-5'>
                            nakato.osaka@gmail.com
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}
