import React from 'react'
import Link from "../../../shared/Link"
import ButtonLink from "../../../shared/ButtonLink"
import Wrapper from "./Wrapper"

const Navbar = props => (
  <Wrapper>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <ButtonLink pill="true" flat="true" to="/register">Sign Up</ButtonLink>
  </Wrapper>
)

export default Navbar
