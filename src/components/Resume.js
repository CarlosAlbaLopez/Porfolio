import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#171717",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #53599a",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    fontFamily: "Rubik",
    fontSize: "2rem",
    fontWeight: "bold",
    padding: "1rem",
    borderBottom: "2px solid #53599a",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#53599a #53599a transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#53599a",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #53599a #53599a",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "11.375rem",
    margin: "0 3rem 0 auto",
    background: "#000",
    color: "#f4f7f5",
    lineHeight: 1,
    padding: "1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "#f4f7f5",
    fontSize: "40px",
    fontWeight: "bold",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#f4f7f5",
    fontSize: "32px",
    padding: "0",
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          <a id="linktowork" href>
            trayectoria profesional
          </a>
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2013
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              .NET Developer + COO
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#808080" }}
            >
              60dias
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "#f4f7f5", textAlign: "justify" }}
            >
              Aumento de la facturación en un 200% mediante la aplicación de
              procesos de mejora continua, automatización de procesos e
              implantación de KPIs. <br></br> Reducción en un 50% de los gastos
              de proveedores externos en el plazo de 1 año mediante negociación
              con diferentes proveedores. <br></br> Cierre de acuerdos de
              colaboración y aumento del número de clientes en un 200% a través
              de negociaciones y la suscripción de acuerdos de nivel de
              servicio.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Cofundador
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#808080" }}
            >
              IVA303
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "#f4f7f5", textAlign: "justify" }}
            >
              IVA303 es un servicio integral para optimizar la contabilidad
              financiera de empresas mediante una aplicación móvil de captura de
              gastos y generación de liquidaciones.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Desarrollador full stack
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#808080" }}
            >
              HACK A BOSS
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "#f4f7f5", textAlign: "justify" }}
            >
              He desarrollado un proyecto de forma autónoma independiente para
              Hack A Boss, que a su vez ha sido el proyecto de final de
              bootcamp.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
