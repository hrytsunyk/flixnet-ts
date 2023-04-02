import React, { FC } from 'react';
import { IconSun } from '../Icons';
import { IconToggleDayNight } from '../Icons';
import { IconMoon } from '../Icons';
import css from './DayNightToggle.module.css';

const DayNightToggle: FC = () => {
    return (
        <div className={css.DayNightToggle}>
            <IconSun />
            <IconToggleDayNight />
            <IconMoon />
        </div>
    );
};

export default DayNightToggle;
