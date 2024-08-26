import React from 'react';
import Banner from '@/components/banner';
import Image from 'next/image';

export default function Page() {
    return (
        <main>
            <Banner imageSrc="/bannerinst.jpg" title="Meet Our Instructors" />
            <div className="mt-12 flex flex-col md:flex-row items-center mb-12 px-5 md:px-20">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-8 flex-shrink-0">
                    <Image
                        src="/iggy.jpg" 
                        alt="Instructor Ingmar"
                        width={192}
                        height={192}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-2">Ingmar</h2>
                    <p className="text-lg text-zinc-700">
                    Born of Salvadoran descent, Ingmar has always been surrounded by Latin culture. 
                    With a desire to get more in touch with his roots, Ingmar joined the UWO Salsa Club in 2012; 
                    honing his skills and eventually elevating his level to become assistant instructor. 
                    In 2012 he also joined the UWO performance team and performed in half time shows, 
                    community events and the Toronto Salsa Festival. Since moving to Toronto in 2016, 
                    Ingmar is a long-time member of the dance community and continues mastering his 
                    craft by continually taking lessons, partaking in workshops and social dancing regularly.
                    </p>
                </div>
            </div>
    
            <hr className="border-t border-gray-300 my-8" />
    
            <div className=" mt-12 mb-12 flex flex-col md:flex-row-reverse items-center px-5 md:px-20">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 md:mb-0 md:ml-8 flex-shrink-0">
                    <Image
                        src="/instructorM.jpg" 
                        alt="Instructor Maria"
                        width={192}
                        height={192}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-2">Maria</h2>
                    <p className="text-lg text-zinc-700">
                        Born and raised in Chile, Maria has been passionate about Bachata since 2015 when she first started 
                        taking classes back home. Her love for dance quickly grew, leading her to participate in competitions. 
                        Upon moving to Toronto, Maria felt a deep longing to stay connected to her roots. This inspired her to 
                        specialize in sensual Bachata and share her expertise by teaching beginner classes. With her warm and 
                        engaging approach, Maria helps new dancers find their rhythm and confidence on the dance floor.                    
                    </p>
                </div>
            </div>
        </main>
    );
}
