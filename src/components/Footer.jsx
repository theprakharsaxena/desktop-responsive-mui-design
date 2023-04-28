import React from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ background: "#146356", maxHeight: "335px" }}>
      <Box sx={{ mx: "70px", py: "45px", color: "white" }}>
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: "50px" }}>
          <Typography
            color="#A3DA8D"
            fontWeight="700"
            letterSpacing="1px"
            fontSize="20px"
          >
            ENVIRONMENTAL
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "70px",
              fontSize: "15px",
            }}
          >
            <Link to="/our-cause" className="other-link">
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
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: "90px" }}>
          <Box
            sx={{
              "& svg": {
                mr: 3,
                mt: "30px",
              },
              color: "#A3DA8D",
            }}
          >
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaInstagram />
          </Box>
          <Box sx={{ mt: "50px" }}>
            <Typography fontSize="25px">
              Join our Cause, Become a Member
            </Typography>
            <Box sx={{ display: "flex" }}>
              <input
                type="text"
                placeholder="Enter your email address"
                style={{
                  background: "rgba(0, 0, 0, 0.15)",
                  border: "0px",
                  color: "#EDE7E3",
                  padding: "8px 8px 8px 20px",
                  width: "372px",
                  height: "34px",
                  borderRadius: "3.4px 0px 0px 3.4px ",
                  fontSize: "17px",
                  letterSpacing: "0.21px",
                }}
              />
              <Button
                variant="contained"
                sx={{
                  background: "#FFA17A",
                  padding: "10px 27px",
                  color: "#FAFAFA",
                  width: "150px",
                  height: "49.5px",
                  borderRadius: "0px 3.4px 3.4px 0px",
                }}
              >
                Join
              </Button>
            </Box>
          </Box>
          <Typography
            width="220px"
            fontWeight="400"
            fontSize="13px"
            marginTop="46px"
          >
            4517 Washington Ave. Manchester, Kentucky 39495
            <br />
            (505) 555-0125, (406) 555-0120 binhan628@gmail.com
            manhhachkt08@gmail.com
          </Typography>
        </Box>
        <Box
          sx={{ background: "#5B9289", p: "1px", mt: "38px", mb: "13px" }}
        ></Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontWeight="400" fontSize="12px" letterSpacing="0.21px">
            All rights reserved Elysian Multipurpose Theme
          </Typography>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <Typography fontWeight="400" fontSize="12px" letterSpacing="0.21px">
              Terms & Conditions
            </Typography>
            <Typography fontWeight="400" fontSize="12px" letterSpacing="0.21px">
              Privacy & Cookies
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
