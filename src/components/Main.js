import React, { Component } from 'react';
import Icon from './utilities/Icon';

class Main extends Component {
    render() {
        return (
            <main className="main_wrapper">

                <div className="description">

                    <div className="description_navbar">

                        <div className="description_navbar button">
                           <div className="description_navbar button bar"></div>
                           <div className="description_navbar button bar"></div>
                        </div>
                        <div className="description_navbar item">dogs</div>
                        <div className="description_navbar item">articles</div>
                        <div className="description_navbar item">about</div>
                        <div className="description_navbar item">contact</div>

                    </div>

                    <div className="craousel_controller left">
                        <Icon name="left-arrow"/>
                    </div>

                    <h1 className="description_title">vizsla</h1>
                    <h4 className="description_subtitle">hunting dog</h4>

                    <div className="description_specification">
                        <p className="description_specification_title">life span</p>
                        <p className="description_specification_value">12-15 years</p>
                    </div>

                    <div className="description_specification">
                        <p className="description_specification_title">temperment</p>
                        <p className="description_specification_value">affectionate, energetic, faithful, 
                                                           calm, tender
                        </p>
                    </div>

                    <div className="description_specification">
                        <p className="description_specification_title">size</p>
                        <p className="description_specification_value">medium-sized</p>
                    </div>

                    <div className="description_specification gender">
                        <p className="description_specification_title"></p>
                        <div className="description_specification_value wrapper">
                           <Icon name="shapes-and-symbols"/>
                           <Icon name="shapes-and-symbols-1"/>
                        </div>

                        

                    </div>

                    <div className="description_specification">
                        <p className="description_specification_title">wight</p>
                        <div className="description_specification_value wrapper">
                            <p className="description_specification_value">45-66 lb</p>
                            <p className="description_specification_value">40-55 lb</p>
                        </div>
                    </div>

                    <div className="description_specification">
                        <p className="description_specification_title">height</p>
                        <div className="description_specification_value wrapper">
                            <p className="description_specification_value">22-25 in</p>
                            <p className="description_specification_value">21-24 in</p>
                        </div>
                    </div>

                </div> {/* description */}

                <div className="picture"></div>
                
            </main>
        );
    }
}

export default Main;