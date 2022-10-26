import React from 'react';
import classes from '../../../styles/Components/Bars/ExtendingBarsLayout.module.scss'

const ExtendingBarsLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={classes['ExtendingBarsLayout']}>
            {children}
        </div>
    );
};

export default ExtendingBarsLayout;