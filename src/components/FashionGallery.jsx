import React from 'react'
import { motion } from 'motion/react'
import { images } from '../utils/data'

import image5 from '../assets/f1 (18).jpg'
import image6 from '../assets/f1 (20).jpg'
import image21 from '../assets/f1 (21).jpg'
import image12 from '../assets/f1 (4).jpg'
import image13 from '../assets/f1 (35).jpg'
import image10 from '../assets/f1 (16).jpg'



const FashionGallery = () => {
    // const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15];
    return (
        <div className="w-full min-h-screen -mt-4 p-2 bg-white/80" id="home">
            <section id="about">
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:text-4xl text-2xl font-semibold">
                    Experience the timeless style and cultural richness of the fashion Africa through <br /> our curated gallery.
                </motion.p>
                <hr className='my-4 border-t-2 border-gray-200' />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className='mb-2 font-semibold'>Fashion Through the Decades-African Fashion from the 60's to the Present.
                </motion.p>
            </section>

            <div className="columns-2 sm:columns-2 md:columns-4 gap-3 space-y-4" id='gallery'>
                {images.map((img, idx) => (
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        key={idx}
                        src={img}
                        alt={`Fashion ${idx + 1}`}
                        className="w-full mb-4 break-inside-avoid"
                    />
                ))}
            </div>


            <div className='mt-10 p-5 w-full' id='highlights'>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='font-semibold text-2xl mb-2'>
                    The story Behind the African Fashion.
                </motion.h1>
                <div className='flex flex-col md:flex-row gap-4 mt-4'>
                    <div className='flex-1'>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >The African fashion industry is a vibrant and dynamic space that reflects the continent's rich cultural heritage and diversity.
                            From traditional garments to contemporary designs, African fashion tells the story of its people, their history,
                            and their aspirations.
                        </motion.p>

                        <motion.p
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.2 }}
                            className='mt-5'>
                            The African fashion industry is not just about clothing; it's a powerful means of expression and identity for many.
                            Designers draw inspiration from their cultural roots,
                            using traditional techniques and materials to create pieces that resonate with both local and global audiences.
                        </motion.p>

                        <motion.p
                            initial={{ y: 60, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2.5, delay: 0.2 }}
                            className='mt-5'>
                            Rooted in tradition, African fashion is a celebration of cultural identity and creativity.
                            Today, it continues to evolve, incorporating modern influences while honoring its rich heritage.
                            The industry is thriving, with designers gaining international recognition and showcasing their work on global platforms.
                        </motion.p>
                    </div>

                    <div className='flex-1'>
                        <img src={image6} alt="" className='w-full md:h-80 h-auto object-cover' />
                    </div>
                </div>
            </div>


            {/* Fashion Africa Highlights */}
            <div className='w-full p-4 mt-5'>
                <motion.h1
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='font-semibold text-2xl mb-2'>
                    Fashion Africa Highlights
                </motion.h1>

                <div className='flex flex-col gap-4 md:flex-row w-full'>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='flex-1'>
                        <motion.img
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            src={image21} alt="" className='w-full h-150 object-cover' />
                    </motion.div>
                    <div className='flex-1'>
                        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                            {images.slice(7, 13).map((img, idx) => (
                                <motion.img
                                    key={idx}
                                    src={img}
                                    alt={`Fashion ${idx + 1}`}
                                    className="w-full h-70 object-cover"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className='mt-6'>
                    <div className='flex flex-col gap-4 md:flex-row w-full'>
                        <div className='flex-1'>
                            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                                {images.slice(14, 20).map((img, idx) => (
                                    <motion.img
                                        key={idx}
                                        src={img}
                                        alt={`Fashion ${idx + 1}`}
                                        className="w-full h-70 object-cover"
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
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
                                {images.slice(21, 27).map((img, idx) => (
                                    <motion.img
                                        key={idx}
                                        src={img}
                                        alt={`Fashion ${idx + 1}`}
                                        className="w-full h-70 object-cover"
                                        initial={{ x: 70, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* cultural insights */}
            <div className='mt-10 p-5 w-full' id='insights'>
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='font-semibold text-2xl mb-2'>Cultural Insights
                </motion.h1>
                <div className='flex flex-col md:flex-row gap-4 mt-4'>
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='flex-1'>
                        <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='text-gray-600'>
                            Discover the rich cultural heritage and contemporary influences that shape African fashion.
                            From traditional textiles to modern designs, explore the stories behind the garments.
                            In this section, we delve into the cultural significance of fashion in Africa,
                            highlighting key trends and influential designers.
                        </motion.p>
                        <motion.p
                            initial={{ y: 60, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className='mt-5 text-gray-700'>
                            <strong>Key Trends:</strong> Explore the latest trends in African fashion, from vibrant prints to innovative designs.
                            From traditional garments to contemporary streetwear, discover how designers are blending cultural heritage with modern aesthetics.
                            Engraved patterns and intricate beadwork are making a comeback, showcasing the craftsmanship of African artisans.
                        </motion.p>

                        <motion.p
                            initial={{ y: 90, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2.5, delay: 0.8 }}
                            className='mt-5 text-gray-800'>
                            <strong>Influential Designers:</strong> Meet the trailblazers of African fashion who are redefining the industry.
                            From established names to emerging talents, these designers are making waves on the global stage.
                            Their unique perspectives and innovative approaches are shaping the future of fashion in Africa.
                        </motion.p>

                        <motion.p
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 3.0, delay: 0.9 }}
                            className='mt-5 text-gray-900'>
                            <strong>Emerging Voices:</strong> Discover the new generation of African designers who are pushing boundaries and challenging norms.
                            These creatives are using fashion as a platform for social change, addressing issues such as sustainability, identity, and representation.
                        </motion.p>
                    </motion.div>
                    <div className='flex-1'>
                        <motion.img
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            src={image13} alt="" className='w-full h-50 object-cover' />
                        <motion.img
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            src={image10} alt="" className='w-full h-50 object-cover' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FashionGallery