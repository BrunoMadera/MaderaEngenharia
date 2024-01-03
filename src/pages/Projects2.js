import * as React from 'react';
import Card from '@mui/material/Card';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

let manag = require("../images/manag.png");
let mro = require("../images/mro.jpg");
let energy = require("../images/energy.jpg");
let sinal = require("../images/telecom.jpg");
let vp = require("../images/vp.jpg");







const Item = styled(Paper)(({ theme }) => ({}));


export default function Projects2() {
  return ( 

    <>

    projetos ferroviarios


<Box sx={{ flexGrow: 1 }} style={{marginTop: '15px'}}>
      <Grid container spacing={2} columns={8}>
        <Grid item xs={20}>
          <Item>
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
                  <strong>Certificações & Gerenciamentos</strong> 
                    </Typography>
                <Typography gutterBottom variant="h6" color="text.secondary" style={{textAlign: 'left'}}>
                <ul>
                    <li>Consultoria de Engenharia de Sistemas para implantação de novas linhas</li>
                    <li>Definição de modelo de negócio e Planejamento estratégico</li>
                    <li>Definição de rotinas geremnciais para a fase operacional</li>
                    <li>Consultoria executiva para continuidade do negócio</li>
                    <li>Testes de aderência ao orçamento e planos de correção de curso</li>
                    <li>Direcionamento na transformação digital.</li>
                    <li>Escolha de sistemas e software para gerenciamento da operação e manutenção</li>
                </ul>
                </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="warning" href='Contact'>  
                    Quero mais detalhes...
                  </Button>
                </CardActions>
              </Card>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={mro}
                    alt="madera engenharia"
                  />
                  <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <strong>Material Rodante</strong> 
                    </Typography>
                <Typography gutterBottom variant="h6" color="text.secondary" style={{textAlign: 'justify'}}>
                    <ul>
                        <li>Especificação Técnica para aquisição de novos trens</li>
                        <li>Gestão e acompanhamento da manufatura e entrega local : Testes Tipo e Série</li>
                        <li>Interface 360° com todos os atores na implantação</li>
                        <li> Manutenção (Definição ou atualização)</li>
                        <li>Definição de rotina ótima para manutenção</li>
                        <li>Definição das necessidades de MdO, ferramental e gigas</li>
                        <li> Documentação Técnica ( Revisão e otimização)</li>
                        <li>Realização ou Fiscalização da entrega final</li>
                        <li>Capacitação e treinamento de pessoal</li>
                    </ul>                    
                </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="warning" href='Contact'>  
                    Quero mais detalhes...
                  </Button>
                </CardActions>
              </Card>
          </Item>
        </Grid>
        
        <Grid item xs={4}>
          <Item>
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
                  <strong>Energia</strong> 
                    </Typography>
                  <Typography gutterBottom variant="h6" color="text.secondary">
                  <ul>
                    <li>Rede Aérea (Projeto e dimensionamento)</li>
                    <li>Simulação de Tração</li>
                    <li>Subestações de Tração e auxiliares</li>
                    <li>Sistemas de Proteção, Aterramento e SPDA</li>
                    <li>Gestão de Energia  e mercado livre</li>
                    <li>Sistemas para Gerenciamento e Controle </li>
                    <li>Interface para integração de sistemas</li>
                    <li>Fiscalização e comissionamento</li>
                    <li>Manutenção ( Otimização de processos)</li>
                    <li>Capacitação e treinamento de pessoal</li>
                  </ul>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="warning" href='Contact'>  
                    Quero mais detalhes...
                  </Button>
                </CardActions>
              </Card>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={sinal}
                    alt="madera engenharia"
                  />
                  <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <strong>Sinalização & Telecom</strong> 
                    </Typography>
                  <Typography gutterBottom variant="h6" color="text.secondary">
                    <ul>
                        <li>Definição de tecnologia (Simulação de novos sistemas)</li>
                        <li>Interface integração de Sistemas</li>
                        <li>Gestão de implantação (Prazos e Custos controlados)</li>
                        <li>Gerenciamento e Fiscalização até a entrega final</li>
                        <li>Comissionamento, gestão integrada e  testes de segurança</li>
                        <li>Documentação Técnica ( Revisão e As-Built)</li>
                        <li>Escopo de CCO (Centro de Controle Operacional)</li>
                        <li>Manutenção (Otimização de processos)</li>
                        <li>Capacitação e treinamento de pessoal</li>
                    </ul>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="warning" href='Contact'>  
                    Quero mais detalhes...
                  </Button>
                </CardActions>
              </Card>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={vp}
                    alt="madera engenharia"
                  />
                  <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <strong>Via Permanente</strong> 
                    </Typography>
                  <Typography gutterBottom variant="h6" color="text.secondary">
                  <ul>
                    <li>Avaliação de Condição Atual versus Necessidade de Projeto</li>
                    <li>Definição de Traçado Geométrico</li>
                    <li>Avaliação de Novas Tecnologias</li>
                    <li>Levantamento Topográfico</li>
                    <li>Projetos para Dispositivos de Medição de Gabaritos</li>
                    <li>Planos de Correção para Gabaritos</li>
                    <li>Reconstituição e Limpeza de Lastro</li>
                    <li>Laudos e planos de ação</li>
                    <li>Manutenção (Otimização de processos)</li>

                </ul>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="warning" href='Contact'>  
                    Quero mais detalhes...
                  </Button>
                </CardActions>
              </Card>
          </Item>
        </Grid>





      </Grid>
    </Box>

        

          
    </>
  );
}
