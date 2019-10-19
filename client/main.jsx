import React from 'react';
import App from '../imports/ui/App.jsx'; 

import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


Meteor.startup(() => {
  render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('react-target'));
});
