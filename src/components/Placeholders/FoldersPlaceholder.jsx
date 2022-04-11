import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './styles.module.css';

export default function FoldersPlaceholder() {
    return (
        <div className={styles.placeholder}>
             <Typography variant="h2">
                         No content
            </Typography>
        </div>
    )
}