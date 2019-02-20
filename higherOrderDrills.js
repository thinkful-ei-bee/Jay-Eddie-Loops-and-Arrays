'use strict';

function repeat(fn, n){
    for (let i =0; i <= n; i++){
        fn();
    }
}

function hello(){
    console.log('Hello World');
}

function goodBye(){
    console.log('Goodbye World');
}

repeat(hello,5);

repeat(goodBye,5);