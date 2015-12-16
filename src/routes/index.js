import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CoreLayout from 'layouts/CoreLayout';
import AboutView from 'views/AboutView';
import HomeView from 'views/HomeView';
import LinkedinLoginView from 'views/LinkedInLoginView';
import ResumeView from 'views/ResumeView';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/about' component={AboutView} />
    <Route path='/resume' component={ResumeView} />
    <Route path = '/returnpage' component={LinkedinLoginView} />
  </Route>
);
