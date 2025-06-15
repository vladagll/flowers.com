import "./section.css"
import {Link} from "react-router-dom";

export function Section() {
    return (
        <div className="section">
            <Link to={'/news'}> Новости</Link>
            <Link to={'/contacts'}> Контакты</Link>
            <Link to={'/about'}> О проекте</Link>
        </div>
    )
}