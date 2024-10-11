'use client'

import React from 'react';
import {albumsData} from "@/assets/assets";


export default function SongItem({name, image, desc}){

    return (
        <div onClick={() => console.log(typeof albumsData)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img className='rounded' src={image} alt=""/>
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-slate-200 text-sm'>{desc}</p>
        </div>
    );
};
