import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';

import Deliveries from '../pages/Deliveries';
import DeliveryMen from '../pages/Deliveryman';
import Recipients from '../pages/Recipients';
import DeliveriesProblems from '../pages/DeliveriesProblems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/Deliveries" component={Deliveries} />
      <Route path="/DeliveryMen" component={DeliveryMen} />
      <Route path="/Recipients" component={Recipients} />
      <Route path="/DeliveriesProblems" component={DeliveriesProblems} />
    </Switch>
  );
}
