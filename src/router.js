import React from 'react';
import { Routes as Router, Route } from 'react-router';
import { ListAbaixo } from './components/ListAbaixo';
import { ListAcima } from './components/ListAcima';


export const Routes = () => {
    return (
        <Router>
            <Route path="/" element={<ListAcima />} />
            <Route path="/abaixo" element={< ListAbaixo />} />
        </Router>
    );
}