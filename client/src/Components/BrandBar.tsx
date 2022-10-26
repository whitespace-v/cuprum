import React, {useState} from 'react';
import classes from '../styles/Bars/BrandBar.module.scss'
import UIButton from "../UIKIT/UIButton";
import UIInput from "../UIKIT/UIInput";
import {FaCheck, FaPlus, FaTimes} from "react-icons/fa";
import {createBrand, fetchCategories} from "../store/ActionCreators/CategoryActionCreators";
import {useAppDispatch, useAppSelector} from "../hooks/redux";

const BrandBar = () => {
    const dispatch = useAppDispatch()
    const {loading, error, currentCategory, currentSubcategory, currentBrand, brands} = useAppSelector(state => state.categoryReducer)

    const [contentActive, setContentActive] = useState<boolean>(false)
    const [brandCreation, setBrandCreation] = useState<boolean>(false)
    const [brandCreationName, setBrandCreationName] = useState<string>('')

    const brandCreationHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        dispatch(createBrand(brandCreationName, currentCategory, currentSubcategory)).then(() => dispatch(fetchCategories()))
        setBrandCreation(false)
        setBrandCreationName('')
    }

    return (
        <>
            <div className={classes['BrandBar-button']}>
                <UIButton type={'primary-small'}
                          onClick={() => setContentActive(!contentActive)}
                >Производитель:<span>&nbsp;Сибирь</span></UIButton>
                {brandCreation ?
                    <>
                        <UIInput
                            value={brandCreationName}
                            type={'primary'}
                            placeholder={'Производитель...'}
                            onChange={(e: React.FormEvent<HTMLInputElement>) => setBrandCreationName(e.currentTarget.value)}
                        />
                        <>
                            <UIButton type={'icon'} onClick={e => brandCreationHandler(e)}><FaCheck/></UIButton>
                            <UIButton type={'icon'} onClick={() => {
                                setBrandCreation(false);
                                setBrandCreationName('')
                            }}><FaTimes/></UIButton>
                        </>
                    </>
                    :
                    <UIButton type={'icon'} onClick={() => setBrandCreation(true)}><FaPlus/></UIButton>
                }
                {loading && <p>loading....</p>}
                {error && <p>error....</p>}
            </div>
            {contentActive &&
                <div className={classes['BrandBar-content']}>
                    asd
                    asdasd
                    asd
                </div>
            }

        </>
    );
};

export default BrandBar;