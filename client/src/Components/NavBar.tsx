import React from 'react';
import UIButton from "../UIKIT/UIButton";
import {useNavigate} from "react-router-dom";
import classes from '../styles/Components/NavBar.module.scss'
import {useAppSelector} from "../hooks/redux";

const NavBar = () => {
    const navigate = useNavigate()
    const {isAuth} = useAppSelector(state => state.categoryReducer)

    return (
        <div className={classes['NavBar']}>
            <div className={classes['NavBar-nav']}>
                <UIButton type={"link"} onClick={() => navigate('/')}>Главная</UIButton>
                <UIButton type={"link"} onClick={() => navigate('/info')}>О нас</UIButton>
                <UIButton type={"link"} onClick={() => navigate('/contacts')}>Контакты</UIButton>
                {!isAuth && <UIButton type={"link"} onClick={() => navigate('/auth')}>Авторизация</UIButton>}
            </div>
            <div className={classes['NavBar-contact']}>
                <UIButton type={"link"} onClick={() => navigate('/')}>+7 (999) 123-45-67</UIButton>
                <div className={classes['NavBar-contact-message']}>
                    <UIButton type={"primary-small"} onClick={() => navigate('/')}>Напишите нам</UIButton>
                </div>
            </div>
        </div>
    );
};

export default NavBar;