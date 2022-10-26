import React, {useEffect, useState} from 'react';
import UIButton from "../../UIKIT/UIButton";
import {FaCheck, FaPlus, FaTimes} from "react-icons/fa";
import classes from '../../styles/Components/Bars/CategoryBar.module.scss'
import UIInput from "../../UIKIT/UIInput";
import {createCategory, fetchCategories, setCurrentCategory} from "../../store/ActionCreators/CategoryActionCreators";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

const CategoryBar = () => {
    const {categories, loading, error, currentCategory} = useAppSelector(state => state.categoryReducer)
    const dispatch = useAppDispatch()

    const [categoryCreation, setCategoryCreation] = useState<boolean>(false)
    const [categoryCreationName, setCategoryCreationName] = useState<string>('')

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    const categoryCreationHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        if (categoryCreationName) {
            dispatch(createCategory(categoryCreationName)).then(() => dispatch(fetchCategories()))
            setCategoryCreation(false)
            setCategoryCreationName('')
        } else{
            alert('Заполните все поля !')
        }
    }

    return (
        <div className={classes['CategoryBar']}>
            <div className={classes['CategoryBar__items']}>
                { categories && categories.map(i => (
                    <UIButton
                        type={i === currentCategory ? 'primary-small-active' : 'primary-small'}
                        onClick={() => dispatch(setCurrentCategory(i))}
                        key={i.id}
                    >{i.name}</UIButton>
                ))}

                {categoryCreation ?
                    <>
                        <UIInput
                            value={categoryCreationName}
                            type={'primary'}
                            placeholder={'Категория...'}
                            onChange={(e: React.FormEvent<HTMLInputElement>) => setCategoryCreationName(e.currentTarget.value)}
                        />
                        <>
                            <UIButton type={'icon'} onClick={e => categoryCreationHandler(e)}><FaCheck/></UIButton>
                            <UIButton type={'icon'} onClick={() => {
                                setCategoryCreation(false);
                                setCategoryCreationName('')
                            }}><FaTimes/></UIButton>
                        </>
                    </>
                    :
                    <UIButton type={'icon'} onClick={() => setCategoryCreation(true)}><FaPlus/></UIButton>
                }
                {loading && <p>loading....</p>}
                {error && <p>error....</p>}
            </div>
        </div>
    );
};

export default CategoryBar;