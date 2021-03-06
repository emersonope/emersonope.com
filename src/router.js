import { Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/layout";

import * as Pages from "./pages";

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Pages.Home} />     
                    <Route exact path="/experiences" component={Pages.Experience} />        
                    <Route exact path="/portfolio" component={Pages.PageWeb} />
                    <Route exact path="/contact" component={Pages.Contact} />        
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;