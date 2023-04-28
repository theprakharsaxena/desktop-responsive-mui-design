import { Box, Button, Typography } from "@mui/material";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { TbHandFinger } from "react-icons/tb";
import { HiArrowUpRight } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ position: "fixed", right: "0px", left: "0px",top:"0px" }}>
      <Box
        sx={{
          background: "#0E0E0E",
          color: "#FFA17A",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "4rem",
          height: "34px",
        }}
      >
        <Box
          sx={{
            "& svg": {
              mx: 1.5,
              mt:0.5
            },
          }}
        >
          <FaFacebookF />
          <FaLinkedinIn />
          <FaTwitter />
          <FaInstagram />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <TbHandFinger />
          <Typography
            sx={{
              color: "white",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "12px",
            }}
          >
            Join the fight, Become a Volunteer
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#146356",
          boxShadow: "0px 10.1903px 42.4597px 21.2299px rgba(2, 43, 58, 0.08);",
          height: "85px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "4rem",
          fontStyle: "normal",
        }}
      >
        <img src="./images/logo1.png" alt="" />
        <Box
          sx={{
            color: "#A3DA8D",
            display: "flex",
            alignItems: "flex-start",
            gap: "34px",
            fontSize: "14px",
          }}
        >
          <Link to="/" className="main-link">
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: "4px" }}>
              <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                Home
              </Typography>
              <Box sx={{ fontWeight: "900" }}>
                <HiArrowUpRight />
              </Box>
            </Box>
          </Link>
          <Link to="/" className="other-link">
            Our Cause
          </Link>
          <Link to="/" className="other-link">
            Contact Us
          </Link>
          <Link to="/" className="other-link">
            Cases
          </Link>
          <Link to="/" className="other-link">
            Our Benefactors
          </Link>
        </Box>
        <Box>
          <Box
            sx={{
              fontSize: "25px",
              color: "#A3DA8D",
              display: "flex",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <CiSearch />
            <Button
              sx={{
                background: "#FFA17A",
                color: "white",
                padding: "10px 27px 10px 27px",
                borderRadius: "3.4px",
                fontSize: "13.6px",
                fontWeight: "700",
              }}
            >
              Help us Fight
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
