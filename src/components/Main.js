import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Icon from './utilities/Icon';
import SideDrawer from './utilities/SideDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import IconButton from '@material-ui/core/IconButton';


class Main extends Component {

    state = {

        i: 0,
        loading: false,
        openMenu: false,
        drawerOpen: false,
        startX: null,
        translate: 0,
        blink: "",
        origin: " ",

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

    onLoadHandler = () => {

        this.setState({
            loading: true
        })

    }

    renderThumb = ({ style, ...props }) => {
       
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

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    sliderHandler = (e) => {


        if(e.target.id === "right" && this.state.i < 3) {

            this.setState({ i: this.state.i+1 ,  loading: false })

        }else if( e.target.id === "right" && this.state.i >= 3 ) {

                this.setState({ i : 0,  loading: false })         

        }else if( e.target.id === "left" && this.state.i > 0 ) {

            this.setState({ i: this.state.i-1,  loading: false })
             
        }else if( e.target.id === "left" && this.state.i <= 0 ) {

            this.setState({ i : 3,  loading: false })
           

        }
        
    }

    touchStartHandler = (e) => {

        let touch = e.touches[0]
        let clientStart = touch.clientX
        this.setState({ startX : clientStart })
        
    }

    touchMoveHandler = (e) => {

        let currentX = e.touches[0].clientX;
        let move = currentX-this.state.startX

        if( currentX > this.state.startX && this.state.i > 0 ){
            this.setState({ translate : move , origin: "right" })
        }else if( currentX < this.state.startX && this.state.i < 3 ){
            this.setState({ translate : move, origin: "left" })
        }else if( this.state.i === 0 || this.state.i === 3 ) {
            this.setState({ blink: "span" })
        } 

    }

    touchEndHandler = (e) => {

        let changed = e.changedTouches[0];
        let clientEnd = changed.clientX
        
        let x1 = this.state.startX
        let x2 = clientEnd
       
            if( x1-x2 > 80 && this.state.i < 3 ) {

                this.setState({ i: this.state.i+1, endX: null, startX: null , translate: 0 })          
    
            }else if( x1-x2 > 80 && this.state.i >= 3 ) {

                this.setState({ endX: null, startX: null , translate:0, blink: "" })
    
            }else if( x1-x2 < -80 && this.state.i > 0 ) {
              
                this.setState({ i: this.state.i-1, endX: null, startX: null, translate: 0 })
    
            }else {
    
                this.setState({ endX: null, startX: null, translate: 0, blink: "" })

            }
        
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

    menuHandler = () => {

        this.setState({

            openMenu:!this.state.openMenu
        })
    }


    render() {

        let img,transform,gout,slide,winWidth

            gout  = (window.innerWidth)*(this.state.i)
    
            img = require(`../resources/img/img-${this.state.i}.jpg`)

            slide = require(`../resources/img/slide-${this.state.i}.jpg`)

            winWidth = window.innerWidth
                  
        
        if(this.state.openMenu) {

            transform = "scale(0) translateX(50px)"

        }else {

            transform = "scale(1) translateX(70px)"
        }
            

        return (
            
            <main className="main_wrapper">
                <div className="sidedrawer">
                        <IconButton area-label="Menue" color="inherit" 
                                    onClick={()=>this.toggleDrawer(true)} 
                                    style={{background:"#FDFDFD"}}
                        >
                                    <MenuIcon  style={{width:"26px",height:"24px"}}/>
                        </IconButton>
                            
                        <SideDrawer
                                    open={this.state.drawerOpen}
                                    onClose={(value)=> this.toggleDrawer(value)}
                        />
                </div> 
                <div className="description">

                    <div className="description_navbar">

                        <div className="description_navbar button"
                             onClick={() => this.menuHandler()}
                        >
                           <div className="description_navbar button bar"></div>
                           <div className="description_navbar button bar"
                                style={{visibility:this.state.openMenu ? "visible" : "hidden"}}
                           >      
                           </div>
                           <div className="description_navbar button bar"></div>
                        </div>
                        <div className="description_navbar wrapper"
                             style={{transform:transform}}
                        >
                            <div className="description_navbar item">dogs</div>
                            <div className="description_navbar item">articles</div>
                            <div className="description_navbar item">about</div>
                            <div className="description_navbar item">contact</div>
                        </div>

                    </div>

                    <div className="craousel_controller left">
                        <div id="left" className="craousel_controller_btn left"
                             onClick={(e) => this.sliderHandler(e)}
                        >
                           <Icon id="left" name="left-arrow"/>
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
                    
                   
                
                   <div id="right" className="craousel_controller_btn right"
                        onClick={(e) => this.sliderHandler(e) }
                   >
                                <Icon id="right" name="left-arrow"/>
                   </div>                 
                   

                   <Scrollbars style={{flexBasis:"70vh",zIndex:"9",overflowX:"hidden"}} renderView={props => (
                                      <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />
                               )}
                               renderThumbVertical={this.renderThumb} 
                               renderTrackVertical={this.renderTrackVertical}
                   >
                        <div className={`picture_large ${this.state.origin}`}>

                            <div className="picture_large-slider"
                                 onTouchStart={(e) => this.touchStartHandler(e)}
                                 onTouchMove={(e) => this.touchMoveHandler(e)}
                                 onTouchEnd={(e) => this.touchEndHandler(e)}
                                 style={{ 
                                    
                                      left: winWidth <= 900 ? `${-gout}px` : "0",
                                      transform: winWidth <= 900 ? `translateX(${this.state.translate}px)` : ""
                                 }}
                            >
                              
                                <div className="picture_large-item primary">
                                    <div className="picture_large-item--blinker left"
                                         style={{animationName: this.state.blink}}
                                        
                                    >
                                    </div>
                                    <img className="picture_large-item--img"
                                         onLoad={() => this.onLoadHandler()}
                                         style={{
                                                
                                                display:`${this.state.loading ? "block" : "none"}`
                                        
                                             }}
                                         src={ winWidth > 900 ? slide : require(`../resources/img/slide-0.jpg`)}
                                         alt="First Slide"
                                       
                                    />
                                    <div className="picture_large-spinner">
                                        <ClimbingBoxLoader size={50} color={"#EEE"} loading={!this.state.loading}/>
                                    </div>
                                </div>
                                <div className="picture_large-item secondary">
                                    <img className="picture_large-item--img"
                                         onload={() => this.onLoadHandler()}
                                         style={{
                                                
                                                display:`${this.state.loading ? "block" : "none"}`
                                            
                                             }}
                                         src={ winWidth > 900 ? slide : require(`../resources/img/slide-1.jpg`)}
                                         alt="Second Slide"
                                   />
                                </div>
                                <div className="picture_large-item secondary">
                                    <img className="picture_large-item--img"
                                         onload={() => this.onLoadHandler()}
                                         style={{
                                                
                                                display:`${this.state.loading ? "block" : "none"}`
                                                
                                             }}
                                         src={ winWidth > 900 ? slide : require(`../resources/img/slide-2.jpg`)}
                                         alt="Third Slide"
                                   />
                                </div>
                                <div className="picture_large-item secondary">
                                    <img className="picture_large-item--img"
                                         onload={() => this.onLoadHandler()}
                                         style={{
                                                
                                                display:`${this.state.loading ? "block" : "none"}`
                                                
                                             }}
                                         src={ winWidth > 900 ? slide : require(`../resources/img/slide-3.jpg`)}
                                         alt="Forth Slide"
                                   />
                                   <div className="picture_large-item--blinker right"
                                         style={{animationName: this.state.blink}}
                                        
                                    >
                                    </div>
                                </div>
                                
                            </div>   {/* picture_large-slider */}

                        </div> {/* picture_large */}
                   </Scrollbars>
                   
                    <div className="picture_intro">
                        <div className="picture_intro_img">

                            <img  alt="Small Bild" src={img} />
                            
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