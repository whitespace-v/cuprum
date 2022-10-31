import React from 'react';
import classes from '../../../styles/Components/SortingBars/ExtendingBarsLayout.module.scss'

const ExtendingBarsLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={classes['ExtendingBarsLayout']}>
            {children}
        </div>
    );
};

export default ExtendingBarsLayout;