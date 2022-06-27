import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Icategory {
  categoryName: string,
  subCategories: string[]
}

interface IcategoryState {
  categories: Icategory[];
}

const initialState: IcategoryState = {
  categories: [
    {
      categoryName: 'Настольные игры',
      subCategories: [
        'Ролевые игры',
        'Игры для двоих',
        'Игры для компаний',
        'Стратегические игры',
        'Кооперативные игры',
        'Логические игры',
        'Игры для детей'
      ]
    },
    {
      categoryName: 'Magic: The Gathering',
      subCategories: [
        'Иннистрад: Полночна Охота',
        'Приключения в Забытых Королевствах',
        'Иннистрад: Багровая Клятва',
        'Расцвет Зендикара',
        'Калдхайм',
        'Стриксхейвен',
        'Специальные выпуски',
        'Старые выпуски'
      ]
    },
    {
      categoryName: 'Варгеймы',
      subCategories: [
        'Warhammer 40k',
        'Age of Sigmar',
        'Warcry',
        'Warcry Warhammer: Underworlds',
        'Killteam',
        'Necromunda',
        'Lord of the Rings',
        'Blood Bowl',
        'Titanicus',
        'Террейн',
        'Альтернативные миниатюры'
      ]
    },
    {
      categoryName: 'Краски',
      subCategories: [
        'Citadel',
        'Bosny',
        'Vallejo',
        'Zip Maket'
      ]
    },
    {
      categoryName: 'Аксессуары для игр',
      subCategories: [
        'Протекторы',
        'Альбомы',
        'Коробочки',
        'Кубики',
        'Коврики',
        'Мешочки'
      ]
    },
    {
      categoryName: 'Аксессуары для моделизма',
      subCategories: [
        'Кисти',
        'Инструменты',
        'Декорации',
        'Подставки'
      ]
    }
  ],
}

export const categorySlicer = createSlice({
  name: 'category',
  initialState,
  reducers: {

  },
})

export default categorySlicer.reducer;