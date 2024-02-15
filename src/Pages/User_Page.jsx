import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
export default function User() {
    const userdetails = useLoaderData()
    // const [userdetails, setuserdetails] = useState({})
    // const { id } = useParams()
    // useEffect(() => {

    //     fetch(`https://api.github.com/users/${id}`)
    //         .then((res) => res.json())
    //         .then((data) => setuserdetails(data))
    // }, [id])
    return (
        <>
            <div className="bg-black text-white p-4 rounded-lg w-64 mx-auto">
                Hello Brother: {userdetails.name}
                <br />
                Your Github Profile has: {userdetails.followers} followers
                <br />
                You have {userdetails.public_repos} public repositories
            </div>
            <img src={userdetails.avatar_url} alt="pic" className="block mx-auto rounded-full w-48 h-48 object-cover mt-4" />
        </>
    )
}

export async function githubAPIcall({params}){
    const { id } = params
    console.log(id);
    const res = await fetch(`https://api.github.com/users/${id}`)
    return res.json()
}