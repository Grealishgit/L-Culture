import React from 'react'
import bg from '../assets/bg.jpg'
import TextPressure from './TextPressure';
import { motion } from 'motion/react'

const Header = () => {
    return (
        <div className='flex flex-col absolute top-0 left-0 object-cover w-full items-center justify-center min-h-screen'
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className='items-center text-center space-y-2 flex flex-col'>

                <motion.h1
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-white md:text-8xl text-5xl font-bold'>Fashion Africa</motion.h1>


                <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-white text-lg'>A show of elegant African fashion</motion.p>

                <button className='px-3 py-2.5 border cursor-pointer mt-4 text-white border-white rounded'>
                    Explore the fashion
                </button>
            </motion.div>

            <div className='absolute items-center flex bottom-0 p-4'>
                <motion.p
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-white text-center'>
                    A vibrant showcase of African culture and style. Experience the richness of African heritage through fashion.
                </motion.p>
            </div>
        </div>
    )
}

export default Header