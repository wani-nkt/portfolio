import Image from 'next/image'
import { useState } from 'react';
import Modal from 'react-modal'
import WorksModalContent from '../components/WorksModal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function WorksPage() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <div className='flex justify-center items-center font-notosans font-light text-center'>
                <div>
                    <h2 className=' text-4xl mt-10 font-normal'>Works</h2>
                    <div className=' border-black border rounded-3xl p-10 mt-10'>
                        <h3 className='text-3xl'>研究室向けデジタルサイネージ</h3>
                        <p className='text-xl p-5'>2023 May</p>
                        <div className='flex justify-center items-center'>
                            <Image src="/image/watalab_signage.png"
                                width={480}
                                height={270}
                                alt="nkt logo" />
                        </div>
                        <div className='flex justify-end'>
                            <button onClick={openModal} className='pt-2 text-right'>詳細を見る</button>
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Works Modal"
                >
                    <button onClick={closeModal} className='font-notosans font-extralight'>閉じる</button>
                    <WorksModalContent />
                </Modal>

            </div>

        </>
    )
}
