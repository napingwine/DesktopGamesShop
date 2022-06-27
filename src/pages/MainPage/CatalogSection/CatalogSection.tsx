import React, { FC, useEffect, useState } from 'react';
import './CatalogSection.scss'
import { NavLink } from 'react-router-dom';
import catalog1 from '../../../assets/images/catalog-1.png';
import catalog2 from '../../../assets/images/catalog-2.png';
import catalog3 from '../../../assets/images/catalog-3.png';
import catalog4 from '../../../assets/images/catalog-4.png';
import catalog5 from '../../../assets/images/catalog-5.png';
import CustomButton from '../../../components/Buttons/CustomButton'
import useWindowDimensions from "../../../hooks/useWindowDimensions"

const CatalogSection: FC = () => {
  const { width: widowsWidth } = useWindowDimensions();
  const [allCatalog, setAllCatalog] = useState<boolean>(true);

  useEffect(() => {
    if (widowsWidth > 769) {
      setAllCatalog(true)
    } else {
      setAllCatalog(false)
    }
  }, [widowsWidth])

  return (
    <section className="container catalog">
      <h2 className="catalog__title">Каталог</h2>
      <div className="catalog__options">
        <NavLink to='catalogue' className="catalog__options__option big" state={'Настольные игры'}>
          <img src={catalog1} alt="catalog Image" className='proportion-width' />
          <span>Настольные игры</span>
        </NavLink>
        <NavLink to='catalogue' className="catalog__options__option small1" state={'Варгеймы'}>
          <img src={catalog2} alt="catalog Image" className='proportion-width' />
          <span>Варгеймы</span>
        </NavLink>
        <NavLink to='catalogue' className="catalog__options__option small2" state={'Краски'}>
          <img src={catalog4} alt="catalog Image" className='proportion-width' />
          <span>Краски</span>
        </NavLink>
        <NavLink to='catalogue' className="catalog__options__option small3" state={'Magic:the Cathering'}>
          <img src={catalog3} alt="catalog Image" className='proportion-width' />
          <span>Magic:the Cathering</span>
        </NavLink>
        <NavLink to='catalogue' className="catalog__options__option small4" style={{textDecoration:'none'}}>
          {allCatalog && <><img src={catalog5} alt="catalog Image" className='proportion-width' /><span>Весь каталог</span></>}
          {!allCatalog && <CustomButton buttonText='Весь каталог' />}
        </NavLink>
      </div>
    </section>
  );
};

export default CatalogSection;