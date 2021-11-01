import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";
import { Image } from "semantic-ui-react";

export default () => {
  return (
        //<h1> Karna: Covid-19 Fund-Raiser</h1>
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">Home</a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Campaigns</a>
        </Link>
        <Link route="/campaigns/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};