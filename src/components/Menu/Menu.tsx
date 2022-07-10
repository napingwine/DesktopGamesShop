import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import './Menu.scss';

const Menu = ({ burgerMenuOpen, setBurgerMenuOpen }) => {
  const categories = useAppSelector(state => state.categoryReducer.categories);
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [currentCategory, setCurrentCategory] = React.useState(categories[0].categoryName);

  const onCategoryHover = (el, i) => {
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
          <NavLink
            to={`catalogue?category=${el.categoryName}`}
            key={el.categoryName}
            className={`menu-wrapper__category-list__element ${activeCategory == i && 'active'}`}
            onMouseEnter={() => onCategoryHover(el, i)}
            onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
          >
            {el.categoryName}

          </NavLink>)}
      </div>
      <div className="menu-wrapper__subcategory-list-wrapper">
        <div className="menu-wrapper__subcategory-list-wrapper__subcategory-title">
          {currentCategory}
        </div>
        <div className="menu-wrapper__subcategory-list-wrapper__subcategory-list">
          {categories.filter(el => el.categoryName == currentCategory)[0].subCategories.map(el =>
            <NavLink
              key={el}
              to={`catalogue?category=${currentCategory}&subCategory=${el}`}
              onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
              className='menu-wrapper__subcategory-list-wrapper__subcategory-list__element'
            >
              {el}
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;