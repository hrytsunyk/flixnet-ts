import React, { FC } from 'react';
import ccs from './Header.module.css';
import DayNightToggle from '../DayNightToggle/DayNightToggle';

const Header: FC = () => {
    return (
        <div className={ccs.HeaderFather}>
            <DayNightToggle />
        </div>
    );
};

export { Header };
