import React, {Component} from 'react';

import requireAuth from 'components/requireAuth';

class Rooms extends Component {
   
    render() {
        return (
            <div className="rooms">
                <h1>Rooms Placeholder</h1>
            </div>      
        );
    }
};

export default requireAuth(Rooms);
