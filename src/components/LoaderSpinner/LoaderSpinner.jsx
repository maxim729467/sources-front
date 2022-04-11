import Loader from "react-loader-spinner";
import styles from './styles.module.css';

export default function LoaderSpinner() {
  return (
      <div className={styles.spinner}>
      <Loader
        type="Ball-Triangle"
        color="#3f51b5"
        height={25}
        width={25}
      />
       <Loader
        type="Ball-Triangle"
        color="#3f51b5"
        height={25}
        width={25}
      />
       <Loader
        type="Ball-Triangle"
        color="#3f51b5"
        height={25}
        width={25}
        />
      </div>
    )
}