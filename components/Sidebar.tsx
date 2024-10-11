'use client'

import React, {useState} from 'react';
import {HomeIcon, SearchIcon} from "lucide-react";

export default function Sidebar(){

    const [cat, setCat] = useState(false)

    return(
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white lg:flex'>
            <div className='bg-[#121212] h-[20%] rounded flex flex-col justify-around'>
                <div className='m-4 flex items-center gap-3 pl-8 cursor-pointer'>
                    <HomeIcon className='w-6'/>
                    <p className='font-bold sm:text-10px'>Домашняя страница</p></div>
                <div className='m-4 flex items-center gap-3 pl-8 cursor-pointer'>
                    <SearchIcon className='w-6'/>
                    <p className='font-bold sm:text-10px'>Поиск</p>
                </div>
            </div>
            {cat === true
                ? <div className='m-4 flex items-center gap-3 pl-8 transition-all ease-in duration-150'>
                    <img
                        className='w-[90px] rounded-lg'
                        width={500}
                        height={500}
                        src='https://media1.tenor.com/m/sVNO62-MYV0AAAAC/zxc-cat.gif'
                    />
                </div>
                : ''}
            <div className='absolute mt-[85vh] items-center gap-3 pl-8 cursor-pointer text-gray-300 hover:text-white transition-all ease-in duration-150'
                 onClick={() => setCat(!cat)}
            >
                <h1 className='font-semibold'>By Avo1d</h1>
                <img
                    className='w-[60px] rounded-lg mt-[10px]'
                    width={500}
                    height={500}
                    alt='img'
                    src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRFLGgvp-goECgdN65x6oW1Hx-2XJKT_PkTIB_Pz0xJtTIwnuV8'
                />
            </div>
        </div>
    )
}