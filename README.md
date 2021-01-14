# Array Has Item

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

has-item is very useful and lite weight library which encourage user to check that if a perticular item exist in array or not.

## Install
  - npm install @abou.bakar/has-item
  - yarn add @abou.bakar/has-item

### Usage

```sh
import HasItem from "@abou.bakar/has-item";

const array=[
        {id:1, name:"John"},
        {id:2, name:"Doe"},
        {id:3, name:"David"},
        {id:4, name:"Orbiqon"},
    ];
const object1={id:4, name:"Orbiqon"};    
const object2={id:1, name:"Orbiqon"};    
HasItem(array,object1)  // it will return true
HasItem(array,object2)  // it will return false
