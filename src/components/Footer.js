import React from 'react';
import './styles/content_styling.css';

class Footer extends React.Component {
    render() {
        return (
            <footer class="footer-position font-small bg-danger">
                <div class="footer-copyright text-center py-3 brand-color">
                    © 2018 FlashDeals.com
                </div>
            </footer>
        )
    }
}

export default Footer;