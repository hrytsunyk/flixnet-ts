import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const IconSun: FC = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faSun} />
        </div>
    );
};

export { IconSun };
