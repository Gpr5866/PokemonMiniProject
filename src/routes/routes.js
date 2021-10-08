// import React, { Component } from 'react';
// import { BrowserRouter, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { allFlattenRoutes as routes } from "./index"

// class Routes extends Component {
//     render() {
//         return <BrowserRouter>
            
//                 <Switch>
//                     {routes.map((route, index) => {
//                         return (
//                             !route.children ?
//                                 <route.route
//                                     key={index}
//                                     path={route.path}
//                                     Component={route.component}
//                                 /> :
//                                 null
//                         )
//                     })}
//                 </Switch>
            
//         </BrowserRouter>
//     }
// }


// export default Routes;


import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Halaman from '../pages/halaman1';
import Detil from '../pages/halaman2';
import MyPokemon from '../pages/mypokemon';




export class Routes extends Component  {
    constructor(props) {
        super(props);

        this.options = {
            
        }
        this.state = {
            
        }
     
    }


    render(){
        return(
            <BrowserRouter>
            <Switch>
                {/* <Route exact path ='/' component={(this.checkAuthorized(['root','admin', 'user']) === true) ? Home : UnathorizedPage} /> */}
                <Route exact path ='/' component={Halaman} />
                <Route exact path ='/detilpokemon/:nama_pokemon' component={Detil} />
                <Route exact path ='/mypokemon' component={MyPokemon} />
                {/* <Route exact path ='/chat' component={Chat} /> */}
                {/* <Route exact path ='/chat/:type/:room_id' component={Chat} /> */}
            </Switch>
            </BrowserRouter>
        );
    }

}