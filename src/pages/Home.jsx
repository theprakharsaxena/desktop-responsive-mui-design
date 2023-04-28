import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import backgroundImage from "../images/unsplash1.png";
import unsplash2 from "../images/unsplash2.png";
import unsplash3 from "../images/unsplash3.png";
import unsplash4 from "../images/unsplash4.png";
import pauline from "../images/pauline.png";
import newsandalerts from "../images/newsandalerts.png";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function Home() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          mixBlendMode: "normal",
          backgroundSize: "cover",
          minHeight: "100vh",
          display: "flex",
          mt: "7.4rem",
        }}
      >
        <Box sx={{ color: "white", m: "6rem" }}>
          <Typography
            sx={{
              fontSize: "30px",
              display: "flex",
              alignItems: "baseline",
              gap: "7px",
            }}
          >
            Help
            <Typography
              sx={{ fontSize: "30px", fontWeight: "700", color: "#FFA17A" }}
            >
              Today
            </Typography>
          </Typography>
          <Typography
            sx={{
              fontSize: "65px",
              display: "flex",
              alignItems: "baseline",
              gap: "10px",
              ml: "4rem",
            }}
          >
            Brighter
            <Typography
              sx={{ fontWeight: "700", fontSize: "65px", color: "#A3DA8D" }}
            >
              Tomorrow
            </Typography>
          </Typography>
          <Typography sx={{ width: "600px", mt: "1rem" }}>
            Leaders across the country are tackling the most challenging and
            pressing issues of our time. Earth Let us all join to deal with
            unprecedented threats to Earth's life.
          </Typography>
          <Box
            sx={{
              display: "flex",
              mt: "4.5rem",
              gap: "3rem",
            }}
          >
            <Button
              sx={{
                background: "#FAFAFA",
                color: "#146356",
                padding: "13.5px 34px",
                borderRadius: "3.4px",
                fontSize: "13.6px",
                fontWeight: "700",
                position: "static",
              }}
            >
              Donate Now
            </Button>
            <Button
              sx={{
                color: "#FAFAFA",
                padding: "13.5px 34px",
                borderRadius: "3.4px",
                fontSize: "13.6px",
                fontWeight: "700",
                border: "2px solid #FAFAFA",
                position: "static",
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ py: "3rem", background: "#FAFAFA" }}>
        <Typography
          sx={{
            color: "#0E0E0E",
            fontWeight: "600",
            fontSize: "36px",
            display: "flex",
            mx: "auto",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "400px",
          }}
        >
          Our Continued Project Assistance Programs
        </Typography>
        <Box sx={{ mx: "8rem", mt: "3rem" }}>
          <Grid
            container
            spacing={8}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={4}>
              <img src="./images/globe.png" alt="globe" />
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "#0E0E0E",
                  mt: "1.5rem",
                }}
              >
                Reduce Global Warming Now
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#575757",
                  mt: "1rem",
                  letterSpacing: "0.5px",
                }}
              >
                The warming of the atmosphere has an impact on weather patterns,
                causing more frequent and severe droughts and storms worldwide.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src="./images/ecosystem.png" alt="ecosystem" />
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "#0E0E0E",
                  mt: "1.5rem",
                }}
              >
                Protecting Ecosystems
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#575757",
                  mt: "1rem",
                  letterSpacing: "0.5px",
                }}
              >
                Higher temperatures are shortening the seasons and, in some
                places, have already exceeded safe levels for ecosystems and
                humans.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src="./images/bulb.png" alt="bulb" />
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "#0E0E0E",
                  mt: "1.5rem",
                }}
              >
                Shift Towards Clean Energy
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#575757",
                  mt: "1rem",
                  letterSpacing: "0.5px",
                }}
              >
                This energy transition has the potential to impact many aspects
                of life, including the environment, society, the economy, and
                governance.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src="./images/safe.png" alt="safe" />
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "#0E0E0E",
                  mt: "1.5rem",
                }}
              >
                Safe Coastal Livelihoods
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#575757",
                  mt: "1rem",
                  letterSpacing: "0.5px",
                }}
              >
                Sustainable aquaculture, e.g. grouper aquaculture, meets the
                high demand for reef fish while potentially preserving coastal
                communities' livelihoods.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src="./images/toxic.png" alt="toxic" />
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "#0E0E0E",
                  mt: "1.5rem",
                }}
              >
                Stop Toxic Chemical in Air
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#575757",
                  mt: "1rem",
                  letterSpacing: "0.5px",
                }}
              >
                Solubility is differentiated by whether the substance is easily
                dissolved in organic solvents under normal environmental
                conditions of temperature & pressure.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src="./images/radioactive.png" alt="radioactive" />
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "#0E0E0E",
                  mt: "1.5rem",
                }}
              >
                Ban Radioactive Contamination
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#575757",
                  mt: "1rem",
                  letterSpacing: "0.5px",
                }}
              >
                Radioactive materials released into the environment can
                contaminate the air, water, surfaces, soil, plants, buildings,
                people & animals.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          my: "5rem",
          mx: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Grid
          container
          spacing={8}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={3}>
            <img src="./images/treesplanted.png" alt="Trees Planted" />
            <Typography
              sx={{
                color: "#146356",
                fontWeight: "700",
                fontSize: "64.5px",
                lineHeight: "86px",
              }}
            >
              5,898
            </Typography>
            <Typography
              sx={{
                color: "#0E0E0E",
                fontSize: "20px",
                fontWeight: "600",
                mt: "-10px",
              }}
            >
              Trees Planted
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <img src="./images/changinglife.png" alt="Changing Life Since" />
            <Typography
              sx={{
                color: "#146356",
                fontWeight: "700",
                fontSize: "64.5px",
                lineHeight: "86px",
              }}
            >
              1994
            </Typography>
            <Typography
              sx={{
                color: "#0E0E0E",
                fontSize: "20px",
                fontWeight: "600",
                mt: "-10px",
              }}
            >
              Changing Life Since
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <img src="./images/ourpartners.png" alt="Our Partners" />
            <Typography
              sx={{
                color: "#146356",
                fontWeight: "700",
                fontSize: "64.5px",
                lineHeight: "86px",
              }}
            >
              21+
            </Typography>
            <Typography
              sx={{
                color: "#0E0E0E",
                fontSize: "20px",
                fontWeight: "600",
                mt: "-10px",
              }}
            >
              Our Partners
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <img src="./images/volunteers.png" alt="Volunteers" />
            <Typography
              sx={{
                color: "#146356",
                fontWeight: "700",
                fontSize: "64.5px",
                lineHeight: "86px",
              }}
            >
              385
            </Typography>
            <Typography
              sx={{
                color: "#0E0E0E",
                fontSize: "20px",
                fontWeight: "600",
                mt: "-10px",
              }}
            >
              Volunteers
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          mt: "10rem",
          mb: "6rem",
          mx: "8rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          color="white"
        >
          <Grid item xs={4}>
            <Box
              sx={{
                background: `url(${unsplash2})`,
                mixBlendMode: "normal",
                backgroundSize: "cover",
                width: "322.69px",
                height: "518.01px",
              }}
            >
              <Box sx={{ pt: "22.9rem", px: "1rem" }}>
                <Typography
                  sx={{
                    color: "#FAFAFA",
                    fontSize: "10.2px",
                    fontWeight: "700",
                    letterSpacing: "2.54px",
                    mb: "10px",
                  }}
                >
                  AIR POLLUTION
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "27px",
                  }}
                >
                  What’s currently happening in Air Pollution all around the
                  world? AQI region-wise.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                background: `url(${unsplash3})`,
                mixBlendMode: "normal",
                backgroundSize: "cover",
                width: "322.69px",
                height: "518.01px",
              }}
            >
              <Box sx={{ px: "1rem", pt: "2.5rem" }}>
                <Typography
                  sx={{
                    color: "#FAFAFA",
                    fontSize: "10.2px",
                    fontWeight: "700",
                    letterSpacing: "2.54px",
                    mb: "10px",
                  }}
                >
                  WATER POLLUTANT
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "27px",
                  }}
                >
                  Think up spending hours every day looking for drinking water.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15.5px",
                    lineHeight: "25px",
                    letterSpacing: "0.5px",
                    mt: "2rem",
                  }}
                >
                  Collaborating with local partners to implement community-owned
                  clean drinking water projects in remote communities.
                </Typography>
                <Typography
                  sx={{
                    mt: "4rem",
                    color: "#A3DA8D",
                    fontWeight: "600",
                    fontSize: "12px",
                    pl: "215px",
                  }}
                >
                  67%
                </Typography>
                <img src="./images/progress.png" alt="progress67" />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                    Raised : $10.11 million
                  </Typography>
                  <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                    Goal: $23 million
                  </Typography>
                </Box>
                <Box
                  sx={{
                    pt: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "#FAFAFA",
                      padding: "13.5px 34px",
                      borderRadius: "3.4px",
                      fontSize: "13.6px",
                      fontWeight: "700",
                      border: "1.5px solid #FAFAFA",
                      position: "static",
                    }}
                  >
                    Donate
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                background: `url(${unsplash4})`,
                mixBlendMode: "normal",
                backgroundSize: "cover",
                width: "322.69px",
                height: "518.01px",
              }}
            >
              <Box sx={{ pt: "22.9rem", px: "1rem" }}>
                <Typography
                  sx={{
                    color: "#FAFAFA",
                    fontSize: "10.2px",
                    fontWeight: "700",
                    letterSpacing: "2.54px",
                    mb: "10px",
                  }}
                >
                  MELTING ICEBERGS
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "27px",
                  }}
                >
                  Negative mass balances due to retiring glaciers is causing
                  them to disappear.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ background: "#FAFAFA", my: "3rem" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <img src="./images/getintouch.png" alt="" />
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ width: "400px" }}>
              <Typography
                sx={{ color: "#0E0E0E", fontSize: "36px", lineHeight: "48px" }}
              >
                Take Action. Let’s Get In Touch
              </Typography>
              <Typography
                sx={{
                  fontSize: "15.3px",
                  color: "#575757",
                  letterSpacing: "0.5px",
                  lineHeight: "25px",
                  mt: "20px",
                }}
              >
                Given the limited resources, the issues we address, from hunger
                & clean drinking water to disease prevention and homelessness,
                can be taxing.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: "34px",
                  background: "#146356",
                  color: "#FAFAFA",
                  padding: "13.5px 34px",
                  borderRadius: "4px",
                  position: "static",
                }}
              >
                Donate Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: "4rem" }}>
        <Typography
          sx={{
            color: "#0E0E0E",
            fontWeight: "600",
            fontSize: "36px",
            display: "flex",
            mx: "auto",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "400px",
          }}
        >
          Our Benefactors
        </Typography>
        <Box
          sx={{
            display: "flex",
            mx: "auto",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "400px",
          }}
        >
          <img src="./images/ourbenefactors.png" alt="" />
        </Box>
        <Box
          sx={{
            my: "3rem",
            mx: "8rem",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={4}>
              <Box
                sx={{
                  background: `url(${pauline})`,
                  mixBlendMode: "normal",
                  backgroundSize: "cover",
                  width: "323px",
                  height: "286px",
                }}
              >
                <Box
                  sx={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: "132px",
                    gap: "30px",
                    fontSize: "22px",
                  }}
                >
                  <FaLinkedinIn />
                  <FaTwitter />
                  <FaInstagram />
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "#0E0E0E",
                  fontWeight: "600",
                  fontSize: "17px",
                  letterSpacing: "0.25px",
                  pt: "17px",
                }}
              >
                Pauline J. Wright
              </Typography>
              <Typography
                sx={{
                  color: "#575757",
                  fontSize: "11.9px",
                  fontWeight: "600",
                  letterSpacing: "0.42px",
                }}
              >
                Volunteer
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src="./images/james1.png" alt="" />
              <Typography
                sx={{
                  color: "#575757",
                  fontWeight: "600",
                  fontSize: "17px",
                  letterSpacing: "0.25px",
                  pt: "13px",
                }}
              >
                James L. Stewart
              </Typography>
              <Typography
                sx={{
                  color: "#575757",
                  fontSize: "11.9px",
                  fontWeight: "600",
                  letterSpacing: "0.42px",
                }}
              >
                Volunteer
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src="./images/william.png" alt="" />
              <Typography
                sx={{
                  color: "#575757",
                  fontWeight: "600",
                  fontSize: "17px",
                  letterSpacing: "0.25px",
                  pt: "13px",
                }}
              >
                William V. Mejia
              </Typography>
              <Typography
                sx={{
                  color: "#575757",
                  fontSize: "11.9px",
                  fontWeight: "600",
                  letterSpacing: "0.42px",
                }}
              >
                Volunteer
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src="./images/brandon.png" alt="" />
              <Typography
                sx={{
                  color: "#575757",
                  fontWeight: "600",
                  fontSize: "17px",
                  letterSpacing: "0.25px",
                  pt: "13px",
                }}
              >
                Brandon J. Hudgins
              </Typography>
              <Typography
                sx={{
                  color: "#575757",
                  fontSize: "11.9px",
                  fontWeight: "600",
                  letterSpacing: "0.42px",
                }}
              >
                Volunteer
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src="./images/james2.png" alt="" />
              <Typography
                sx={{
                  color: "#575757",
                  fontWeight: "600",
                  fontSize: "17px",
                  letterSpacing: "0.25px",
                  pt: "13px",
                }}
              >
                James L. Stewart
              </Typography>
              <Typography
                sx={{
                  color: "#575757",
                  fontSize: "11.9px",
                  fontWeight: "600",
                  letterSpacing: "0.42px",
                }}
              >
                Volunteer
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src="./images/cesar.png" alt="" />
              <Typography
                sx={{
                  color: "#575757",
                  fontWeight: "600",
                  fontSize: "17px",
                  letterSpacing: "0.25px",
                  pt: "13px",
                }}
              >
                Cesar R. Watts
              </Typography>
              <Typography
                sx={{
                  color: "#575757",
                  fontSize: "11.9px",
                  fontWeight: "600",
                  letterSpacing: "0.42px",
                }}
              >
                Volunteer
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ mt: "7rem", mb: "4rem" }}>
        <Typography
          sx={{
            color: "#0E0E0E",
            fontWeight: "600",
            fontSize: "36px",
            display: "flex",
            mx: "auto",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "400px",
          }}
        >
          Case Study
        </Typography>
        <Box
          sx={{
            display: "flex",
            mx: "auto",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "400px",
          }}
        >
          <img src="./images/ourbenefactors.png" alt="" />
        </Box>
      </Box>
      <Box sx={{ my: "3rem", mx: "8rem" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            background: "#146356",
            height: "401.67px",
            borderRadius: "4px",
          }}
        >
          <Grid item xs={4}>
            <Box>
              <img src="/images/casestudy.png" alt="" />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ ml: "10px", mr: "60px" }}>
              <Typography
                sx={{
                  fontWeight: "700",
                  color: "#A3DA8D",
                  fontSize: "11.2px",
                  letterSpacing: "2.55px",
                }}
              >
                DISASTER MITIGATION
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  pt: "7px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    color: "#FFFFFF",
                    fontSize: "20.5px",
                    lineHeight: "27.17px",
                    letterSpacing: "0.25px",
                    width: "350px",
                  }}
                >
                  Switching to Clean Energy & Preserving our Abode, Earth.
                </Typography>
                <Button
                  sx={{
                    color: "#FFA17A",
                    fontWeight: "700",
                    padding: "13px 40px",
                    borderRadius: "4px",
                    position: "static",
                    border: "1.5px solid #FFA17A",
                  }}
                >
                  Donate
                </Button>
              </Box>
              <Typography
                sx={{
                  pt: "40.76px",
                  color: "#FAFAFA",
                  fontSize: "15.5px",
                  lineHeight: "24.7px",
                  letterSpacing: "0.42px",
                }}
              >
                Planning and zoning are examples of mitigation actions, as are
                floodplain protection, property acquisition and relocation, and
                public outreach projects. Installing disaster warning systems,
                purchasing radio communications equipment, and conducting
                emergency response training are examples of preparedness
                actions. Disaster mitigation is at the heart of emergency
                management.
              </Typography>
              <Typography
                sx={{
                  pt: "1rem",
                  color: "#A3DA8D",
                  fontWeight: "600",
                  fontSize: "12px",
                  pl: "440px",
                }}
              >
                67%
              </Typography>
              <img src="./images/progressbar2.png" alt="progress67" />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "585px",
                  color: "white",
                }}
              >
                <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                  Raised : $10.11 million
                </Typography>
                <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                  Goal: $23 million
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: "34px",
            width: "40.76px",
            height: "101.9px",
            display: "flex",
            gap: "20.5px",
          }}
        >
          <Box
            sx={{
              minWidth: "40.76px",
              height: "40.76px",
              border: "1.27px solid #146356",
              borderRadius: "50%",
            }}
          >
            <Typography
              sx={{
                color: "#146356",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                mx: "auto",
                my: "16px",
                width: "13.16px",
                height: "7.22px",
              }}
            >
              <SlArrowLeft />
            </Typography>
          </Box>
          <Box
            sx={{
              minWidth: "40.76px",
              height: "40.76px",
              border: "1.27px solid #146356",
              borderRadius: "50%",
            }}
          >
            <Typography
              sx={{
                color: "#146356",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                mx: "auto",
                my: "16px",
                width: "13.16px",
                height: "7.22px",
              }}
            >
              <SlArrowRight />
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mx: "8rem", my: "4rem" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={5}
        >
          <Grid item xs={4}>
            <Box
              sx={{
                background: "#FAFAFA",
                color: "#0E0E0E",
                width: "300px",
                height: "Hug (327.52px)",
                p: "21px",
              }}
            >
              <img src="/images/quatation.png" alt="quatation" />
              <Typography
                sx={{
                  mt: "27.17px",
                  mb: "34px",
                  color: "#0E0E0E",
                  fontSize: "16px",
                  lineHeight: "25px",
                  letterSpacing: "0.7px",
                  wordSpacing: "1.5px",
                }}
              >
                Human degradation of nature is the greatest challenge of the
                twenty-first century, yet it barely registers as a political
                issue. Environment solutions often create jobs & economic
                opportunities.
              </Typography>
              <Box sx={{ display: "flex", gap: "14px", alignItems: "center" }}>
                <img src="/images/goldie.png" alt="goldie" />
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "17px",
                      letterSpacing: "0.25px",
                    }}
                  >
                    Goldie D. Taylor
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "12px",
                      letterSpacing: "0.42px",
                      color: "#575757",
                    }}
                  >
                    Investor
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                background: "#FAFAFA",
                color: "#0E0E0E",
                width: "300px",
                height: "Hug (327.52px)",
                p: "21px",
              }}
            >
              <img src="/images/quatation.png" alt="quatation" />
              <Typography
                sx={{
                  mt: "27.17px",
                  mb: "54px",
                  color: "#0E0E0E",
                  fontSize: "16px",
                  lineHeight: "25px",
                  letterSpacing: "0.7px",
                  wordSpacing: "1.5px",
                }}
              >
                Environmental research has resulted in significant advancements
                that have resulted in the protection of human and ecosystem
                health. In the industrialized world, voluntary environmental
                agreements are a must.
              </Typography>
              <Box sx={{ display: "flex", gap: "14px", alignItems: "center" }}>
                <img src="/images/charles.png" alt="charles" />
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "17px",
                      letterSpacing: "0.25px",
                    }}
                  >
                    Charles M. Pruitt
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "12px",
                      letterSpacing: "0.42px",
                      color: "#575757",
                    }}
                  >
                    Advocacy Partner
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                background: "#FAFAFA",
                color: "#0E0E0E",
                width: "300px",
                height: "Hug (327.52px)",
                p: "21px",
              }}
            >
              <img src="/images/quatation.png" alt="quatation" />
              <Typography
                sx={{
                  mt: "27.17px",
                  mb: "34px",
                  color: "#0E0E0E",
                  fontSize: "16px",
                  lineHeight: "25px",
                  letterSpacing: "0.7px",
                  wordSpacing: "1.5px",
                }}
              >
                A brilliant strategy for finally making nature conservation and
                sustainability relevant in elections by supporting green
                candidates in all possible efforts. Let’s make that happen with
                our mechanisms.
              </Typography>
              <Box sx={{ display: "flex", gap: "14px", alignItems: "center" }}>
                <img src="/images/karen.png" alt="karen" />
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "17px",
                      letterSpacing: "0.25px",
                    }}
                  >
                    Karen J. Lugo
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "12px",
                      letterSpacing: "0.42px",
                      color: "#575757",
                    }}
                  >
                    Volunteer
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            pt: "90px",
            justifyContent: "center",
            alignItems: "center",
            gap: "27.17px",
          }}
        >
          <Typography
            sx={{
              background: "#146356",
              width: "5.1px",
              height: "5.1px",
              borderRadius: "50%",
              border: "5.1px solid #A3DA8D",
            }}
          ></Typography>
          <Typography
            sx={{
              background: "#5B9289",
              width: "5.1px",
              height: "5.1px",
              borderRadius: "50%",
            }}
          ></Typography>
          <Typography
            sx={{
              background: "#5B9289",
              width: "5.1px",
              height: "5.1px",
              borderRadius: "50%",
            }}
          ></Typography>
          <Typography
            sx={{
              background: "#5B9289",
              width: "5.1px",
              height: "5.1px",
              borderRadius: "50%",
            }}
          ></Typography>
        </Box>
      </Box>
      <Box sx={{ my: "8rem", ml: "8rem", mr: "4rem", color: "#0E0E0E" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item xs={6}>
            <Box sx={{ width: "440px" }}>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "27.17px",
                  lineHeight: "36.22px",
                }}
              >
                The Environment is All We Have In Common
              </Typography>
              <Typography
                sx={{
                  mt: "13.6px",
                  color: "#575757",
                  fontSize: "15.3px",
                  lineHeight: "25x",
                  letterSpacing: "0.43px",
                }}
              >
                Turning the ship around takes a lot of willpower and ingenuity.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing="70px"
          >
            <Grid item xs={4}>
              <img src="/images/adobe.png" alt="" />
            </Grid>
            <Grid item xs={4}>
              <img src="/images/dell.png" alt="" />
            </Grid>
            <Grid item xs={4}>
              <img src="/images/uber.png" alt="" />
            </Grid>
            <Grid item xs={4}>
              <img src="/images/paypal.png" alt="" />
            </Grid>
            <Grid item xs={4}>
              <img src="/images/microsoft.png" alt="" />
            </Grid>
            <Grid item xs={4}>
              <img src="/images/google.png" alt="" />
            </Grid>
            <Grid item xs={4}>
              <img src="/images/spotify.png" alt="" />
            </Grid>
            <Grid item xs={4}>
              <img src="/images/dropbox.png" alt="" />
            </Grid>
            <Grid item xs={4}>
              <img src="/images/nike.png" alt="" />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ background: "#FAFAFA", py: "5rem", px: "8rem" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Box sx={{ width: "440px" }}>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "35.67px",
                  lineHeight: "48px",
                }}
              >
                Sign Up For Environment News & Alerts
              </Typography>
              <Typography
                sx={{
                  mt: "27.17px",
                  color: "#575757",
                  fontSize: "15.3px",
                  lineHeight: "25x",
                  letterSpacing: "0.43px",
                }}
              >
                We are bringing worldwide concerns and solutions fresh to your
                emails. As opposed to what others do, we make our contributions
                timely.
              </Typography>
              <Box
                sx={{
                  mt: "28px",
                  mb: "20.5px",
                }}
              >
                <input
                  type="text"
                  placeholder="Enter your email address"
                  style={{
                    border: "1px solid #B9D1CD",
                    padding: "8px 8px 8px 20px",
                    width: "411.01px",
                    height: "35px",
                    borderRadius: "3.4px",
                    fontSize: "14px",
                  }}
                />
              </Box>
              <Button
                variant="contained"
                sx={{
                  background: "#146356",
                  padding: "14px 34px",
                  color: "#FAFAFA",
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Box
                sx={{
                  background: `url(${newsandalerts})`,
                  mixBlendMode: "normal",
                  backgroundSize: "cover",
                  width: "498.48px",
                  height: "445.83px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    my: "189px",
                  }}
                >
                  <img src="/images/play.png" alt="play" />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box></Box>
    </>
  );
}

export default Home;
