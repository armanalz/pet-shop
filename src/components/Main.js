import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Icon from './utilities/Icon';


class Main extends Component {

    state = {

        i : 0,

        petSpecifications : {

            name: ["vizsla","vadim","olian","fritz"],
            type: ["hunting dog","domestic dog","bull dog","trier"],
            lifeSpan: ["12-15","11-14","13-16","10-13"],
            temperment: ["affectionate, energetic, faithful, calm, tender",
                         "vigorous, faithful, calm, tender",
                         "funny, faithful, calm, tender",
                         "strong, faithful, calm, tender"
                        ],
            size: ["large","medium-sized","small","large"],
            maleWight: ["65-77","45-66","41-62","60-71"],
            femaleWight: ["61-73","42-63","37-58","56-67"],
            maleHeight: ["42-45","22-25","18-21","38-41"],
            femaleHeight: ["40-42","20-22","16-19","35-39"],
            description: ["lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                          "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                          "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                          "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"]

          }
    }
    renderThumb = ({ style, ...props }) => {
        const { top } = this.state;
        const thumbStyle = {
            backgroundColor: "#FDFDFD",
            borderRadius: 2,
         
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props}/>
        );
    }

 renderTrackVertical = ({ style, ...props }) => {
        const finalStyle = {
            ...style,
            right: "35px",
            bottom: "60px",
            top: "60px",
            borderRadius: 2,
            backgroundColor: '#555'
        };
        return <div style={finalStyle} {...props} />;
    }

    render() {

        let bg,img

        if( this.state.i < 0 ) {

            this.setState({ i:3})
            
        }else if(this.state.i > 3){

            this.setState({ i:0})
            
        }else {
            bg = require(`../resources/img/slide-${this.state.i}.jpg`)
            img = require(`../resources/img/img-${this.state.i}.jpg`)
        }
        
       
        

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
                        <div className="craousel_controller_btn left"
                             onClick={() => {this.setState({
                                 i: this.state.i-1
                             })}}>
                           <Icon name="left-arrow"/>
                        </div>                    
                    </div>

                    <h1 className="description_title">
                       {this.state.petSpecifications.name[this.state.i]}
                    </h1>
                    <h4 className="description_subtitle">
                       {this.state.petSpecifications.type[this.state.i]}
                    </h4>

                    <div className="description_specification">
                        <p className="description_specification_title">life span</p>
                        <p className="description_specification_value">
                           {this.state.petSpecifications.lifeSpan[this.state.i]} years
                        </p>
                    </div>

                    <div className="description_specification">
                        <p className="description_specification_title">temperment</p>
                        <p className="description_specification_value">
                           {this.state.petSpecifications.temperment[this.state.i]}
                        </p>
                    </div>

                    <div className="description_specification">
                        <p className="description_specification_title">size</p>
                        <p className="description_specification_value">
                           {this.state.petSpecifications.size[this.state.i]}
                        </p>
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
                            <p className="description_specification_value">
                               {this.state.petSpecifications.maleWight[this.state.i]} lb
                            </p>
                            <p className="description_specification_value">
                               {this.state.petSpecifications.femaleWight[this.state.i]} lb
                            </p>
                        </div>
                    </div>

                    <div className="description_specification">
                        <p className="description_specification_title">height</p>
                        <div className="description_specification_value wrapper">
                            <p className="description_specification_value">
                               {this.state.petSpecifications.maleHeight[this.state.i]} in
                            </p>
                            <p className="description_specification_value">
                               {this.state.petSpecifications.femaleHeight[this.state.i]} in
                            </p>
                        </div>
                    </div>

                    <div className="description_footer">
                        <p className="description_footer_item">maintenance & care</p>
                        <p className="description_footer_item">learning & education</p>
                        <p className="description_footer_item">helas & diseases</p>
                    </div>

                </div> {/* description */}

                <div className="picture">

                
                <div className="craousel_controller_btn right"
                                onClick={() => {this.setState({
                                    i: this.state.i+1
                                })}}
                            >
                                <Icon name="left-arrow"/>
                            </div>                 
                  

                   <Scrollbars style={{flexBasis:"46rem",zIndex:"9"}} renderThumbHorizontal={this.renderThumb}
                               renderThumbVertical={this.renderThumb} renderTrackHorizontal={this.renderTrackHorizontal}
                               renderTrackVertical={this.renderTrackVertical}
                   >
                        <div className="picture_large"
                            style={{backgroundImage:`url(${bg})`}}
                        >
                            
                        </div>
                   </Scrollbars>
                   
                    <div className="picture_intro">
                        <div className="picture_intro_img">
                            <img src={img}/>
                        </div>
                        <div className="picture_intro_txt">
                           {this.state.petSpecifications.description[this.state.i]}
                        </div>
                    </div>

                </div> {/* picture */}
                
            </main>
        );
    }
}

export default Main;