import React from 'react'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styleHistoryOrder from "./history-order.module.css";


const HistoryOrder = () => {
  return (
    <div className={styleHistoryOrder.container}>
      <div className={`${styleHistoryOrder.title} text text_type_digits-default pb-10`}>#034533</div>
      <div className='text text_type_main-medium pb-3'>Black Hole Singularity острый бургер</div>
      <div className={`${styleHistoryOrder.status} text text_type_main-default pb-15`}>Выполнен</div>
      <div className='text text_type_main-medium pb-6'>Состав:</div>
      <div className={`${styleHistoryOrder.items} pr-6`}>

        <div className={`${styleHistoryOrder.item} pb-4`}>
          <div className={`${styleHistoryOrder.item}`}>
            <img className={`${styleHistoryOrder.item__image} mr-4`} src="http://placehold.jp/64x64.png" alt="" />
            <p className='text text_type_main-default pr-4'>Филе Люминесцентного тетраодонтимформа</p>
          </div>
          <div className={`${styleHistoryOrder.item__sum}`}>
            <p className='text text_type_main-default'>2 x 20</p>
            <CurrencyIcon />
          </div>
        </div>

        <div className={`${styleHistoryOrder.item} pb-4`}>
          <div className={`${styleHistoryOrder.item}`}>
            <img className={`${styleHistoryOrder.item__image} mr-4`} src="http://placehold.jp/64x64.png" alt="" />
            <p className='text text_type_main-default pr-4'>Филе Люминесцентного тетраодонтимформа</p>
          </div>
          <div className={`${styleHistoryOrder.item__sum}`}>
            <p className='text text_type_main-default'>2 x 20</p>
            <CurrencyIcon />
          </div>
        </div>

        <div className={`${styleHistoryOrder.item} pb-4`}>
          <div className={`${styleHistoryOrder.item}`}>
            <img className={`${styleHistoryOrder.item__image} mr-4`} src="http://placehold.jp/64x64.png" alt="" />
            <p className='text text_type_main-default pr-4'>Филе Люминесцентного тетраодонтимформа</p>
          </div>
          <div className={`${styleHistoryOrder.item__sum}`}>
            <p className='text text_type_main-default'>2 x 20</p>
            <CurrencyIcon />
          </div>
        </div>

        <div className={`${styleHistoryOrder.item} pb-4`}>
          <div className={`${styleHistoryOrder.item}`}>
            <img className={`${styleHistoryOrder.item__image} mr-4`} src="http://placehold.jp/64x64.png" alt="" />
            <p className='text text_type_main-default pr-4'>Филе Люминесцентного тетраодонтимформа</p>
          </div>
          <div className={`${styleHistoryOrder.item__sum}`}>
            <p className='text text_type_main-default'>2 x 20</p>
            <CurrencyIcon />
          </div>
        </div>

        <div className={`${styleHistoryOrder.item} pb-4`}>
          <div className={`${styleHistoryOrder.item}`}>
            <img className={`${styleHistoryOrder.item__image} mr-4`} src="http://placehold.jp/64x64.png" alt="" />
            <p className='text text_type_main-default pr-4'>Филе Люминесцентного тетраодонтимформа</p>
          </div>
          <div className={`${styleHistoryOrder.item__sum}`}>
            <p className='text text_type_main-default'>2 x 20</p>
            <CurrencyIcon />
          </div>
        </div>

        <div className={`${styleHistoryOrder.item} pb-4`}>
          <div className={`${styleHistoryOrder.item}`}>
            <img className={`${styleHistoryOrder.item__image} mr-4`} src="http://placehold.jp/64x64.png" alt="" />
            <p className='text text_type_main-default pr-4'>Филе Люминесцентного тетраодонтимформа</p>
          </div>
          <div className={`${styleHistoryOrder.item__sum}`}>
            <p className='text text_type_main-default'>2 x 20</p>
            <CurrencyIcon />
          </div>
        </div>

      </div>

      <div className={`${styleHistoryOrder.item} pt-10`}>
        <p className='text text_type_main-default text_color_inactive'>Вчера, 13:50 i-GMT+3</p>
        <div className={`${styleHistoryOrder.item__sum}`}>
          <p className='text text_type_digits-default'>510</p>
          <CurrencyIcon />
        </div>
      </div>


    </div>
  )
}

export default HistoryOrder