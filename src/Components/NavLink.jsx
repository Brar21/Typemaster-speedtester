import React from "react";
import { Button } from "@chakra-ui/react";
import {Link} from "react-router-dom"

function NavLink({ to, name, onClose, ...rest }) {


    return (
     <Link to={to} spy={true} smooth={true} offset={-60} duration={1000} onClick={onClose}>
            <Button

                size="sm"

                {...rest}
            >
                {name}
            </Button>
     
            </Link>
    );
}

export default NavLink;