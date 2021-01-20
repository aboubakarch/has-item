# Array Has Item

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

has-item is a handy, lightweight library which helps to find out if a particular item/object exists in a Javascript array or not.

## Install

- npm install @abou.bakar/has-item
- yarn add @abou.bakar/has-item

### Usage

```sh
HasItem(Array, value, key)
```

###### Check Given Value Exist Or Not.

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
HasItem(array,object1)  // returns true
HasItem(array,object2)  // returns false
```

###### Check Specific value inside object.

```sh
import HasItem from "@abou.bakar/has-item";

const array=[
        {id:1, name:"John"},
        {id:2, name:"Doe"},
        {id:3, name:"David"},
        {id:4, name:"Orbiqon"},
    ];

HasItem(array,"John","name")  // returns true
HasItem(array,5,"id")  // returns false
```

| Parameter        | Description                                                                                | Required |
| ---------------- | ------------------------------------------------------------------------------------------ | -------- |
| First parameter  | First parameter is an array                                                                | Required |
| Second parameter | Second parameter is the value which will check in array                                    | Required |
| Third parameter  | Third parameter is the key of a specific object element of array which will check in array | Optional |
