import { ExpandMore } from "@mui/icons-material";
import { Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, Collapse, Paper } from "@mui/material";
import { red } from "@mui/material/colors";

export default function About() {
    return (
        <>
            <Paper sx={{ maxWidth: 345, margin: 'auto' }} elevation={8} >
                <Card >
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            SK
                        </Avatar>
                        }
                        title="Sandesh Kota"
                        subheader="Full Stack Developer"
                    />
                    <CardMedia
                        component="img"
                        image="https://sandeshkota.github.io/assets/img/profile-img.jpg"
                        alt="Sandesh Kota"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            I am a very inquisitive person who loves to understand the core concepts of any topic
                        </Typography>
                    </CardContent>
                </Card>
            </Paper>
        </>
    );
}