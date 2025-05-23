"use client"


import React from "react";
import "./index.css";
import { useTheme } from "@/Context/ThemeProvider/Theme";

const LoadingPage = () => {
    const { theme } = useTheme();
    // const [startLoading, setStartLoading] = useState(true);
    // setInterval(() => {
    //     setStartLoading(true); 
    // }, 7000)
    
    // useEffect(() => {
    //     if (startLoading) {
           
    //    } 
    // },[startLoading])
    
    const animationClasss=["translateYAnimationOne","translateYAnimationTwo","translateYAnimationThree","translateYAnimationFour","translateYAnimationFive","translateYAnimationSix"]
    return (
        <>
            <div className={`loaing-main-div`}>
                {Array.from({length:6}).map((elemnet,index) => {
                    return (
                        <div key={index} className={`loading-block ${theme?"loading-block-black":"loading-block-white"}`}
                            style={{
                                animationDelay: `${(6-index) / 4}s`,
                                // animationDuration: `${index+6}s`,

                                animationName: `${ animationClasss[index]}`,
                                // animationDuration:"4s",
                            }}
                        >

                        </div>
                    )
                })}
                {/* {Array.from({length:6}).map((elemnet,index) => {
                    return (
                        <div className={`loading-block ${theme?"loading-block-black":"loading-block-white"}`}
                            style={{
                                animationDelay: `${(5-index)/4}s`,
                                // animationDuration: `${ index+6}s`
                            }}
                        ></div>
                    )
                })} */}
                
            </div>
            
        </>
    )
}

export default LoadingPage;