import React from 'react';
import './styles/content_styling.css';
import './styles/navbar_styling.css';

class Content extends React.Component {
    render() {
        return (
            <div className="center-div opacity-card">
                <div className="card card-height"> 
                    <div className="card-header center-cards bg-dark white-color-text">
                        <h2>Flash Deals</h2>
                    </div>
                    <div className="card-body center-cards">
                        <h5 className="card-title">Our commitment to you!</h5>
                        <p className="card-text">Our application provides a shopping experience which combines the exciting social
                          interactions of a social network and deal breaking offers on products! We do your best to provide a seamless
                            and exciting experience when shopping for your next purchase!</p>
                        <div className="center-div">
                            <div className="card border-dark mb-3">
                                <div className="card-body text-dark">
                                    <i className="fas fa-users fa-3x"></i>
                                    <p className="card-text">Add friends and view what products they are purchasing using our integrated social network!</p>
                                </div>
                            </div>
                            <div className="card border-dark mb-3">
                                <div className="card-body text-dark">
                                    <i className="fas fa-money-bill-alt fa-3x"></i>
                                    <p className="card-text">Find awesome deals by utilizing our search interface which produces the best possible deals based on your search criteria!</p>
                                </div>
                            </div>
                            <div className="card border-dark mb-3">
                                <div className="card-body text-dark">
                                    <i className="fas fa-coins fa-3x"></i>
                                    <p className="card-text">Earn rewards by purchasing products on sale from our app, providing deals for your friends, and buying products from your friends deals!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;