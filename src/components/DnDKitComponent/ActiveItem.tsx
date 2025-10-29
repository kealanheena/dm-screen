import React from "react";
import { Card, CardContent, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { CardType } from "@/types";


const ActiveItem = ({ id, title, width  }: CardType) => { 
  const style = {
		minWidth: '200px',
    height: "200px",
    opacity: 0.4,
  };

  return (
    <Grid  size={width}>
      <Card style={style}>
        <CardContent>
          <Grid
            container
            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Typography>
              {title}
            </Typography>

            {/* <Tooltip title="Move card">
              <IconButton>
                <OpenWithIcon/>
              </IconButton>
            </Tooltip> */}
          </Grid>

          <Typography >
            {id}
          </Typography>

        </CardContent>
      </Card>
    </Grid>
  );
};

export default ActiveItem;
