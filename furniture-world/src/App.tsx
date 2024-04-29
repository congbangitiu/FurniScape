import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Router } from './routes';

function App() {
    return (
        <div className="App">
            <RouterProvider router={Router} />
        </div>
    );
}

export default App;
