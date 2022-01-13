import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import nft from "../../img/desktop-design.jpg";

export const Private = () => {
    const history = useHistory();
    const token = sessionStorage.getItem("token");

    if (!token ){
        history.push("/")
      }
    
    const getToken = () =>{
        const opts = {
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${token}`,
                "Content-Type":"application/json"    
            },   
        };
        fetch("https://3001-coral-silverfish-b18u4ssi.ws-eu25.gitpod.io/api/private", opts)
            .then(resp =>{
                if (resp.status === 200){
                    return resp.json();
                }
                else {
                    alert("An error has ocurred")
                }
            })
            .then(data=>{
                sessionStorage.setItem("token", data.access_token)
            })
            .catch(err =>{
                console.error("There has been an error", err);
            });
    };

  

	return (
    <>
      <div className="container my-auto py-3 text-center">
      <h1>Your purchased NFTs</h1>
      <div className="row justify-content-center my-3 ">  
      
        <img src={nft} style={{width:"50%", height:"50%"}}/>
        <img src={nft} style={{width:"50%", height:"50%"}}/>
       </div>
       <div className="row justify-content-center my-3">
        <img src={nft} style={{width:"50%", height:"50%"}}/>
       <img src={nft} style={{width:"50%", height:"50%"}}/>
       </div>
      </div>
    </>
  );
};