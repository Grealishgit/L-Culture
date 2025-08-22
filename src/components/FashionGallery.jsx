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

            <div className="columns-2 sm:columns-2 md:columns-4 gap-4 space-y-4">
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Fashion ${idx + 1}`}
                        className="w-full mb-4  shadow-lg break-inside-avoid"
                    />
                ))}
            </div>
        </div>
    )
}

export default FashionGallery