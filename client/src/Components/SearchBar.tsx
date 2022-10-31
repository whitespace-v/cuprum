import React, {useState} from 'react';
import classes from '../styles/Components/SearchBar.module.scss'
import logo from '../assets/logo.png'
import UIInput from "../UIKIT/UIInput";
import {RiShoppingCartLine} from "react-icons/ri";
import UIButton from "../UIKIT/UIButton";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {FaTimes} from "react-icons/fa";
import {deleteFromCart} from "../store/ActionCreators/Setting";

const SearchBar = () => {
    const dispatch = useAppDispatch()
    const {cart, cartSum} = useAppSelector(state => state.categoryReducer)
    const [query, setQuery] = useState('')
    const [basketActive, setBasketActive] = useState<boolean>(false)
    return (
        <>
            <div className={classes['SearchBar']} onClick={() => setBasketActive(!basketActive)}>
                <div className={classes['SearchBar-logo']}>
                    <img src={logo} alt=""/>
                </div>
                <div className={classes['SearchBar-bar']}>
                    <UIInput value={query} type={"primary"} placeholder={'Поиск по сайту...'}
                             onChange={(e: React.FormEvent<HTMLInputElement>) => setQuery(e.currentTarget.value)}
                    />
                </div>
                <div className={classes['SearchBar-basket']}>
                    <UIButton type={'primary-small'} onClick={() => {}}>
                        <div className={classes['SearchBar-basket-cart']}>
                            <div className={classes['SearchBar-basket-cart-icon']}>
                                <RiShoppingCartLine/>
                            </div>
                            <div className={classes['SearchBar-basket-cart-count']}>{cart.length}</div>
                        </div>
                        <div className={classes['SearchBar-basket-amount']}>
                            {cartSum.toLocaleString('ru')} ₽
                        </div>
                    </UIButton>
                </div>
            </div>
            {basketActive &&
                <div className={classes['BasketModal']}>
                    {
                        cart.length ?
                            <>
                                <div className={classes['BasketModal-cross']}>
                                    <FaTimes onClick={() => setBasketActive(!basketActive)}/>
                                </div>
                                <div className={classes['BasketModal-items']}>
                                    {cart.map((i, index) => (
                                        <div key={index} className={classes['BasketModal-items-item']}>
                                            <div className={classes['BasketModal-items-item-image']}
                                                 style={{backgroundImage: `url("${process.env.REACT_APP_API_URL}${i.image}")`}}/>
                                            <div className={classes['BasketModal-items-item-info']}>
                                                <div>{i.name}</div>
                                                <div>{i.price.toLocaleString('ru')}  ₽</div>
                                                <UIButton type={'primary-small'} onClick={() => dispatch(deleteFromCart(i))}>Удалить</UIButton>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>

                            :
                            <>
                                <div className={classes['BasketModal-cross']}>
                                    <FaTimes onClick={() => setBasketActive(!basketActive)}/>
                                </div>
                                <div className={classes['BasketModal-empty']}>
                                    <div>Здесь ничего нет =(</div>
                                </div>
                            </>
                    }

                </div>
            }

        </>

    );
};

export default SearchBar;