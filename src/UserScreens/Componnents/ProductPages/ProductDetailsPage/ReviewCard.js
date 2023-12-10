import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Rating,
  colors,
  Grid,
  IconButton,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReplyIcon from "@mui/icons-material/Reply";
import ShareIcon from "@mui/icons-material/Share";

const ReviewCard = ({ reviewItem }) => {
  const dummyReviews = [
    {
      id: 1,
      user: "John Doe",
      rating: 4.5,
      date: "2023-01-15",
      totalReviews: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper odio ut risus varius, quis sollicitudin purus eleifend.",
    },
  ];

  return (
    <div p={10}>
      <Card sx={{ display: "flex", alignItems: "top", p: 2, boxShadow: 1 }}>
        <Avatar sx={{ width: 55, height: 55, mr: 2 }} />
        <div>
          <Grid container>
            <Grid item xs={12} lg={1.75}>
              <Typography variant="h5" sx={{ display: "inline" }}>
                {reviewItem.user.firstName}
              </Typography>
              <br />
              <Typography
                variant="body2"
                sx={{ color: colors.grey[600], display: "inline" }}
              >
                Total Reviews: {dummyReviews[0].totalReviews}
              </Typography>
              <br />
              <Rating
                name="rating"
                value={dummyReviews[0].rating}
                precision={0.5}
                readOnly
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", mt: 1 }}
              >
                <AccessTimeIcon sx={{ mr: 0.5, fontSize: "small" }} />
                {new Date(dummyReviews[0].date).toLocaleDateString()}
              </Typography>
              <Typography>{reviewItem.review}</Typography>
              <div sx={{ display: "flex", mt: 1, alignItems: "center" }}>
                <IconButton size="small" color="primary">
                  <ThumbUpIcon />
                </IconButton>
                <IconButton size="small" color="primary">
                  <ReplyIcon />
                </IconButton>
                <IconButton size="small" color="primary">
                  <ShareIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default ReviewCard;
