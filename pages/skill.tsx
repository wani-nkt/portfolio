import Header from '../components/Header'

export default function AboutPage() {
    return (
        <>
            <Header />
            <div className='flex justify-center items-center font-notosans text-center'>
                <div>
                    <h2 className=' text-5xl mt-10'>Skill</h2>
                    <div>
                        <h3 className='text-3xl mt-16'>Languages</h3>
                        <p className='text-xl mt-5'>
                            HTML, CSS, TypeScript, JavaScript, Python, C, ...
                        </p>
                    </div>
                    <div>
                        <h3 className='text-3xl mt-16'>Frameworks</h3>
                        <p className='text-xl mt-5'>
                            HTML, CSS, TypeScript, JavaScript, Python, C, ...
                        </p>
                    </div>
                    <div>
                        <h3 className='text-3xl mt-16'>Tools</h3>
                        <p className='text-xl mt-5'>
                            Docker, git, Visual Studio Code, ... 
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}
