import React from 'react'

function WebPack() {
  return (
    <div>WebPack</div>
  )
}


const path = require('path');
  module.exports ={
    entry: './src/index.tsx',
    module: {
        rules: {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,

    },
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    
      },
       output: {
filename: 'bundle.js',
path: path.resolve(__dirname, 'dist')
  }
    };


    export default WebPack;

  