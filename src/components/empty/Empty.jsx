import React from 'react'
import { Link } from 'react-router-dom'

const Empty = ({url, title}) => {
  return (
    <div style={{ textAlign: "center",display:"flex",flexDirection:"column",gap:"20px",alignItems:"center" }}>
      <img width={500} src={url} alt="" />
      <h2>{title}</h2>
      <Link style={{color:"blue"}} to={"/"}>Haridni boshlash</Link>
    </div>
  );
}

export default Empty