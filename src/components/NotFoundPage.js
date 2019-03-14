import React from 'react';
import { handlePageView } from '../tools/analytics';


export default class NotFoundPage extends React.Component {
    componentDidMount() {
        handlePageView();
    }

    render() {
        return (
            <div>
                404! This is not the page you are looking for!
            </div>
        );
    }
}
