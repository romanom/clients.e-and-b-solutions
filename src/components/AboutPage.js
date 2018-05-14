import React from 'react';
import { handlePageView } from '../tools/analytics';
import AboutSection from './AboutSection';

export default class AboutPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        handlePageView();
    }

    render() {
        return (
            <div id='about_page'>
                <AboutSection />
            </div>
        );
    }
}