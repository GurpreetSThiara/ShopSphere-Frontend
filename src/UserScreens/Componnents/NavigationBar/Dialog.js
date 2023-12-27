import { Avatar, Button, Card, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Cancel as CancelIcon } from "@mui/icons-material";
import PropTypes from "prop-types";
import { primaryButton, primaryColor } from "../../../Constants/Constants";
import { useNavigate } from "react-router";

export const SwitchAccountDialog = ({ open, handleClose }) => {
  const profiles = JSON.parse(localStorage.getItem("Profiles")) || [];
  const navigate = useNavigate();

  const handleProfileSwitch = (jwt)=>{
        localStorage.setItem("jwt",jwt);
        navigate("/");
        window.location.reload();
        
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <DialogTitle>Switch Account</DialogTitle>
      <DialogContent>
        {profiles.map((profile) => (
          <Card onClick={()=>{handleProfileSwitch(profile.jwt)}} key={profile.email} value style={{ marginBottom: '8px', padding: '16px', display: 'flex', alignItems: 'center' }}>
            <Avatar style={{ backgroundColor: primaryColor, marginRight: '16px' }}>
              {profile.email.charAt(0).toUpperCase()}
            </Avatar>
            <span>{profile.email}</span>
          </Card>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={primaryButton} startIcon={<CancelIcon />}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};



export default SwitchAccountDialog;
