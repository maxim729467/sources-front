import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './styles.module.css';

export default function FoldersPlaceholder() {
    const navigate = useNavigate();
    const onNavigate = () => {
        navigate(`/`, { replace: true });
    };  

    return (
        <div className={styles.placeholder}>
             <Typography variant="h2">
                         No content
            </Typography>
            <Button onClick={onNavigate} color="primary">Back to folders</Button>
        </div>
    )
}