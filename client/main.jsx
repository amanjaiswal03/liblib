import React from 'react';
import App from '../imports/ui/App.jsx'; 

import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

Meteor.startup(() => {
  render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('react-target'));
});
