import React from 'react';

const FooterView = () => {
    return (
        <section className='footer section'>
            <div className='footer-features'>
                <ul className='footer-features__list'>
                    <li className='footer-features__item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" className='footer-icon__svg--check' viewBox="0 0 9 8">
                            <path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1" />
                        </svg>
                        <span className='footer-features__text fw-600'>
                            Unlimited websites
                        </span>
                    </li>
                    <li className='footer-features__item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" className='footer-icon__svg--check' viewBox="0 0 9 8">
                            <path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1" />
                        </svg>
                        <span className='footer-features__text fw-600'>
                            100% data ownership
                        </span>
                    </li>
                    <li className='footer-features__item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" className='footer-icon__svg--check' viewBox="0 0 9 8">
                            <path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1" />
                        </svg>
                        <span className='footer-features__text fw-600'>
                            Email reports
                        </span>
                    </li>
                </ul>
            </div>
            <div className='footer__cta'>
                <button className='btn btn-rounded btn-trial fw-600'>
                    Start my trial
                </button>
            </div>
        </section>
    );
};

export default FooterView;
