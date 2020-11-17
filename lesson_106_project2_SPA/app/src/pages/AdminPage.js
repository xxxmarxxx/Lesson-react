import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const permission = true; //false wsietla panel 

const AdminPage = () => {
    return ( 
       <Route render={()=> (
           permission ? (<h3>Panel admina - dziendobry</h3>) : (
               <Redirect to="/login" />
           )
       )} />
     );
}
 
export default AdminPage;