import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Card as CardType } from "@/types";


const ActiveItem = ({ id, title }: CardType) => { 
  const style = {
		minWidth: '200px',
    height: "200px",
    opacity: 0.4,
  };

  return (
    <Grid>
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
