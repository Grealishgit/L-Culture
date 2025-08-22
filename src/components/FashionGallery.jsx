import React from 'react'
import image1 from '../assets/f1 (1).jpg'
import image2 from '../assets/f1 (2).jpg'
import image3 from '../assets/f1 (3).jpg'
import image4 from '../assets/f1 (4).jpg'
import image5 from '../assets/f1 (5).jpg'
import image6 from '../assets/f1 (6).jpg'
import image7 from '../assets/f1 (7).jpg'
import image8 from '../assets/f1 (8).jpg'
import image9 from '../assets/f1 (9).jpg'
import image10 from '../assets/f1 (10).jpg'
import image11 from '../assets/f1 (11).jpg'
import image12 from '../assets/f1 (12).jpg'
import image13 from '../assets/f1 (13).jpg'



const FashionGallery = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13];
    return (
        <div className="w-full min-h-screen -mt-4 p-2 bg-white/80">
            <p className="md:text-4xl text-2xl font-semibold">
                Experience the timeless style and cultural richness of the fashion Africa through <br /> our curated gallery.
            </p>
            <hr className='my-4 border-t-2 border-gray-200' />

            <p className='mb-2 font-semibold'>Fashion Through the Decades-African Fashion from the 60's to the Present</p>

            <div className="columns-2 sm:columns-2 md:columns-4 gap-3 space-y-4" id='gallery'>
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Fashion ${idx + 1}`}
                        className="w-full mb-4 break-inside-avoid"
                    />
                ))}
            </div>


            <div className='mt-10 p-5 w-full' id='story-behind-african-fashion'>
                <h1 className='font-semibold text-2xl mb-2'>The story Behind the African Fashion</h1>
                <div className='flex flex-col md:flex-row gap-4 mt-4'>
                    <div className='flex-1'>

                        <p>The African fashion industry is a vibrant and dynamic space that reflects the continent's rich cultural heritage and diversity.
                            From traditional garments to contemporary designs, African fashion tells the story of its people, their history,
                            and their aspirations.
                        </p>
                        <p className='mt-5'>
                            The African fashion industry is not just about clothing; it's a powerful means of expression and identity for many.
                            Designers draw inspiration from their cultural roots,
                            using traditional techniques and materials to create pieces that resonate with both local and global audiences.
                        </p>

                        <p className='mt-5'>
                            Rooted in tradition, African fashion is a celebration of cultural identity and creativity.
                            Today, it continues to evolve, incorporating modern influences while honoring its rich heritage.
                            The industry is thriving, with designers gaining international recognition and showcasing their work on global platforms.
                        </p>
                    </div>

                    <div className='flex-1'>
                        <img src={image6} alt="" className='w-full md:h-80 h-auto object-cover' />
                    </div>
                </div>
            </div>


            {/* Fashion Africa Highlights */}
            <div className='w-full p-4 mt-5'>
                <h1 className='font-semibold text-2xl mb-2'>Fashion Africa Highlights</h1>

                <div className='flex flex-col gap-4 md:flex-row w-full'>
                    <div className='flex-1'>
                        <img src={image7} alt="" className='w-full h-150 object-cover' />
                    </div>
                    <div className='flex-1'>
                        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                            {images.slice(0, 6).map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`Fashion ${idx + 1}`}
                                    className="w-full h-70 object-cover"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className='mt-6'>
                    <div className='flex flex-col gap-4 md:flex-row w-full'>
                        <div className='flex-1'>
                            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                                {images.slice(0, 6).map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Fashion ${idx + 1}`}
                                        className="w-full h-70 object-cover"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='flex-1'>
                            <img src={image5} alt="" className='w-full h-150 object-cover' />
                        </div>
                    </div>
                </div>


                <div className='mt-6'>
                    <div className='flex flex-col gap-4 md:flex-row w-full'>
                        <div className='flex-1'>
                            <img src={image12} alt="" className='w-full h-150 object-cover' />
                        </div>
                        <div className='flex-1'>
                            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                                {images.slice(0, 6).map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Fashion ${idx + 1}`}
                                        className="w-full h-70 object-cover"
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* cultural insights */}
            <div className='mt-10 p-5 w-full' id='cultural-insights'>
                <div className='flex flex-col md:flex-row gap-4 mt-4'>
                    <div className='flex-1'>
                        <h1 className='font-semibold text-2xl mb-2'>Cultural Insights</h1>
                        <p className='text-gray-600'>
                            Discover the rich cultural heritage and contemporary influences that shape African fashion.
                            From traditional textiles to modern designs, explore the stories behind the garments.
                            In this section, we delve into the cultural significance of fashion in Africa,
                            highlighting key trends and influential designers.
                        </p>
                        <p>
                            <strong>Key Trends:</strong> Explore the latest trends in African fashion, from vibrant prints to innovative designs.
                            From traditional garments to contemporary streetwear, discover how designers are blending cultural heritage with modern aesthetics.
                            Engraved patterns and intricate beadwork are making a comeback, showcasing the craftsmanship of African artisans.
                        </p>
                        <p>
                            <strong>Influential Designers:</strong> Meet the trailblazers of African fashion who are redefining the industry.
                            From established names to emerging talents, these designers are making waves on the global stage.
                            Their unique perspectives and innovative approaches are shaping the future of fashion in Africa.
                        </p>
                    </div>
                    <div className='flex-1'>
                        <img src={image13} alt="" />
                        <img src={image10} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FashionGallery