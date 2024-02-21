import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Drawer, colors } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import SellerSideBar from "../SellerSideBar";
// import { ColorLens } from '@mui/icons-material';

const pages = ["Men", "Women", "Sports", "Children","offer"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar({isSmallScreen,shop}) {
  const [selectedButton, setSelectedButton] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] =useState(null);
  const navigate = useNavigate();

  const [openDrawer , setOpenDrawer] = useState(false);


   const handleOpendrawer = () => setOpenDrawer(true);
   const handleClosedrawer = () => setOpenDrawer(false);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {

    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleClick = (page) => {
    setSelectedButton(page);
    // Additional logic or actions you want to perform when a button is clicked
    handleCloseNavMenu();
  };
  const CartButton=()=>{
    const handleCartClick=()=>{

    }
    return <Link to={`/Cart`}>
                  <IconButton
      color="inherit"
      aria-label="Open shopping cart"
      sx={{
        '&:hover': {
          backgroundColor: 'transparent', // Remove the default hover background
        },
      }}
    >
      <Button sx={{backgroundColor:"black",'&:hover': {
          backgroundColor: 'black', // Remove the default hover background
        },}}>
        <ShoppingCart sx={{color:"white"}} />
        <Typography sx={{color:"white"}}>O</Typography>
        
        </Button>
      
    </IconButton>
    </Link>

  }

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{backgroundColor:'#002244'}}>
       
      <div>
        <Toolbar disableGutters sx={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingX:'1rem',width:'100vw'}}>
        <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => navigate('/')}
        variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
      >
        <SellerSideBar shop={shop} />
      </Drawer>

 
        {isSmallScreen &&  <Box paddingLeft={'0.3rem'} onClick={handleOpendrawer}>
          <BiMenuAltLeft size={24} color="white"/>
        </Box> }

          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
       
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            ShopSphere
          </Typography>
     

      
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
           ShopSphere
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            
         
          </Box>
          {/* <IconButton onClick={handleOpenUserMenu} sx={{ marginRight:2 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton> */}

          {/* <Box sx={{ flexGrow: 0 , display: { xs: "none", md: "flex" }}}>
            <Tooltip >
             
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } ,alignItems:"center"}}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => handleClick(page)}

                    sx={{ 
                      my: 2, 
                      color: selectedButton === page ? 'white' : 'white',
                      backgroundColor:selectedButton === page ? 'black' : 'inherit',
                     
                     
                       display: "block", 

                       mx: 1.5,
                       '&:hover': {
                        backgroundColor: 'gray', // Remove the default hover background
                      }, }}
                  >
                    {page}
                  </Button>
                ))}
                  <CartButton/>
              </Box>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          
          {isSmallScreen &&     <Box sx={{  display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <BsThreeDotsVertical size={24} color="white"  />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{}}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>}

        </Toolbar>
      </div>
    </AppBar>
  );
}
export default ResponsiveAppBar;
