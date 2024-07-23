import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";

function GoogleCallback() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [user, setUser] = useState(null);
    const location = useLocation();

    // On page load, we take "search" parameters 
    // and proxy them to /api/auth/callback on our Laravel API
    const getUserLogin = async() => {
        await axios.get(`http://127.0.0.1:8000/api/auth/google${location.search}`, {
            headers:{
                'Access-Control-Allow-Origin':'http://localhost:5173/',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => {
            setData(response.data);
            setLoading(false);
            console.log(response)
        }).catch((error)=>console.log(error))
    }

    useEffect(() => {
        getUserLogin()
    }, []);

    // Helper method to fetch User data for authenticated user
    // Watch out for "Authorization" header that is added to this call
    async function fetchUserData() {
        await axios.get(`http://127.0.0.1:8000/api/user`, {
            headers : {
                'Access-Control-Allow-Origin':'http://localhost:5173/',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + data.access_token,
            }
        })
            .then((response) => {
                setUser(response.data);
            })
    }

    if (loading) {
        return <DisplayLoading/>
    } else {
        if (user != null) {
            return <DisplayData data={user}/>
        } else {
            return (
                <div>
                    <DisplayData data={data}/>
                    <div style={{marginTop:10}}>
                        <button onClick={fetchUserData}>Fetch User</button>
                    </div>
                </div>
            );
        }
    }
}

function DisplayLoading() {
    return <div>Loading....</div>;
}

function DisplayData(data) {
    return (
        <div>
            <samp>{JSON.stringify(data, null, 2)}</samp>
        </div>
    );
}

export default GoogleCallback;