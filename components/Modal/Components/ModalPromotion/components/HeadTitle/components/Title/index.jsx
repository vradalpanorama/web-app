import cl from "classnames";
import style from "./index.module.scss";

const Title = ({ key, className, title }) => (
    <h4 key={key} className={cl(className, style.title)}>
        {title}
    </h4>
);

export default Title;
