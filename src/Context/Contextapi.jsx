
import React, { createContext, useEffect, useState } from "react";

import {feactDataFromapi} from "../Utlits/Api";

export const Context=createContext();

export const Appcontext=(props)=>{
    const [loding,setloding]=useState(false);
    const [searchResult,setsearchResult]=useState([]);
    const [selectCategory,setselectCategory]=useState("Dani");
    const [mobileMenu,setmobileMenu]=useState(false);

    

    useEffect(()=>{
        featchSelectcategoryData(selectCategory)
    },[selectCategory])

    const featchSelectcategoryData= (query)=>{
        setloding(true);

        feactDataFromapi(`search/?q=${query}`).then(({contents})=>{
            console.log(contents)
            setsearchResult(contents);
            setloding(false)
        })

        
    }

    return(
        <Context.Provider value={{
            loding,setloding,
            searchResult,
            setsearchResult,
            selectCategory,
            setselectCategory,
            mobileMenu,setmobileMenu
        }}
        
        >
            {props.children}
        </Context.Provider>
    )
}