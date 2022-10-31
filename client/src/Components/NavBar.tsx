import React from 'react';
import UIButton from "../UIKIT/UIButton";
import {useNavigate} from "react-router-dom";
import classes from '../styles/Components/NavBar.module.scss'

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className={classes['NavBar']}>
            <div className={classes['NavBar-nav']}>
                <UIButton type={"link"} onClick={() => navigate('/')}>Главная</UIButton>
                <UIButton type={"link"} onClick={() => navigate('/info')}>О нас</UIButton>
                <UIButton type={"link"} onClick={() => navigate('/contacts')}>Контакты</UIButton>
                <UIButton type={"link"} onClick={() => navigate('/admin')}>Админ-панель</UIButton>
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