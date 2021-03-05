import { Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/layout";

import * as Pages from "./pages";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Pages.Home} />     
                    <Route exact path="/Experiências" component={Pages.Experience} />        
                    <Route exact path="/Portfólio" component={Pages.PageWeb} />
                    <Route exact path="/Contato" component={Pages.Contact} />        
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}

export default Rotas;