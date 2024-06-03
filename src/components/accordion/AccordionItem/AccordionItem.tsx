import classes from './accordion.module.scss';
import arrow from '../../../assets/arrow.svg';

function AccordionItem({title, icon, content, isActive, setActive}: {
    title: string;
    icon: string;
    content: string;
    isActive: boolean;
    setActive(): void;
}){
    return(
        <div className={`${classes.item} ${isActive && classes.active}`} onClick={setActive}>
            <div className={classes.top}>
                <div className={classes["icon-container"]}>
                    <img className={classes.icon} src={'/accordion' +icon} alt="" />
                </div>
                <h3 className={classes.title}>{title}</h3>
                <img className={classes.arrow} src={arrow} alt="стрелка" />
            </div>
            <div className={classes.bottom}>{content}</div>
        </div>
    )
}

export default AccordionItem;