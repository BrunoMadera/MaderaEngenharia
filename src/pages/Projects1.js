import * as React from 'react';
import Card from '@mui/material/Card';


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

let manag = require("../images/Banner_projects1.png");
let hydraulic = require("../images/hydraulic1.jpg");
let energy = require("../images/energy3.jpg");
let mecanic = require("../images/mecanic.png");
let chemistry = require("../images/chemistry.jpg");



export default function Projects1() {
  return ( 

    <>
<Box sx={{ flexGrow: 1 }} style={{marginTop: '0px'}}>
      <Grid container spacing={2} columns={8}>
        <Grid item xs={20}>
          <section>
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image={manag}
                    alt="madera engenharia"
                  />
                  <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <strong>Gerenciamentos de Projetos </strong> 
                    </Typography>
                <Typography gutterBottom variant="h6" color="text.secondary" style={{textAlign: 'left'}}>
                <ul>
                    <li><span>Gerenciamento de integração</span>:<em>Garantia de diversos componentes integrados de forma eficaz</em></li>
                    <li><span>Gerenciamento de escopos e tempos</span>:<em>Garantia que o projeto mantenha-se fiel ao acordado e concluído no prazo junto aos stakeholders</em></li>
                    <li><span>Gerenciamento de custos</span>:<em>Garantia que o projeto fique dentro do budget acordado</em></li>
                    <li><span>Gerenciamento de qualidade</span>:<em>Garantia que o projeto atenda o requisito acordado</em></li>
                    <li><span>Gerenciamento de riscos, comunicação, aquisições e recursos humanos</span><em> também são ofertados pela <strong>ME</strong></em></li>
                </ul>
                </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                      <Button size="small" onClick={() => {window.location.href="Contact";}}>Quero mais detalhes</Button>
                 </CardActions>
              </Card>
          </section>
        </Grid>

        <Grid item xs={4}>
          <section>
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={energy}
                    alt="madera engenharia"
                  />
                  <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <strong>Projetos e Instalações para Sistemas Elétricos em BT e MT</strong> 
                    </Typography>
                <Typography gutterBottom variant="h6" color="text.secondary" style={{textAlign: 'justify'}}>
                </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                <CardActions>
                      <Button size="small" onClick={() => {window.location.href="Contact";}}>Quero mais detalhes</Button>
                 </CardActions>
                </CardActions>
              </Card>
          </section>
        </Grid>
        
        <Grid item xs={4}>
          <section>
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={hydraulic}
                    alt="madera engenharia"
                  />
                  <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <strong>Protótipos e Metodologia de testes para novos sistemas Hidráulicos</strong> 
                    </Typography>
                  <Typography gutterBottom variant="h6" color="text.secondary">
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                      <Button size="small" onClick={() => {window.location.href="Contact";}}>Quero mais detalhes</Button>
                 </CardActions>
              </Card>
          </section>
        </Grid>

        <Grid item xs={4}>
          <section>
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={mecanic}
                    alt="madera engenharia"
                  />
                  <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <strong>Definição das necessidades e estruturas Mecânicas</strong> 
                    </Typography>
                  <Typography gutterBottom variant="h6" color="text.secondary">
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                      <Button size="small" onClick={() => {window.location.href="Contact";}}>Quero mais detalhes</Button>
                 </CardActions>
              </Card>
          </section>
        </Grid>

        <Grid item xs={4}>
          <section>
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={chemistry}
                    alt="madera engenharia"
                  />
                  <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <strong>Metodologia de criação de novas rotas de desenvolvimento para processos Químicos</strong> 
                    </Typography>
                  <Typography gutterBottom variant="h6" color="text.secondary">
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                      <Button size="small" onClick={() => {window.location.href="Contact";}}>Quero mais detalhes</Button>
                 </CardActions>
              </Card>
          </section>
        </Grid>





      </Grid>
    </Box>

        

          
    </>
  );
}
