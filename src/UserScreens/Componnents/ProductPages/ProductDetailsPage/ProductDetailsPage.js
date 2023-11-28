import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Box, Grid, LinearProgress, Rating, Typography } from "@mui/material";
import ReviewCard from "./ReviewCard";
import { useLocation } from "react-router";
import HomePageProductSlider from "../../CarouselSliders/HomePageProductSlider";

// const product = {
//   name: "Premium Sneakers",
//   price: "$149.99",
//   href: "#",
//   breadcrumbs: [
//     { id: 1, name: "Men", href: "#" },
//     { id: 2, name: "Shoes", href: "#" },
//   ],
//   images: [
//     {
//       src: "https://placekitten.com/800/600",
//       alt: "High-quality sneakers from various angles.",
//     },
//     {
//       src: "https://placekitten.com/800/601",
//       alt: "Close-up view of the sneaker's sole.",
//     },
//     {
//       src: "https://placekitten.com/800/602",
//       alt: "Model wearing Premium Sneakers.",
//     },
//     {
//       src: "https://placekitten.com/800/600",
//       alt: "High-quality sneakers from various angles.",
//     },
//     {
//       src: "https://placekitten.com/800/601",
//       alt: "Close-up view of the sneaker's sole.",
//     },
//     {
//       src: "https://placekitten.com/800/602",
//       alt: "Model wearing Premium Sneakers.",
//     },
//   ],
//   colors: [
//     { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
//     { name: "Black", class: "bg-black", selectedClass: "ring-gray-900" },
//     { name: "Blue", class: "bg-blue-500", selectedClass: "ring-blue-500" },
//   ],
//   sizes:  [
//     { name: " S  ", inStock: true },
//     { name: " L  ", inStock: true },
//     { name: "XL  ", inStock: true },
//     { name: "XXL ", inStock: true },
//     { name: "XXXL", inStock: true },

//   ],
//   description:
//     'Step into style with our Premium Sneakers. These high-quality shoes are designed for comfort and durability. Whether you\'re hitting the gym or going for a casual stroll, these sneakers have you covered.',
//   highlights: [
//     "Premium materials for lasting comfort",
//     "Sleek and modern design",
//     "Available in multiple colors",
//     "Versatile for various occasions",
//   ],
// };
const sizes = [
  { name: " S  ", inStock: true },
  { name: " L  ", inStock: true },
  { name: "XL  ", inStock: true },
  { name: "XXL ", inStock: true },
  { name: "XXXL", inStock: true },
];
const colors = [
  { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
  { name: "Black", class: "bg-black", selectedClass: "ring-gray-900" },
  { name: "Blue", class: "bg-blue-500", selectedClass: "ring-blue-500" },
];
const progressBarData = [
  { key: 1, label: "Excellent", value: 40, color: "success" },
  { key: 2, label: "VeryGood", value: 60, color: "info" },
  { key: 3, label: "Good", value: 30, color: "secondary" },
  { key: 4, label: "Average", value: 20, color: "warning" },
  { key: 5, label: "Poor", value: 10, color: "error" },
];

const ProgressBars = () => (
  <Box className="mt-5" px={4}>
    {progressBarData.map(({ key, label, value, color }) => (
      <Grid key={key} container alignItems="center" spacing={2}>
        <Grid item xs={4} lg={2}>
          <Typography>{label}</Typography>
        </Grid>
        <Grid item xs={8} lg={6} px={1}>
          <LinearProgress
            sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
            variant="determinate"
            value={value}
            color={color}
          />
        </Grid>
      </Grid>
    ))}
  </Box>
);
const reviews = { href: "#", average: 4.5, totalCount: 85 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const comments = [
  { id: 1, author: "User1", content: "Great product!", date: "2023-01-01" },
  { id: 2, author: "User2", content: "Love it!", date: "2023-01-02" },
  // Add more comments as needed
];

const ProductDetailsPage = () => {
  const location = useLocation();
  const { state } = location;
  const { product } = state;
  console.log("dddddddddddd");
  console.log(product);
  console.log("dddddddddddd");

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[2]);
  const [showDescription, setShowDescription] = useState(true);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    // Add your logic to handle comment submission
    const currentDate = new Date().toISOString().split("T")[0];
    const newCommentObj = {
      id: comments.length + 1,
      author: "User", // Replace with actual user information if available
      content: newComment,
      date: currentDate,
    };
    comments.push(newCommentObj);
    setNewComment("");
  };
  const ImageGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        {/* Large Image */}
        <div
          className="w-500px h-800px mb-4 overflow-hidden rounded-lg shadow-lg flex items-center justify-center"
          style={{ height: 400, alignItems: "center" }}
        >
          <img
            src={selectedImage}
            alt={""}
            className="object-cover w-full h-auto"
            style={{ maxHeight: "100%", width: "auto" }}
          />
        </div>

        {/* Small Images */}
        <div className="grid grid-cols-8 gap-2">
          {images.map((image) => (
            <img
              style={{ maxHeight: "100%", width: "auto" }}
              key={image}
              src={image}
              alt={""}
              className="w-full h-20 object-cover rounded-md cursor-pointer"
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
        <br />
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 flex flex-col lg:flex-row">
        {/* Product Image */}
        <ImageGallery images={product.images} />

        {/* Product Details */}
        <div className="lg:w-1/2 pl-4 lg:pl-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.title}
          </h1>
          <p className="text-xl font-semibold text-indigo-600 mb-4">
            {product.price}
          </p>

          {/* Reviews */}
          <div className="flex items-center mb-4">
            <Rating name="read-only" value={3.3} readOnly />

            <span className="text-gray-600 ml-2">
              {reviews.average.toFixed(1)} ({reviews.totalCount} reviews)
            </span>
          </div>

          {/* Color Selection */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Color</h2>
            <RadioGroup
              value={selectedColor}
              onChange={setSelectedColor}
              className="mt-2 flex flex-wrap"
            >
              {colors.map((color) => (
                <RadioGroup.Option
                  key={color.name}
                  value={color}
                  className={({
                    active,
                    checked,
                  }) => `cursor-pointer inline-flex items-center mr-2 mb-2
                    p-1 border border-transparent rounded-full focus:outline-none 
                    ${active ? "ring ring-offset-2 ring-indigo-500" : ""}
                    ${
                      checked
                        ? "bg-indigo-500 border-indigo-500 text-white"
                        : ""
                    }
                    ${!color.inStock ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <span
                    className={`h-8 w-8 rounded-full border border-gray-200 ${color.class}`}
                  ></span>
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Size</h2>
            <RadioGroup
              value={selectedSize}
              onChange={setSelectedSize}
              className="mt-2 flex flex-wrap"
            >
              {sizes.map((size) => (
                <RadioGroup.Option
                  key={size.name}
                  value={size}
                  className={({
                    active,
                    checked,
                  }) => `cursor-pointer inline-flex items-center mr-2 mb-2
                    p-2 border border-transparent rounded-md focus:outline-none 
                    ${active ? "ring ring-offset-2 ring-indigo-500" : ""}
                    ${
                      checked
                        ? "bg-indigo-500 border-indigo-500 text-white"
                        : ""
                    }
                    ${!size.inStock ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {size.name}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>

          {/* Add to Cart Button */}
          <button
            className="bg-indigo-500 text-white px-6 py-3 rounded-md hover:bg-indigo-600 focus:outline-none"
            disabled={!selectedColor.inStock || !selectedSize.inStock}
          >
            Add to Cart
          </button>
          <div className="container mx-auto mt-8 p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Description
              </h2>
            </div>

            <div>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8  pr-16 pl-10 ">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Leave a Review
        </h3>

        <br />
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="4"
          placeholder="Write your comment here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          onClick={handleCommentSubmit}
          className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none"
        >
          Submit Comment
        </button>
      </div>
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          px: 4,
          mr: 2,
          // display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 300,

          color: "black",
          textDecoration: "none",
        }}
      >
        Ratings and Reviews
      </Typography>

      <Grid container alignItems="center">
        <Grid item xs={12} lg={6}>
          <ProgressBars />
        </Grid>
        <Grid item xs={12} lg={6}></Grid>
      </Grid>

      {/* Description and Comments */}

      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <HomePageProductSlider/>
    <HomePageProductSlider/>
    </div>
  );
};

export default ProductDetailsPage;
