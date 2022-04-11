import React from 'react';
import LinkIcon from '@material-ui/icons/Link';
import styles from './styles.module.css';
// import EditButton from '../EditButton';

const SourceLink = ({url, name}) => {
    return (
        <a className={styles.sourceLink} target="_blank" rel="noopener noreferrer" href={url}>
            <LinkIcon className={styles.icon}/>
            {name}
        </a>
            // <EditButton id={id}/>
    )
}

export default SourceLink;