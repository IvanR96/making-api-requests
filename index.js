import https from "https"
import express, { response } from "express";
import { hostname } from "os";
import path from "path";

const app = express();

app.get("/", (req, res) =>{
    const options = {
        hostname: "bored-api.appbrewery.com",
        path: "/random",
        method: "GET",
    };

    const request = https.request(options, (response)=>{
        let data = "";
        response.on("data", (chunk)=>{
            data += chunk;
        });
    });

    response.on()
});