import React, { useEffect, useRef, useState } from 'react';

const MainView = () => {

    const [pageViews, setPageViews] = useState(0);
    const [pricing, setPricing] = useState(0);
    const [rangeValue, setRangeValue] = useState('3');
    const [checked, setChecked] = useState(false);
    const sliderRef = useRef(null);

    const pricingModel = {
        1: ['10K', 8],
        2: ['50K', 12],
        3: ['100K', 16],
        4: ['500K', 24],
        5: ['1M', 36]
    };

    const pricingModelDiscount = {
        1: 8 * 0.75,
        2: 12 * 0.75,
        3: 16 * 0.75,
        4: 24 * 0.75,
        5: 36 * 0.75
    };

    const handleInput = (e) => {
        setRangeValue(e.target.value);
        setPageViews(pricingModel[sliderRef.current.value][0]);
        pricingFunc();
    };

    const handleCheckChanged = (e) => {
        setChecked(!checked);
    };

    const pricingFunc = () => {
        if (!checked) {
            setPricing(pricingModel[sliderRef.current.value][1]);
        } else {
            setPricing(pricingModelDiscount[sliderRef.current.value]);

        }
    };


    useEffect(() => {
        setPageViews(pricingModel[sliderRef.current.value][0]);
        pricingFunc();

    }, []);


    useEffect(() => {
        pricingFunc();

    }, [checked]);

    return (
        <section className='main'>
            <div className='main-display'>
                <p className='main-display__pageviews fw-800'>{ `${pageViews} pageviews` }</p>
                <p className='main-display__pricing'>
                    <span className='main-display__pricing--fig fw-800'>{ `$${pricing}` }</span>
                    <span className='main-display__pricing--unit fw-600'>/ month</span>
                </p>
            </div>
            <div className='main-slider'>
                <input
                    type='range'
                    min='1'
                    max='5'
                    value={ rangeValue }
                    step='1' ref={ sliderRef }
                    id='pageview__slider'
                    onInput={ handleInput }

                />
            </div>
            <footer className='main__footer'>
                <label className='main-billing__label-text' htmlFor='billing__checkbox fw-600'>Monthly Billing</label>
                <div className='main-billing__toggle-container'>
                    <label className='main-billing__switch' htmlFor='billing__checkbox'>
                        <input type='checkbox' id='billing__checkbox' onChange={ handleCheckChanged } />
                        <span className='main-billing__slider round'></span>
                    </label>
                </div>
                <label className='main-billing__label-text' htmlFor='billing__checkbox'>
                    <span className='yearly-text fw-600'>Yearly Billing</span>
                </label>
                <span className='discount-text btn-rounded fw-600'>25% discount</span>
            </footer>
        </section>
    );
};

export default MainView;
