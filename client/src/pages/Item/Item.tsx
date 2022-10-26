import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchItem} from "../../store/ActionCreators/CategoryActionCreators";
import {useParams} from "react-router-dom";
import Layout from "../../UIKIT/Layout";
import classes from '../../styles/Item/Item.module.scss'

const Item = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const {currentItem} = useAppSelector(state => state.categoryReducer)

    useEffect(() => {
        dispatch(fetchItem(id))
    },[])

    console.log(currentItem)

    return (
        <div className={classes['Item']}>
            <Layout>
                <div className={classes['Item__name']}>
                    {currentItem.name}
                </div>
                <div className={classes['Item__images']}>
                    <div className={classes['Item__images-extended']}>
                        {currentItem.images.map(i => (
                            <div className={classes['Item__images-extended-item']}
                                 key={i.img}
                                 style={{backgroundImage: `url("${process.env.REACT_APP_API_URL}${i.img}")`}}
                            />
                        ))}
                    </div>
                    <div className={classes['Item__images-main']}
                         style={{backgroundImage: `url("${process.env.REACT_APP_API_URL}${currentItem.image}")`}}
                    />
                </div>
            </Layout>
        </div>

    );
};

export default Item;