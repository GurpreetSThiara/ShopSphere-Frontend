import React from "react";
import {
  Avatar,
  Card,
  Typography,
  Rating,
  colors,
  Grid,
  IconButton,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ReviewCard = ({ reviewItem }) => {
  return (
    <div style={{ padding: 10 }}>
      <Card
      
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 20,
          width:'50vw',
          gap: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt={reviewItem.user.firstName}
            src={reviewItem.user.avatar}
            sx={{ width: 55, height: 55, marginRight: 2 }}
          />
          <Typography variant="h6">{reviewItem.user.firstName}</Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Rating
            name="rating"
            value={reviewItem.rating}
            precision={0.5}
            readOnly
          />
          <Typography
            variant="body2"
            color={colors.grey[600]}
            style={{ marginLeft: "auto" }}
          >
            {new Date(reviewItem.createdAt).toLocaleString()}
          </Typography>
        </div>
        {/* <Typography variant="body2" color={colors.grey[600]}>
          Total Reviews: {reviewItem.user.totalReviews}
        </Typography> */}
        <Typography>{reviewItem.review}</Typography>
        {/* <div style={{ display: "flex", marginTop: 8 }}>
          <IconButton size="small" color="primary">
            <ThumbUpIcon />
          </IconButton>
          <IconButton size="small" color="primary">
            <ReplyIcon />
          </IconButton>
          <IconButton size="small" color="primary">
            <ShareIcon />
          </IconButton>
        </div> */}
      </Card>
    </div>
  );
};

export default ReviewCard;
