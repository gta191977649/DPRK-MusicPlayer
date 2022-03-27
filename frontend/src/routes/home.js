import React, { useState, useEffect } from 'react';

export default function Home(props) {
  
    let folder = <p>Loading</p>
    useEffect(() => {
        folder = Object.keys(props.library).map((f,i)=> {
            <div className="item">
                {f}
            </div>
        })
        
    }, [props.library]);
    


  
    return (
        <div className="content">
            <h1>Home</h1>
            <h2>Folder</h2>
            <div className="item-row">
                {folder}
            </div>
        </div>
    );
}