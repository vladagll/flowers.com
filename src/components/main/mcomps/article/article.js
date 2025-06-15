import "./article.css"
import News from "../../../articlecomps/news/news";
import About from "../../../articlecomps/about/about";
import Contacts from "../../../articlecomps/contacts/contacts";
import Er404 from "../../../articlecomps/er404/er404";
import {Routes, Route} from "react-router-dom";

export function Article() {
    return (
        <div className="article">
            <Routes>
                <Route path="/news" element={<News/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="*" element={<Er404/>}/>
            </Routes>
        </div>
    )
}