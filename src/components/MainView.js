import React, { useEffect, useRef, useState } from 'react';
import './mainView.css';

const MainView = () => {

    const [pageViews, setPageViews] = useState(0);
    const [pricing, setPricing] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const [rangeValue, setRangeValue] = useState('3');
    const [checked, setChecked] = useState(false);
    const sliderRef = useRef(null);
    const toggleRef = useRef(null);

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

    const handleBillingClicked = (e) => {
        const target = e.target;
        if (target.closest('.main-billing__label-text')) {

            if (target.closest('.monthly')) {
                console.log('monthly');
                toggleRef.current.checked = true;
                setChecked(() => true);
            }
            if (target.closest('.yearly')) {
                console.log('yearly');
                toggleRef.current.checked = false;
                setChecked(() => false);
            }
        }
    };

    const handleInput = (e) => {
        setRangeValue(e.target.value);
        setPageViews(pricingModel[sliderRef.current.value][0]);
        pricingFunc();
    };

    const handleCheckChanged = (e) => {
        setChecked(() => !checked);
    };

    const pricingFunc = () => {
        if (!checked) {
            setPricing(pricingModel[sliderRef.current.value][1]);
        } else {
            setPricing(pricingModelDiscount[sliderRef.current.value]);

        }
    };


    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', function () {
            setWindowWidth(window.innerWidth);
        });
        toggleRef.current.checked = false;
        setPageViews(pricingModel[sliderRef.current.value][0]);;
        pricingFunc();

    }, []);


    useEffect(() => {
        pricingFunc();
        console.log(window.innerWidth);
    }, [checked]);

    return (
        <section className='main section'>

            <p className='main-display__pageviews fw-800'>{ `${pageViews} pageviews` }</p>
            <p className='main-display__pricing'>
                <span className='main-display__pricing--fig fw-800'>{ `$${pricing.toFixed(2)}` }</span>
                <span className='main-display__pricing--unit fw-600'>/ month</span>
            </p>

            <div className='main-slider'>
                <input
                    type='range'
                    min='1'
                    max='5'
                    value={ rangeValue }
                    step='1'
                    ref={ sliderRef }
                    id='pageview__slider'
                    className={ `range__slider` }
                    onInput={ handleInput }

                />
            </div>
            <div className='main__billing' onClick={ handleBillingClicked }>
                <div className='main-billing__toggle-container'>
                    <label className='main-billing__label-text monthly fw-600' htmlFor='billing__checkbox'>
                        { `Monthly ${(windowWidth > 436) ? 'Billing' : ''}` }
                    </label>
                    <label className='main-billing__switch' htmlFor='billing__checkbox'>
                        <input type='checkbox' id='billing__checkbox' onChange={ handleCheckChanged } ref={ toggleRef } />
                        <span className='main-billing__slider round'></span>
                    </label>
                    <label className='main-billing__label-text yearly' htmlFor='billing__checkbox'>
                        <span className='yearly-text fw-600'>
                            { `Yearly ${(windowWidth > 436) ? 'Billing' : ''}` }
                        </span>
                        {
                            (windowWidth <= 537) ?
                                <span className='discount-text btn-rounded fw-600'>-25%</span> :
                                <span className='discount-text btn-rounded fw-600'>25% discount</span>
                        }
                    </label>
                </div>
            </div>
        </section>
    );
};

export default MainView;
