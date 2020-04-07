import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';

import SignIn from '../pages/SignIn';

import Deliveries from '../pages/Deliveries';
import DeliveryMen from '../pages/Deliveryman';
import Recipients from '../pages/Recipients';
import DeliveriesProblems from '../pages/DeliveriesProblems';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/Deliveries" component={Deliveries} isPrivate />
            <Route path="/DeliveryMen" component={DeliveryMen} isPrivate />
            <Route path="/Recipients" component={Recipients} isPrivate />
            <Route
                path="/DeliveriesProblems"
                component={DeliveriesProblems}
                isPrivate
            />
        </Switch>
    );
}
