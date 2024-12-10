import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Cover from '../../../public/cover.jpg'
import CoverMap from '../../../public/map.png'
import './home.css'

import { FaHotel } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function Home() {
  const Product = [
    {
      name: 'Hotel',
      detail: 'tempat penginapan kami setara hotel bintang 4, dengan suasana yang segar dan sunyi.',
      navigation: './product',
      icon: 'FaHotel',
    },
    {
      name: 'Klinik Pratama',
      detail: 'tempat penginapan kami setara hotel bintang 4, dengan suasana yang segar dan sunyi.',
      navigation: './product',
      icon: 'FaHotel',
    },
    {
      name: 'IT For Public',
      detail: 'tempat penginapan kami setara hotel bintang 4, dengan suasana yang segar dan sunyi.',
      navigation: './product',
      icon: 'FaHotel',
    },
    {
      name: 'Balai Sidang',
      detail: 'tempat penginapan kami setara hotel bintang 4, dengan suasana yang segar dan sunyi.',
      navigation: './product',
      icon: 'FaHotel',
    },
    {
      name: 'Training Institute',
      detail: 'tempat penginapan kami setara hotel bintang 4, dengan suasana yang segar dan sunyi.',
      navigation: './product',
      icon: 'FaHotel',
    },
  ]
  return (
    <>
      <Navbar />
      <div>
        <div className='home-cover' style={{ backgroundImage: `url(${Cover})` }}>
          <div className='home-content'>
            <h2>Selamat Datang Di Pusat Pengembangan Bisnis dan Investasi</h2>
            <h2>Lembaga yang bertujuan untuk mendukung pertumbuhan dan pengembangan bisnis di Universitas Terbuka</h2>
            <p>menyediakan berbagai layanan dan sumber daya kepada pemilik bisnis, pengusaha, atau calon pengusaha yang ingin meningkatkan kinerja dan kesuksesan bisnis mereka. Fungsi dan layanan yang ditawarkan oleh Pusat Pengembangan Bisnis dapat bervariasi tergantung pada negara, wilayah, atau lembaga yang bersangkutan,</p>
            <div className='action'>
              <button>Contact Us</button>
            </div>
          </div>
          <div className='shadow-cover'></div>
        </div>
        <div className='home-labelInformation'>
          <div className='detail'>
            <h1>8+</h1>
            <div className='desc'>
              <p>Bisnis Berjalan</p>
            </div>
          </div>
          <div className='detail'>
            <h1>12+</h1>
            <div className='desc'>
              <p>Mitra Kerjasama</p>
            </div>
          </div>
          <div className='detail'>
            <h1>210+</h1>
            <div className='desc'>
              <p>Pegawai Aktif</p>
            </div>
          </div>
          <div className='detail'>
            <h1>20+</h1>
            <div className='desc'>
              <p>Penghargaan Bisnis</p>
            </div>
          </div>
        </div>
      </div>
      <div className='home-product' style={{backgroundImage: `url(${CoverMap})`}}>
        <div className='label'>
          <h2>Produk Kami Dapat Membantu Anda</h2>
          <p>Kami dapat menyesuaikan bisnis yang anda inginkan</p>
        </div>
        <div className='home-cardProduct'>
          {Product.map((data, index) =>
            <div key={index} className='card'>
              <div className='icon'>
                <FaHotel/>
              </div>
              <div className='detail'>
                <h2>{data.name}</h2>
                <p>{data.detail}</p>
              </div>
              <div className='action'>
                <p>Learn More</p>
                <IoIosArrowForward />
              </div>
            </div>
          )
          }

        </div>
      </div>
    </>
  )
}

export default Home;