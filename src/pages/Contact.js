import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import SendIcon from '@mui/icons-material/Send';


import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';

import TextField from '@mui/material/TextField';


let reachUs = require("../images/reachUs.jpg");

export default function Contact() {
  return ( 

    <>
<div className="content">


    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={1} columns={12}>
        
        <Grid xs={4}>
          <section style={{border:'none', textAlign:"center"}}>
            <section>
              <Card>
                <CardActionArea>
                  <CardMedia
                  component="img"
                  height="600"
                  image={reachUs}
                  alt="contato"
                  />
                </CardActionArea>
              </Card>
            </section>
           </section> 
        </Grid>

        <Grid xs={8}>

          <section style={{backgroundColor:'whitesmoke', }}>
            <p className="h9">Fale conosco</p>
            <p className="h10">Prencha os campos abaixo e nossa equipe entrará em contato o mais breve possível</p>
          </section>

          <section style={{backgroundColor:'whitesmoke'}}>
            <TextField 
            id="standard-basic" 
            label="Nome" 
            variant="standard" 
            placeholder='Preencha aqui seu nome completo' 
            sx={{ width: '800px', margin:'15px',}}
            />

            <TextField 
            id="standard-basic" 
            label="Email" 
            variant="standard" 
            placeholder='Preencha aqui seu melhor e-mail' 
            sx={{ width: '800px', margin:'15px'}}
            />

            <TextField 
            id="standard-basic" 
            label="Telefone" 
            variant="standard" 
            placeholder='Preencha aqui seu celular' 
            sx={{ width: '800px', margin:'15px'}}
            />          

            <TextField 
            fullWidth
            id="standard-basic" 
            label="Mensagem" 
            variant="standard" 
            placeholder='Deixe aqui sua mensagem...' 
            sx={{ width: '800px', margin:'15px'}}
            multiline
              maxRows={4}
            />
            
            <Button variant="contained" color="success" endIcon={<SendIcon />}>
              Enviar
            </Button>
            
          </section>


        </Grid>
      
      </Grid>
    </Box>

</div>
    
    </>
  );
}
