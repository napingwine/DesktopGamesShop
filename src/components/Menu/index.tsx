import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import './Menu.scss';

const Menu = ({ burgerMenuOpen, setBurgerMenuOpen }) => {
  const categories = useAppSelector(state => state.categoryReducer.categories);
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [currentCategory, setCurrentCategory] = React.useState(categories[0].categoryName);

  const onCategoryClick = (el, i) => {
    setActiveCategory(i);
    setCurrentCategory(el.categoryName)
  };

  return (
    <div className='menu-wrapper' onClick={e => e.stopPropagation()}>
      <div className="menu-wrapper__category-list">
        <div className="menu-wrapper__category-list__title">
          <div className="close-cross" onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}>
            <span className="close-cross__line1"></span>
            <span className="close-cross__line2"></span>
          </div>
          <NavLink to='/catalogue' onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}>
            Все категории
          </NavLink>
        </div>
        {categories.map((el, i) =>
          <div
            key={el.categoryName}
            className={`menu-wrapper__category-list__element ${activeCategory == i && 'active'}`}
            onClick={() => onCategoryClick(el, i)}>
            {el.categoryName}
          </div>)}
      </div>
      <div className="menu-wrapper__subcategory-list-wrapper">
        <div className="menu-wrapper__subcategory-list-wrapper__subcategory-title">
          {currentCategory}
        </div>
        <div className="menu-wrapper__subcategory-list-wrapper__subcategory-list">
          {categories.filter(el => el.categoryName == currentCategory)[0].subCategories.map(el => <div key={el} className='menu-wrapper__subcategory-list-wrapper__subcategory-list__element'>{el}</div>)}
        </div>
      </div>
    </div>
  );
};

export default Menu;