import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const IconMoon: FC = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faMoon} />
        </div>
    );
};

export { IconMoon };
