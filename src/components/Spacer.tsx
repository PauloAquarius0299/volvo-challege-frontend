import styles from '../../public/css/components/spacer.module.css'

interface SpacerProps {

}
export default function Spacer(props : SpacerProps){
    return(
        <div className={styles.spacer}></div>
    )
}