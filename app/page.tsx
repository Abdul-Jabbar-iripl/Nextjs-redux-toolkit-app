"use client";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Container>
        <Typography variant="h4" gutterBottom>
          My Productivity Suite
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Link href="/todo" passHref>
              <Card>
                <CardContent>
                  <Typography variant="h6">Manage Tasks</Typography>
                  <Typography variant="body2">
                    Organize your tasks efficiently.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link href="/sidebar" passHref>
              <Card>
                <CardContent>
                  <Typography variant="h6">Explore Sidebar</Typography>
                  <Typography variant="body2">
                    Access the hidden menu and more features.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          {/* <Grid item xs={12} sm={4}>
            <Link href="/calendar" passHref>
              <Card>
                <CardContent>
                  <Typography variant="h6">Calendar & Reminders</Typography>
                  <Typography variant="body2">
                    Track events and set reminders.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
