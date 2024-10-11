'use client'

import React from 'react';
import Navbar from "./Navbar.tsx";
import { useParams } from "react-router-dom";
import {albumsData, assets, songsData} from "@/assets/assets";

export default function DisplayAlbum() {

    const {id} = useParams();
    const albumData = albumsData[id]

    return (
        <>
            <Navbar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src='https://github.com/avoidme12/music-app-react/blob/main/src/assets/img11.jpg?raw=true' alt=""/>
                <div className='flex flex-col'>
                    <p>Плейлист</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>fsdsfdsfd</h2>
                    <h4>fsdfsdsdfsdf</h4>
                    <p className='mt-1'>
                        <img className='inline-block w-5' src={assets.spotify_logo} alt=""/>
                        <b>Music App </b>
                        - <b>284,482 Лайков</b>
                        - <b>8 Треков </b>
                        - примерно 15 минут
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p><b className='mr-4'>#</b>Название</p>
                <p>Плейлист</p>
                <p className='sm:block'>Дата добавления</p>
                <img className='m-auto w-4' src={assets.clock_icon} alt=""/>
            </div>
            <hr/>
            {
                songsData.map((item, index) => (
                    <div
                         className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                        <p className='text-white'>
                            <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                            <img className='inline w-10 mr-5' src={item.image} alt=""/>
                            {item.name}
                        </p>
                        <p className='text-[15px]'>ssss</p>
                        <p className='text-[15px] sm:block'>5 дней назад</p>
                        <p className='text-[15px] text-center'>{item.duration}</p>
                    </div>
                ))
            }
        </>
    );
};
