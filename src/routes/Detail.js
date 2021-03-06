// import { useQuery } from "@apollo/client";
// import React from "react"
// import {useParams} from "react-router-dom";
// import Movie from "../components/Movie"


import React from "react";
import { useParams } from "react-router-dom";
import { gql,useQuery } from "@apollo/client";


const GET_MOVIES = gql` # for apollo
    query getMovie($id: Int!){ # check the variable
        movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;


export default () => {
    const {id} = useParams()
    const {loading, data} = useQuery(GET_MOVIES, {
        variables: {id}
    })
    if (loading) {
        return "loading";
    }
    if (data && data.movie) {
        return data.movie.title;
    }

    "Detail"};