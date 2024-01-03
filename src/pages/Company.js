import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

let banner = require("../images/banner_blue.png");
let location = require("../images/location1.png");
let mvv = require("../images/mvv.png");


export default function Company() {
  return (

    <>
           <Card >
            <CardActionArea>
              <CardMedia
                component="img"
                height="90"
                image={banner}
                alt="madera engenharia"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Quem Somos?
                </Typography>
                <Typography gutterBottom variant="h6" color="text.secondary">
                  Fundada em 2021 e se consolidando na trajetória de excelência e dedicação a Madera Engenharia é uma empresa 
                  especializada em soluções de engenharia em formato <em>turn-key</em>, 
                  oferecendo serviços completos para soluções de engenharia.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

           <Card >
            <CardActionArea>
              <CardMedia
                component="img"
                height="80"
                image={mvv}
                alt="madera engenharia"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Missão, Visão e Valores
                </Typography>
                <Typography gutterBottom variant="h6" color="text.secondary">
                  <p className="Tit1">Missão</p>
                    <p className="Tit2">
                    A missão da Madera Engenharia é oferecer soluções de engenharia eficientes, 
                    inovadoras, seguras e sustentáveis, refletindo seu compromisso em <b> ofertar 
                    engenharia de alta qualidade </b>e contribuir para o desenvolvimento eficiente e sustentável.
                    </p> 

                    <p className="Tit1">Visão</p>
                    <p className="Tit2">
                    Com uma visão voltada em ser referência em <b>soluções de engenharia</b> na América Latina, a empresa
                     busca se posicionar como primeira escolha dos clientes em inovação, eficiência e atendimento, 
                    oferecendo soluções que atendam às necessidades das empresas e dos clientes.
                    </p> 

                    <p className="Tit1">Valores</p>
                    <p className="Tit2">
                    Os valores fundamentais da Madera Engenharia incluem <b>Inovação, Sustentabilidade e Ética</b>, 
                    orientando suas práticas e relações comerciais com transparência, justiça, ética e responsabilidade.
                    </p>                     
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

           <Card >
            <CardActionArea>
              <CardMedia
                component="img"
                height="80"
                image={location}
                alt="madera engenharia"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Localização
                </Typography>
                <Typography gutterBottom variant="h6" color="text.secondary">
                  A Madera Engenharia está sediada no estado de São Paulo, atendendo a região metropolitana
                   e expandindo sua atuação para novos mercados.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>


    </>
  );
}
