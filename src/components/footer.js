import React from 'react'
import Footer from 'rc-footer'
import 'rc-footer/assets/index.css'
// import 'rc-footer/asssets/index.less';
import './footer.css'

const SampleFooter = () => (
    <Footer
        className="footer"
        autoFocus
        columns={[
            {
                title: 'Contact Us',
                items: [
                    {
                        title: 'adress : Caldwell lab 120 2024 Neil Ave, Columbus, OH',
                        url: 'https://maps.app.goo.gl/1CJWcoB1q758VDWe6',
                        openExternal: true,
                    },
                    {
                        title: 'email : earnandlend@gmail.com',
                        url: 'mailto:earnandlend@gmail.com',
                        openExternal: true,
                    },
                    {
                        title: 'phone : 937-581-3659',
                        url: 'https://ceo/',
                        openExternal: true,
                    },
                ],
            },
            {
                icon: (
                    <img
                        src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                        alt="more products"
                    />
                ),
                title: 'more info',
                items: [
                    {
                        icon: (
                            <img
                                src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
                                alt="yuque"
                            />
                        ),
                        title: 'cse5234',
                        url: 'https://com',
                        description: 'cse5234',
                        openExternal: true,
                    },
                    {
                        icon: (
                            <img
                                src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
                                alt="yuque"
                            />
                        ),
                        title: 'cse5234',
                        url: 'https://com',
                        description: 'cse5234',
                        openExternal: true,
                    },
                ],
            },
        ]}
    />
)

export default () => <SampleFooter />
