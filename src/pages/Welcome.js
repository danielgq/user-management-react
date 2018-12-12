import React, { Component } from 'react';
import imgURL from '../image/wukong.jpg';

export default class Welcome extends Component{
    render(){
        return(
            <div>
                <div align="center">
                    <h1 >Welcome !</h1>
                    <br/><br/>
                    <img src={imgURL}/>
                </div>


            </div>
        )
    }
}