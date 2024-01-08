import * as React from 'react';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

let banner = require("../images/bannerME.png");
let industry = require("../images/indust2.jpg");
let railway = require("../images/railway4a.jpg");



const Item = styled(Paper)(({ theme }) => ({}));


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
                <Typography gutterBottom variant="h6" color="text.secondary" style={{textAlign: 'center'}}>
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
          <Item>
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
                  A Madera Engenharia oferece uma solução completa para projetos industriais, desde a concepção até a 
                  entrega final. Com uma equipe experiente e especializada, a empresa atua em todas as disciplinas
                  necessárias para o sucesso do projeto, incluindo engenharia civil, mecânica, elétrica e química. 
                  A <strong>ME</strong> também oferece serviços de diagnóstico de processos, que ajudam os clientes a
                    melhorar a eficiência e a produtividade de suas operações.                    
                </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                <Link href="Contact" underline="hover">
                  {'Quero mais Detalhes...'}
                </Link>
                </CardActions>
              </Card>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
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
                  <Typography gutterBottom variant="h6" color="text.secondary">
                  A Madera Engenharia é especialista em projetos de mobilidade urbana, oferecendo soluções 
                  completas para todas as etapas, desde a concepção até a entrega final. Com uma equipe experiente
                   e especializada nas disciplinas de material rodante, energia, sinalização & telecom, 
                   CCO e equipamentos auxiliares, a empresa atende às necessidades de clientes de todos os portes.
                    A <strong>ME</strong> também oferece serviços de modelagem operacional e para licitações, além de certificação
                     de projetos para novas linhas.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                <Link href="Contact" underline="hover">
                  {'Quero mais Detalhes...'}
                </Link>
                </CardActions>
              </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>

        

          
    </>
  );
}
