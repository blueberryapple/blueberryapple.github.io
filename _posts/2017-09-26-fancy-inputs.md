---
layout: post
title: "Cool Input Fields"
date: 2017-09-26 16:25 -0800
categories: design
---
Recently, I've discovered [this post by Mary Lou](https://tympanus.net/codrops/2015/01/08/inspiration-text-input-effects/) 
for text input fields. Mary uses only css to get the effects done and it 
looks amazing. Coupled with the fact that I've been delving on this app 
that I've been wanting to make for some time based on the one in 
Strongest Deliveryman, I began using it in react native with this library 
that implments these cool css transformations, but with react native 
animations. The package is called [react-native-textinput-effects](https://github.com/halilb/react-native-textinput-effects) 
and currently it works great, but I did encounter 
this one issue whose solution I want to share. The error was about not 
having the font arial for the Madoka input. The solution was to include 
the file into the project using Font from the expo npm package.
