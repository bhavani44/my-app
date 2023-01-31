import React from 'react';
import { useParams } from "react-router-dom";

function SubpageRenderComponent() {
    const { name } = useParams();
    console.log(name)
  return (
    <h1>hello</h1>
  )
}

export default SubpageRenderComponent