import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./welcomeStyle.css";

const Welcome = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="index">
            
      <div className="div">
                
        <img
          className="rectangle"
          style={{
            height:
              screenWidth >= 1440
                ? "452px"
                : screenWidth < 1440
                ? "305px"
                : undefined,
            left:
              screenWidth >= 1440
                ? "376px"
                : screenWidth < 1440
                ? "0"
                : undefined,
            top:
              screenWidth >= 1440
                ? "649px"
                : screenWidth < 1440
                ? "1445px"
                : undefined,
            width:
              screenWidth >= 1440
                ? "688px"
                : screenWidth < 1440
                ? "1440px"
                : undefined,
          }}
          alt="Rectangle"
          src={
            screenWidth >= 1440
              ? "https://cdn.animaapp.com/projects/653416ea99893341d1d55f46/releases/65343b47ac0b549a11441a2f/img/rectangle-1.png"
              : screenWidth < 1440
              ? "https://cdn.animaapp.com/projects/653416ea99893341d1d55f46/releases/65343b47ac0b549a11441a2f/img/rectangle-2.png"
              : undefined
          }
        />
                
        {screenWidth < 1440 && (
          <>
                        
            <img
              className="img"
              alt="Rectangle"
              src="https://cdn.animaapp.com/projects/653416ea99893341d1d55f46/releases/653452d1bd23bd3c8170f2f4/img/rectangle-3-1.png"
            />
                        
            <div className="overlap">
                            
              <div className="overlap-group">
                                
                <img
                  className="rectangle-2"
                  alt="Rectangle"
                  src="https://cdn.animaapp.com/projects/653416ea99893341d1d55f46/releases/653452d1bd23bd3c8170f2f4/img/rectangle-1-1.png"
                />
                                
                <div className="frame">
                                    
                  <div className="rectangle-3" />
                                    
                  <p className="weather-overview">
                                        
                    <span className="text-wrapper">Weather</span>
                                        <span className="span">&nbsp;</span>
                                        
                    <span className="text-wrapper">
                                            overview:                       
                      <br />
                                          
                    </span>
                                        
                    <span className="text-wrapper-2">candy land</span>
                                        
                    <span className="text-wrapper-3">&nbsp;</span>
                                        
                    <span className="text-wrapper">edition</span>
                                      
                  </p>
                                  
                </div>
                              
              </div>
                            
              <div className="overlap-2">
                                
                <div className="frame-2">
                                    
                  <div className="frame-3">
                                        
                    <div className="rectangle-4" />
                                        
                    <div className="rectangle-5" />
                                        
                    <div className="rectangle-6" />
                                        
                    <div className="rectangle-7" />
                                        
                    <div className="rectangle-8" />
                                        
                    <div className="rectangle-9" />
                                        
                    <div className="rectangle-10" />
                                      
                  </div>
                                    <div className="text">{""}</div>
                                    
                  <div className="frame-4">
                                        
                    <div className="current-city">CURRENT CITY</div>
                                        
                    <div className="text-wrapper-4">TEMPERATURE</div>
                                        
                    <div className="text-wrapper-4">AIR QUALITY</div>
                                      
                  </div>
                                    
                  <div className="frame-5">
                                        
                    <div className="precipitation">PRECIPITATION %</div>
                                        
                    <div className="text-wrapper-4">HUMIDITY</div>
                                        
                    <div className="text-wrapper-4">WIND SPEED</div>
                                      
                  </div>
                                  
                </div>
                                <div className="text-wrapper-5">24</div>
                                <div className="text-wrapper-6">24</div>
                                <div className="text-wrapper-7">24</div>
                                <div className="text-wrapper-8">24</div>
                                <div className="text-wrapper-9">24</div>
                                <div className="text-wrapper-10">24</div>
                              
              </div>
                          
            </div>
                      
          </>
        )}
                
        {screenWidth >= 1440 && (
          <>
                        
            <img
              className="rectangle-11"
              alt="Rectangle"
              src="https://cdn.animaapp.com/projects/653416ea99893341d1d55f46/releases/65343b47ac0b549a11441a2f/img/rectangle-2.png"
            />
                        
            <img
              className="rectangle-12"
              alt="Rectangle"
              src="https://cdn.animaapp.com/projects/653416ea99893341d1d55f46/releases/65343b47ac0b549a11441a2f/img/rectangle-3.png"
            />
                      
          </>
        )}
                
        <div
          className="frame-6"
          style={{
            left:
              screenWidth < 1440
                ? "612px"
                : screenWidth >= 1440
                ? "418px"
                : undefined,
            top:
              screenWidth < 1440
                ? "1170px"
                : screenWidth >= 1440
                ? "450px"
                : undefined,
          }}
        >
                    
          {screenWidth < 1440 && (
            <>
                            
              <img
                className="rectangle-13"
                alt="Rectangle"
                src="https://cdn.animaapp.com/projects/653416ea99893341d1d55f46/releases/653452d1bd23bd3c8170f2f4/img/rectangle-4.svg"
              />
                            
              {/* <p className="brrr-city-is">
                                “BRRR! (CITY) IS FROSTING OVER HERE WITH A
                TEMPERATURE BELOW FREEZING. BUNDLE UP IN YOUR SWEETEST SCARF
                                AND MITTENS! HOWEVER, EXPECT SOME SYRUPY RAIN.
                IF YOU’RE VENTURING OUT, DON’T FORGET YOUR CANDY CANE
                                UMBRELLA!”               
              </p> */}
                          
            </>
          )}
                    
          {screenWidth >= 1440 && (
            <>
                            <div className="weather-app">WEATHER APP:</div>
                            <div className="candy-land">CANDY LAND</div>
                          
            </>
          )}
                  
        </div>
                
        {screenWidth >= 1440 && (
          <div className="start-wrapper">
                        <div className="start">START</div>
                      
          </div>
        )}
              
      </div>
          
    </div>
  );
};

export default Welcome;

// import gingerbreadMan from "../../assets/gingerbread.png";
// import { useNavigate } from "react-router-dom";

// const Welcome = () => {
//   const navigate = useNavigate();

//   const onClick = () => {
//     navigate("/start");
//   };

//   return (
//     <div className="flex-vert">
//       <img
//         src={gingerbreadMan}
//         className="gingerbread-man"
//         alt="gingerbread man"
//       />
//       <button className="start-button" onClick={onClick}>
//         Start
//       </button>
//     </div>
//   );
// };
// export default Welcome;
