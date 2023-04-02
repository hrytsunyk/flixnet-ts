import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';

const IconToggleDayNight: FC = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faToggleOn} size={'2x'} />
        </div>
    );
};

export { IconToggleDayNight };
