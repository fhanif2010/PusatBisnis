import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Cover from '../../../public/cover.jpg'
import CoverMap from '../../../public/map.png'
import Klinik from '../../../public/Klinik.jpg'
import './home.css'

import * as Icons from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";
import Button from '../../components/Button/Button';

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
      icon: 'FaHandHoldingMedical',
    },
    {
      name: 'IT For Public',
      detail: 'tempat penginapan kami setara hotel bintang 4, dengan suasana yang segar dan sunyi.',
      navigation: './product',
      icon: 'FaSitemap',
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
      icon: 'FaUsers',
    },
  ]

  const DataLabel = [
    {
      qty: 8,
      name: 'Bisnis Berjalan'
    },
    {
      qty: 12,
      name: 'Mitra Kerjasama'
    },
    {
      qty: 210,
      name: 'Pegawai Aktif'
    },
    {
      qty: 20,
      name: 'Penghargaan Bisnis'
    }
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
            <Button caption={'Contact Us'} />
          </div>
          <div className='shadow-cover'></div>
        </div>
        <div className='home-labelInformation'>
          {DataLabel.map((data, index) =>
            <div key={index} className='detail'>
              <h1>{data.qty}+</h1>
              <div className='desc'>
                <p>{data.name}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='home-product' style={{ backgroundImage: `url(${CoverMap})` }}>
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: 'inherit' }}>
          <div className='label'>
            <h2>Produk Kami Dapat Membantu Anda</h2>
            <p>Kami dapat menyesuaikan bisnis yang anda inginkan</p>
          </div>
          <div className='home-cardProduct'>
            {Product.map((data, index) => {
              const IconComponent = Icons[data.icon];
              return (
                <div key={index} className='card'>
                  <div className='icon'>
                    <IconComponent />
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
            })}
          </div>
        </div>
      </div>

      <div className='home-container'>
        <div className='home-aboutme'>
          <div className='detail'>
            <div style={{}}>
              <h1>About Us</h1>
              <h3>Boosts Your Business With Analay</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio doloremque autem quis eius tenetur voluptatibus veniam ex? Iure, magnam itaque beatae voluptas quaerat aut officia amet consectetur eaque labore?</p>
              <Button caption={'More Detail'} />
            </div>
          </div>
          <div className='image'>
            <img src={Klinik} />
          </div>
        </div>
      </div>

      <div className="home-container">
        <div className="home-review">
          <div className="label">
            <h2>Review</h2>
            <p>Discover what my client and colleagues have to say about working with me</p>
          </div>
          <div className="card-review">
            <div className="image">

            </div>
            <div className="content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum, atque nobis sed cupiditate quam iste perferendis fuga suscipit repellat assumenda eveniet odio doloremque magni praesentium accusamus, quisquam incidunt</p>
                <h4>Kevin Arjuno - Universitas Malut</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;