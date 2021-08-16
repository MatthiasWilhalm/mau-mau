import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    withRouter,
    useHistory
} from "react-router-dom";
import Card from "../structure/Card";
import cardContent from "../structure/CardContent";
import CardEditor from "./CardEditor";
import Home from "./Home";

const Main = () => {

    console.log(Object.keys(cardContent.type));

    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/"><Home></Home></Route>
                    <Route path="/home"><Home></Home></Route>
                    <Route path="/editor"><CardEditor></CardEditor></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Main