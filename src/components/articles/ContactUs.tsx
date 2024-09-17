import StellarResource from '@/assets/Stellar-Resource.svg'
import ShimmerButton from '../magicui/shimmer-button'
import Image from 'next/image'

export default function ContactUs() {
    return (
        <>
            <article className="flex justify-between items-center w-full mt-[6rem]">
                <div className="flex justify-center w-1/2">
                <ShimmerButton>
                    Envía tu mensaje
                </ShimmerButton>
                </div>
                <div className="w-[40%]">
                    <Image
                        src={StellarResource}
                        alt="Stellar"
                        width={500}
                    />
                </div>
            </article>
        </>
    )
}