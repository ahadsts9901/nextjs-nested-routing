"use client";

import React, { useState } from "react";
import "./nav.css";
import { Amd, Egg, Apple, DropletFill, List, XLg, BasketFill } from "react-bootstrap-icons";
import Link from "next/link";

const Nav = () => {
  const [showNav, setShowNav] = useState("none");

  return (
    <div className="navBars">
      <div className="navs">
        <List
          onClick={() => {
            setShowNav("flex");
          }}
          className="burgerIcon"
        />
        {/* desktop */}
        <nav>
          <Link href="/">
            <li>
              <Apple /> Fruits
            </li>
          </Link>

          <Link href="/dairy">
            <li>
              <Egg /> Dairy
            </li>
          </Link>

          <Link href="/meat">
            <li>
              <Amd /> Meat
            </li>
          </Link>

          <Link href="/vegetables">
            <li>
              <DropletFill /> Vegies
            </li>
          </Link>

          <Link href="/grains">
            <li>
              <BasketFill /> Grains
            </li>
          </Link>
        </nav>
      </div>
      <div className="navMob" style={{ display: `${showNav}` }}>
        <XLg
          className="xIcon"
          onClick={() => {
            setShowNav("none");
          }}
        />
        <Link href="/">
          <li>
            <Apple /> Fruits
          </li>
        </Link>

        <Link href="/dairy">
          <li>
            <Egg /> Dairy
          </li>
        </Link>

        <Link href="/meat">
          <li>
            <Amd /> Meat
          </li>
        </Link>

        <Link href="/vegetables">
          <li>
            <DropletFill /> Vegies
          </li>
        </Link>

        <Link href="/grains">
          <li>
            <BasketFill /> Grains
          </li>
        </Link>
      </div>
    </div>
  );
};

export default Nav;