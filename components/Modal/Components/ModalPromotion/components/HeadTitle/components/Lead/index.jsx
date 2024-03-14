import cl from "classnames";
import style from "./index.module.scss";

const Lead = ({ key, className, lead }) => {
    console.log(lead);
    return (
        <p key={key} className={cl(className, style.lead)}>
            {lead}
        </p>
    );
};

export default Lead;
