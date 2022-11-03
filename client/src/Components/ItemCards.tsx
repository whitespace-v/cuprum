import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import classes from '../styles/Components/ItemCards.module.scss'
import {FaCheck, FaMinus, FaPlus, FaStar, FaTimes} from "react-icons/fa";
import {RiShoppingCartLine} from "react-icons/ri";
import {useNavigate} from "react-router-dom";
import {fetchItems} from "../store/ActionCreators/Fetching";
import {addToCart, cartItemCountControl, deleteFromCart} from "../store/ActionCreators/Setting";
import {isItemInCart} from "../hof/isItemInCart";

const ItemCards = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {items, currentCategory, currentSubcategory,currentAvailability, currentBrand, currentSort, currentPage, limit, cartItems, query} = useAppSelector(state => state.categoryReducer)

    useEffect(() => {
        dispatch(fetchItems(currentCategory, currentSubcategory, currentAvailability, currentBrand, currentSort, currentPage, limit, query))
    }, [currentCategory, currentSubcategory, currentAvailability, currentBrand, currentSort, currentPage, query])

    // console.log('items:',items)
    // console.log('cart:', cartItems)
    return (
        <div className={classes['ItemCards']}>
            {items && items.rows && items.rows.map(i => (
                <div key={i.id} className={classes['ItemCards__item']} onClick={() => navigate(`item/${i.id}`)}>
                    <div className={classes['ItemCards__item-vendor']}
                    >
                        {i.vendor}
                    </div>
                    <div className={classes['ItemCards__item-image']}
                         style={{backgroundImage: `url("${process.env.REACT_APP_API_URL}${i.image}")`}}
                    />
                    <div className={classes['ItemCards__item-name']}>
                        {i.name}
                    </div>
                    <div className={classes['ItemCards__item-description']}>
                        {i.description.length > 70 ? `${i.description.substring(0, 70)}...` : i.description}
                    </div>
                    {
                        i.mark > 0 ?
                            <div className={classes['ItemCards__item-mark']}>
                                <div className={classes['ItemCards__item-mark-stars']}>
                                    {Array.from(Array(i.mark).keys()).map(() => (
                                        <div className={classes['ItemCards__item-mark-stars-full']}>
                                            <FaStar/>
                                        </div>
                                    ))}
                                    {Array.from(Array(5-i.mark).keys()).map(() => (
                                        <div className={classes['ItemCards__item-mark-stars-empty']}>
                                            <FaStar/>
                                        </div>
                                    ))}
                                    <div className={classes['ItemCards__item-mark-stars-mark']}>
                                        {i.marksCount}
                                    </div>
                                </div>
                            </div>
                            :
                            <div className={classes['ItemCards__item-mark']}>
                                <div className={classes['ItemCards__item-mark-stars']}>
                                    <div className={classes['ItemCards__item-mark-stars-empty']}>
                                        <FaStar/>
                                    </div>
                                    <div className={classes['ItemCards__item-mark-stars-mark']}>
                                        нет отзывов
                                    </div>
                                </div>
                            </div>

                    }
                    <div className={classes['ItemCards__item-availability']}>
                        <b>Наличие: </b><span>{i.availability}</span>
                    </div>
                    <div className={classes['ItemCards__item-buttons']}>
                        {i.oldPrice > 0 ?
                            <div className={classes['ItemCards__item-buttons-sale']}>
                                <div className={classes['ItemCards__item-buttons-sale-current']}>{i.price} ₽</div>
                                <div className={classes['ItemCards__item-buttons-sale-old']}>{i.oldPrice}</div>
                            </div>
                            :
                            <div className={classes['ItemCards__item-buttons-price']}>
                                {i.price.toLocaleString('ru')} ₽
                            </div>
                        }
                        {isItemInCart(i, cartItems) ?
                            <div className={classes['ItemCards__item-buttons-interactions']}>
                                <div className={classes['ItemCards__item-buttons-interactions-count']} onClick={e => {
                                    e.stopPropagation();
                                    dispatch(addToCart(i))
                                }}>
                                    <div className={classes['ItemCards__item-buttons-interactions-count-handler']}
                                         onClick={e => {
                                             e.stopPropagation();
                                             dispatch(cartItemCountControl(i, -1))
                                         }}
                                    >
                                        <FaMinus/>
                                    </div>
                                    <div className={classes['ItemCards__item-buttons-interactions-count-number']}>
                                        {cartItems[cartItems.findIndex(x => x.item.id === i.id)].count}
                                    </div>
                                    <div className={classes['ItemCards__item-buttons-interactions-count-handler']}
                                         onClick={e => {
                                             e.stopPropagation();
                                             dispatch(cartItemCountControl(i, 1))
                                         }}
                                    >
                                        <FaPlus/>
                                    </div>
                                </div>
                                <div className={classes['ItemCards__item-buttons-interactions-checked']} onClick={e => {
                                    e.stopPropagation();
                                    dispatch(deleteFromCart(i))
                                }}>
                                    <FaCheck/>
                                </div>
                            </div>
                            :
                            <div className={classes['ItemCards__item-buttons-interactions']}>
                                <div className={classes['ItemCards__item-buttons-interactions-add']} onClick={e => {
                                    e.stopPropagation();
                                    dispatch(addToCart(i))
                                }}>
                                    <RiShoppingCartLine/>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemCards;