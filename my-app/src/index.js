import React from 'react'
import  ReactDOM  from 'react-dom'

//React element part of virtual dom
const element=<h1>Hello World</h1>
//1-what to render
//2-where to render
ReactDOM.render(element,document.getElementById('root'))
//console.log(element);
//for rendering in realDom imporetd react