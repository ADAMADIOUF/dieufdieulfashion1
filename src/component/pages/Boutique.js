import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context'
import { FaWhatsappSquare,FaEye } from 'react-icons/fa';

export default function Boutique() {
  const{boutique}= useGlobalContext()
  return (
    <section className='section-center boutique'>

      <div className="boutique-product-container">
{
  boutique.map((boutique) =>{
    const{images,id,name,price}= boutique
    return (
      <article className='boutique-details' key={id}>
        <Link to={`/singleBoutique/${id}`}>
          <img src={images[0]} alt='' />
        </Link>
        <div className='boutique-info'>
          <h3>{name}</h3>
          <h4>{price}CFA</h4>
        </div>
        <div className='boutique-icons'>
          <button>
            <FaWhatsappSquare />
          </button>
          <Link to={`/singleBoutique/${id}`}>
            <button>
              <FaEye />
            </button>
          </Link>
        </div>
      </article>
    );
  })
}
      </div>
    </section>
  )
}
