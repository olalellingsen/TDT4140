import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ExerciseCtxProvider } from './context/ExerciseCtx';
import { SessionCtxProvider } from './context/SessionCtx';
import { UserCtxProvider } from './context/UserCtx';


import {GroupCtxProvider} from './context/GroupCtx'

import { UaCtxProvider } from './context/UaCtx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* TODO: change providers dynamically? */}
    <UaCtxProvider>
    <ExerciseCtxProvider>
    <GroupCtxProvider>
    <SessionCtxProvider>
    <UserCtxProvider>
        <App />
    </UserCtxProvider>
    </SessionCtxProvider>
    </GroupCtxProvider>
    </ExerciseCtxProvider>
    </UaCtxProvider>
  </React.StrictMode>
);


