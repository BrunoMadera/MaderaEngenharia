import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

let banner = require("../images/bannerME.png");
let industry = require("../images/indust2.jpg");
let railway = require("../images/railway4a.jpg");




export default function Home() {
  return ( 

    <>

<Card >
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image={banner}
                alt="madera engenharia"
              />
              <CardContent style={{backgroundColor:'rgb(0,0,0,0.1'}}>
                <Typography gutterBottom variant="h5" component="div" >
                  <strong><span>Projetos completos, Sem complicações.</span></strong> 
                </Typography>
                <Typography gutterBottom variant="h6" color="text.secondary" style={{textAlign: 'justify'}}>
              A Madera Engenharia é uma empresa completa de engenharia, que oferece  <span>soluções 
              para projetos de todos os portes</span>. Com uma equipe experiente e especializada, a <strong>ME</strong> atende a todas
               as necessidades de seus clientes, desde a concepção até a entrega final.
                </Typography>
              </CardContent>

              
            </CardActionArea>
          </Card>

    <Box sx={{ flexGrow: 1 }} style={{marginTop: '15px'}}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={6}>
          <p>
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={industry}
                    alt="madera engenharia"
                  />
                  <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <strong>Soluções Industriais</strong> 
                    </Typography>
                <Typography gutterBottom variant="h6" color="text.secondary" style={{textAlign: 'justify'}}>
                  A Madera Engenharia oferece uma solução completa para projetos industriais até a 
                  entrega final. Com uma equipe experiente e especializada e em todas as disciplinas
                  necessárias para o sucesso do projeto. 
                  A <strong>ME</strong>  oferece serviços de diagnóstico de processos e equipamentos, que ajudam os clientes a
                    melhorar a eficiência e a produtividade de suas operações.                    
                </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                      <Button size="small" onClick={() => {window.location.href="Contact";}}>Quero mais detalhes</Button>
                 </CardActions>
              </Card>
          </p>
        </Grid>
        <Grid item xs={6}>
          <p>
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={railway}
                    alt="madera engenharia"
                  />
                  <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <strong>Soluções Metroferroviárias</strong> 
                    </Typography>
                  <Typography gutterBottom variant="h6" color="text.secondary" style={{textAlign: 'justify'}}>
                  A Madera Engenharia atua em projetos de mobilidade urbana, oferecendo soluções 
                  para todas as etapas, desde concepção até O&M e treinamentos, abrangendo todas as disciplinas em sistemas atendendo às 
                  necessidades de clientes de todos os portes.
                  A <strong>ME</strong> oferece serviços de modelagem operacional para licitações e certificação
                     de projetos para novas linhas.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                <CardActions>
                      <Button size="small" onClick={() => {window.location.href="Contact";}}>Quero mais detalhes</Button>
                 </CardActions>
                </CardActions>
              </Card>
          </p>
        </Grid>
      </Grid>
    </Box>

        

          
    </>
  );
}
