/*Carl Christiansen

*/

import React from "react";
import Header from "../components/Header";
import theme from "../theme";
import { Container, Paper, Typography } from "@mui/material";

function AboutUs() {
  return (
    <Container>
      <Header text="About Us" />
      <Paper
        sx={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: "29px",
          p: 4,
          mb: `calc(72px + ${theme.spacing(2)})`,
          marginY: 4,
        }}
      >
        <Typography fontWeight="bold" color={theme.palette.common.white} mb={1}>
          How to get your book{" "}
        </Typography>
        <Typography color="rgba(255,255,255,0.8)" mb={3}>
          Currently, we can only reserve an item for you after we received your
          payment and your appointment request. Therefore, right after you pay
          for the wished item, you will submit a form with the time and date for
          coming at the store and picking up the item, as well as the
          transaction ID which is needed in order to verify the purchase.
        </Typography>
      </Paper>

      <div style={{ marginBottom: "150px" }}>
        <iframe
          title="yes"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.0747629169948!2d10.199207333959114!3d56.150014022186504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3f8d11dad5df%3A0xdfe7ecf32383a789!2sEnglish%20Books!5e0!3m2!1sda!2sdk!4v1670406669812!5m2!1sda!2sdk"
          width="100%"
          height="300"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
}

export default AboutUs;
