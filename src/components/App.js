import React from 'react';
import IntroductionView from './IntroductionView';
import PricingComponent from './PricingComponent';

const App = () => {

    return (
        <div className='container'>
            <div className='app-component'>
                <IntroductionView />
                <PricingComponent />
            </div>
        </div>
    );
};

export default App;
