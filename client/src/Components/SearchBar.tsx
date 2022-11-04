import React, {useEffect, useState} from 'react';
import classes from '../styles/Components/SearchBar.module.scss'
import logo from '../assets/logo.png'
import UIInput from "../UIKIT/UIInput";
import {RiShoppingCartLine} from "react-icons/ri";
import UIButton from "../UIKIT/UIButton";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {FaMinus, FaPlus, FaTimes} from "react-icons/fa";
import {cartItemCountControl, deleteFromCart, setQuery} from "../store/ActionCreators/Setting";
import {getCartSum} from "../hof/getCartSum";
import useLockedBody from "../hof/useLockedBody";
import useDebounce from "../hof/useDebounce";
import {fetchItems} from "../store/ActionCreators/Fetching";
import useWindowSize from "../hof/useWindowSize";

const SearchBar = () => {
    const dispatch = useAppDispatch()
    const {cartItems, currentCategory, currentSubcategory, currentAvailability, currentBrand, currentSort, currentPage, limit, query} = useAppSelector(state => state.categoryReducer)
    const [localQuery, setLocalQuery] = useState<string>('')
    const [locked, setLocked] = useLockedBody(true, 'root')
    const [basketActive, setBasketActive] = useState<boolean>(false)
    const {width} = useWindowSize()
    const debouncedValue = useDebounce<string>(localQuery, 500)

    useEffect(() => {
        setLocked(!locked)
    }, [basketActive])

    useEffect(() => {
        dispatch(setQuery(debouncedValue))
    },[debouncedValue])

    useEffect(() => {
        dispatch(fetchItems(currentCategory, currentSubcategory, currentAvailability, currentBrand, currentSort, currentPage, limit, query))
    }, [currentCategory, currentSubcategory, currentAvailability, currentBrand, currentSort, currentPage, query])

    return (
        <>
            <div className={classes['SearchBar']}>
                {width > 850 &&
                    <div className={classes['SearchBar-logo']}>
                        <img src={logo} alt=""/>
                    </div>
                }
                <div className={classes['SearchBar-bar']}>
                    <UIInput value={localQuery} type={"primary"} placeholder={'Поиск по сайту...'}
                             onChange={(e: React.FormEvent<HTMLInputElement>) => setLocalQuery(e.currentTarget.value)}
                    />
                </div>
                <div className={classes['SearchBar-basket']}>
                    <UIButton type={'primary-small'} onClick={() => setBasketActive(!basketActive)}>
                        <div className={classes['SearchBar-basket-cart']}>
                            <div className={classes['SearchBar-basket-cart-icon']}>
                                <RiShoppingCartLine/>
                            </div>
                            <div className={classes['SearchBar-basket-cart-count']}>{cartItems.length}</div>
                        </div>
                        {width > 850 &&
                            <div className={classes['SearchBar-basket-amount']}>
                                {getCartSum(cartItems).toLocaleString('ru')} ₽
                            </div>
                        }
                    </UIButton>
                </div>
            </div>
            {basketActive &&
                <div className={classes['Backdrop']}>
                    <div className={classes['BasketModal-cross']}>
                        <FaTimes onClick={() => setBasketActive(!basketActive)}/>
                    </div>
                    <div className={classes['BasketModal']}>
                        {cartItems.length ?
                            <div className={classes['BasketModal-items']}>
                                {cartItems.map((i, index) => (
                                    <div key={index} className={classes['BasketModal-items-item']}>
                                        <div className={classes['BasketModal-items-item-image']}
                                             style={{backgroundImage: `url("${process.env.REACT_APP_API_URL}${i.item.image}")`}}/>
                                        <div className={classes['BasketModal-items-item-info']}>
                                            <div className={classes['BasketModal-items-item-info-name']}>{i.item.name}</div>
                                            <div className={classes['BasketModal-items-item-info-description']}>{i.item.description}</div>
                                            <div className={classes['BasketModal-items-item-info-price']}>{i.item.price.toLocaleString('ru')} ₽</div>
                                            <div className={classes['BasketModal-items-item-info-count']}>
                                                <div className={classes['BasketModal-items-item-info-count-controller']}
                                                     onClick={e => {e.stopPropagation();dispatch(cartItemCountControl(i.item, -1))}}
                                                >
                                                    <FaMinus/>
                                                </div>
                                                <div className={classes['BasketModal-items-item-info-count-number']}>{i.count}</div>
                                                <div className={classes['BasketModal-items-item-info-count-controller']}
                                                     onClick={e => {e.stopPropagation();dispatch(cartItemCountControl(i.item, 1))}}
                                                >
                                                    <FaPlus/>
                                                </div>
                                                <UIButton type={'primary-small'} onClick={() => dispatch(deleteFromCart(i.item))}>Удалить</UIButton>

                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                            :
                            <div className={classes['BasketModal-empty']}>
                                <div>Здесь ничего нет =(</div>
                            </div>
                        }
                    </div>
                </div>
            }
        </>

    );
};

export default SearchBar;