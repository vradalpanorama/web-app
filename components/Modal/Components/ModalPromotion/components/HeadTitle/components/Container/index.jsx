import cl from "classnames";
import style from "./index.module.scss";

const Container = ({ className, title, lead, children }) => (
    <div
        className={cl(
            className,
            title ? style.containerTitle : null,
            lead ? style.containerLead : null
        )}
    >
        {children}
    </div>
);

export default Container;
