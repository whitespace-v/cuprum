import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import classes from '../styles/Bars/SubcategoryBar.module.scss'
import {
    createSubcategory,
    fetchCategories,
    setCurrentSubcategory
} from "../store/ActionCreators/CategoryActionCreators";
import UIButton from "../UIKIT/UIButton";
import UIInput from "../UIKIT/UIInput";
import {FaCheck, FaPlus, FaTimes} from "react-icons/fa";

const SubcategoryBar = () => {
    const {subcategories, loading, error, currentSubcategory, currentCategory} = useAppSelector(state => state.categoryReducer)
    const dispatch = useAppDispatch()

    const [subcategoryCreation, setSubcategoryCreation] = useState<boolean>(false)
    const [subcategoryCreationName, setSubcategoryCreationName] = useState<string>('')

    const subcategoryCreationHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        dispatch(createSubcategory(subcategoryCreationName, currentCategory)).then(() => dispatch(fetchCategories()))
        setSubcategoryCreation(false)
        setSubcategoryCreationName('')
    }

    return (
        <div className={classes['SubcategoryBar']}>
            <div className={classes['SubcategoryBar__items']}>
                {subcategories && subcategories.map(i => (
                    <UIButton
                        type={i === currentSubcategory ? 'link-active' : 'link'}
                        onClick={() => dispatch(setCurrentSubcategory(i))}
                        key={i.id}
                    >{i.name}</UIButton>
                ))
                }
                {subcategoryCreation ?
                    <>
                        <UIInput
                            value={subcategoryCreationName}
                            type={'primary'}
                            placeholder={'Подкатегория...'}
                            onChange={(e: React.FormEvent<HTMLInputElement>) => setSubcategoryCreationName(e.currentTarget.value)}
                        />
                        <>
                            <UIButton type={'icon'} onClick={e => subcategoryCreationHandler(e)}><FaCheck/></UIButton>
                            <UIButton type={'icon'} onClick={() => {
                                setSubcategoryCreation(false);
                                setSubcategoryCreationName('')
                            }}><FaTimes/></UIButton>
                        </>
                    </>
                    :
                    <UIButton type={'icon'} onClick={() => setSubcategoryCreation(true)}><FaPlus/></UIButton>
                }
                {loading && <p>loading....</p>}
                {error && <p>error....</p>}
            </div>
        </div>
    );
};

export default SubcategoryBar;