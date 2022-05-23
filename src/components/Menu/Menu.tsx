import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getCategories } from '../../FAKEAPIFUNCTIONS/FAKEAPIFUNCTIONS';
import './Menu.scss';

const Menu = ({burgerMenuOpen, setBurgerMenuOpen}) => {
  const [allCategories, setAllCategories] = useState([]);
  const [allCategoriesList, setAllCategoriesList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState();
  const [currentSubcategory, setCurrentSubcategory] = useState([]);
  const [subCategoryList, setSubcategoryList] = useState([]);

  const categoryClickListener = (el, event) => {
    allCategories.forEach(category => category.name === el.name && setCurrentSubcategory(category.options));
    setCurrentCategory(el.name);
    document.querySelectorAll('.menu-wrapper__category-list__element').forEach(el=>el.classList.remove('active'));
    event.target.classList.add('active');
  };

  useEffect(() => {
    setAllCategories(getCategories())
  }, []);

  useEffect(() => {
    setSubcategoryList(currentSubcategory.map(el => <div className='menu-wrapper__subcategory-list-wrapper__subcategory-list__element' key={el.category}>{el.category} ({el.totalcount})</div>))
  }, [currentSubcategory]);

  useEffect(() => {
    setAllCategoriesList(allCategories.map(el => <div key={el.name} className='menu-wrapper__category-list__element' onClick={(event) => categoryClickListener(el, event)}>{el.name}</div>))
  }, [allCategories]);

  return (
    <div className='menu-wrapper' onClick={e => e.stopPropagation()}>
      <div className="menu-wrapper__category-list">
        <div className="menu-wrapper__category-list__title">
          <div className="close-cross" onClick={()=>setBurgerMenuOpen(!burgerMenuOpen)}>
            <span className="close-cross__line1"></span>
            <span className="close-cross__line2"></span>
          </div>
          <NavLink to='/catalogue' onClick={()=>setBurgerMenuOpen(!burgerMenuOpen)}>
            Все категории
          </NavLink>
        </div>
        {allCategoriesList}
      </div>
      <div className="menu-wrapper__subcategory-list-wrapper">
        <div className="menu-wrapper__subcategory-list-wrapper__subcategory-title">
          {currentCategory}
        </div>
        <div className="menu-wrapper__subcategory-list-wrapper__subcategory-list">
          {subCategoryList}
        </div>
      </div>
    </div>
  );
};

export default Menu;