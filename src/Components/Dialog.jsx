import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useAuthContext } from "../Context/authContext";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { useFilterContext } from "../Context/FilterContext";

export default function ResponsiveDialog() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const postCollectionRef = collection(db, "tracker");
  let navigate = useNavigate();
  const [item, setItem] = useState("");
  const [price, setPrice] = useState();

  const { state } = useAuthContext();
  const { searchedItem, Searched, updateItems } = useFilterContext();

  let uid = state.userInfo.user.uid;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function CreatePost() {
    await addDoc(postCollectionRef, {
      item,
      price,
      uid,
    });
    navigate("/");
    // console.log(auth);
  }

  const handleChange = (e) => {
    searchedItem(e.target.value.toLowerCase());
    updateItems();
  };

  // useEffect(() => {
  //   updateItems();
  // }, [Searched]);
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={Searched}
          onChange={(e) => handleChange(e)}
        />
      </Box>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Box>
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Add item"}</DialogTitle>
          <DialogContent>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="on"
            >
              <TextField
                id="outlined-uncontrolled"
                label="Item name"
                defaultValue="foo"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                required
              />
              <TextField
                id="outlined-uncontrolled"
                label="Price"
                type="number"
                defaultValue=""
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                required
              />
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Basic date picker" />
                </DemoContainer>
              </LocalizationProvider> */}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleClose(), CreatePost();
              }}
              autoFocus
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
