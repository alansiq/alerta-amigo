"use client";
import Image from "next/image";
import Link from "next/link";
import MapView from "./view/map/page";
import { Button, Typography, Stack, Container, Box} from "@mui/material";
import dynamic from 'next/dynamic';


const Mapbox = dynamic(() => import('../components/mapbox'), { ssr: false });

export default function Home() {
  return (
    <Container maxWidth="sm" sx={{
      height: "100%",
      margin: "0",
      padding: "0",
    }}>
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      width: "100%",
      padding: 0,
      margin: 0,
      }}>
      <Box sx={{
        height: "100%",
      }}>
      <Mapbox />
      </Box>
      <Box sx={{
        height: "20%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>

          <Stack spacing={1} sx={{
            width: "100%",
            padding: 3
          }}>
            <Link href="/view/map">
              <Button size="large" variant="contained" sx={{
                width: "100%"
              }} >Criar alerta</Button></Link>
            <Link href="/view/list">
              <Button variant="contained" size="large" sx={{
                width: "100%"
              }}>Últimos alertas</Button></Link>
          </Stack>
      </Box>
    </Box>
    </Container>
    
  );
}
