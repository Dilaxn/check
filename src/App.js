import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import cusStyle from './style.css'
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia, Container, Divider,Typography
} from "@material-ui/core";
 // import Typography from "./theme/typography";
import avatar from './avatar.jpg'


export default function App() {

    const schools = ['a', 'b'];
    return (
        <Container>


            <Grid item container spacing={5}>
                <Grid item xs={1}/>

                <Grid wrap='wrap' color='black' container spacing={5} item xs={10}>
                    <Grid item container>
                    <Grid style={{marginLeft:0}} item xs={3}>
                    <Avatar alt="Remy Sharp" src={avatar} style={{height:150,width:150}} /> </Grid>
                    <Grid style={{marginLeft:0,marginTop:20}} item xs={9}> <Typography variant={'h3'} align="left">M.DILAKSHAN</Typography>
                        <Typography variant={'h6'} align="left">dilaxn@gmail.com</Typography>
                    </Grid>

                </Grid>

                    <Grid item container spacing={0}>

                        <Grid container   item xs={5}  spacing={2}   >
                            <Grid item container>
                            <Typography item variant={'h5'}>
                                Personal Details
                            </Typography>
                            </Grid>
<Divider style={{marginBottom:5}}/>
                            <Grid item container>
                            <Typography item variant={'body1'}>
                                Mr.Muniyappan Dilakshan
                            </Typography>
                            </Grid>
                                <Grid item container>
                            <Typography variant={'body1'}>
                                M.Dilakshan
                            </Typography>
                                </Grid>
                            <Grid item container>
                            <Typography variant={'body1'}>
                                Male
                            </Typography>
                            </Grid>
                            <Grid item container>
                            <Typography variant={'body1'}>
                                123123123993
                            </Typography>
                            </Grid>
                            <Grid item container>
                            <Typography variant={'body1'}>
                                UnMarried
                            </Typography>
                            </Grid>
                            <Grid item container>
                            <Typography variant={'body1'}>
                                1998.01.02
                            </Typography>
                            </Grid>
                            <Grid item container>
                            <Typography variant={'body1'}>
                                0777123456
                            </Typography>
                            </Grid>
                            <Grid item container>
                            <Typography variant={'body1'}>
                                Rattota(D.S)
                            </Typography>
                            </Grid>
                            <Grid item container>
                            <Typography variant={'body1'}>
                                Viharagama(G.S)
                            </Typography>
                            </Grid>
                            <Grid item container>
                            <Typography variant={'body1'}>
                                1m kuruku sandhu, Dubai
                            </Typography>
                            </Grid>
                            <Grid item container>
                            <Typography variant={'body1'}>
                                1m kuruku sandhu, WDC, USA
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid container  item xs={7} spacing={0} >
                            <Grid      ><Typography variant={'h6'}>Schools Attend</Typography></Grid>
                            <Grid container spacing={0}   item >

                            <Grid item container spacing={3}>

                            <Grid  item xs={6}>
                                <Typography variant={'body1'}>MT/ Hindu National School</Typography>
                            </Grid>
                            <Grid  item xs={3}>
                                <Typography variant={'body1'}>From:2000</Typography>
                            </Grid>
                            <Grid  item xs={3}>
                                <Typography variant={'body1'}>To: 2014</Typography>
                            </Grid>
                            </Grid>
                                <Grid item container spacing={3}>

                                    <Grid  item xs={6}>
                                        <Typography variant={'body1'}>MT/ Hindu National School</Typography>
                                    </Grid>
                                    <Grid  item xs={3}>
                                        <Typography variant={'body1'}>From:2000</Typography>
                                    </Grid>
                                    <Grid  item xs={3}>
                                        <Typography variant={'body1'}>To: 2014</Typography>
                                    </Grid>
                                </Grid>

                            </Grid>

                            {/*Al results*/}

                            <Grid  container item >
                                <Typography variant={'h6'}>A/L (2017) - Physical Science</Typography>


                                <Grid item container spacing={2}>

                                    <Grid  item xs={4}>
                                        <Typography variant={'body1'}>Maths : A</Typography>
                                    </Grid>
                                    <Grid  item xs={4}>
                                        <Typography variant={'body1'}>Chemistry: B</Typography>
                                    </Grid>
                                    <Grid  item xs={4}>
                                        <Typography variant={'body1'}>Physics : C</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={2}>

                                    <Grid  item xs={4}>
                                        <Typography variant={'body1'}>English : S</Typography>
                                    </Grid>
                                    <Grid  item xs={4}>
                                        <Typography variant={'body1'}>Ex sub : R</Typography>
                                    </Grid>
                                    <Grid  item xs={4}>
                                        <Typography variant={'body1'}>Ex sub : R</Typography>
                                    </Grid>
                                </Grid>

                            </Grid>

                            {/*O/l results*/}

                            <Grid  container item >
                                <Typography variant={'h6'}>A/L (2017) - Physical Science</Typography>


                                <Grid item container spacing={2}>

                                    <Grid  item xs={4}>
                                        <Typography variant={'body1'}>Maths : A</Typography>
                                    </Grid>
                                    <Grid  item xs={4}>
                                        <Typography variant={'body1'}>Chemistry: B</Typography>
                                    </Grid>
                                    <Grid  item xs={4}>
                                        <Typography variant={'body1'}>Physics : C</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={2}>

                                    <Grid  item xs={4}>
                                        <Typography variant={'body1'}>English : S</Typography>
                                    </Grid>
                                    <Grid  item xs={4}>
                                        <Typography variant={'body1'}>Ex sub : R</Typography>
                                    </Grid>
                                    <Grid  item xs={4}>
                                        <Typography variant={'body1'}>Ex sub : R</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={2}>

                                    <Grid  item xs={4}>
                                        <Typography variant={'body1'}>English : S</Typography>
                                    </Grid>
                                    <Grid  item xs={4}>
                                        <Typography variant={'body1'}>Ex sub : R</Typography>
                                    </Grid>
                                    <Grid  item xs={4}>
                                        <Typography variant={'body1'}>Ex sub : R</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={2}>

                                    <Grid  item xs={4}>
                                        <Typography variant={'body1'}>English : S</Typography>
                                    </Grid>

                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                    {/*sec container*/}
                    <Grid item container spacing={5}>
                        {/*<Grid item container xs={5} spacing={5}></Grid>*/}
                        <Grid item container  spacing={5}>
                    {/*Basic Degree*/}

                    <Grid item container spacing={5}>

                        <Grid item container>
                            <Grid item>
                            <Typography variant={'h6'}>B.Sc. (Special) in Food Production & Technology Management</Typography>
                            <Typography variant={'body1'}>(2010 - 2015)</Typography>
                            </Grid>
                            <Grid item container>
                                {/*<Grid item xs={1}> </Grid>*/}
                                <Grid item container>
                                    <Grid item xs={4} > <Typography variant={'body1'}>University</Typography></Grid><Grid item xs={8}><Typography
                                    variant={'body1'}> : Wayamba University of Sri Lanka</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>Start
                                        Date</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>:
                                    2019.12.09</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>End Date</Typography></Grid><Grid
                                    item xs={8}><Typography variant={'body1'}>: 2023.04.23</Typography></Grid>
                                    <Grid item xs={4}> <Typography variant={'body1'}>Graduate
                                        Type</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>:
                                    BSc.(Hons.)</Typography></Grid>
                                    <Grid item xs={4}> <Typography
                                        variant={'body1'}>Status</Typography></Grid><Grid item xs={8}><Typography
                                    variant={'body1'}>: Reading </Typography></Grid>
                                    <Grid item xs={4} > <Typography
                                        variant={'body1'}>Class</Typography></Grid><Grid item xs={8}><Typography
                                    variant={'body1'}> : 2nd Upper</Typography></Grid>
                                    <Grid item xs={4} > <Typography
                                        variant={'body1'}>GPA </Typography></Grid><Grid item xs={8}><Typography
                                    variant={'body1'}>: 3.94</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>Degree
                                        Name</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}> :
                                    Information Technology</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>Faculty
                                        Name</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Food
                                    Production & Technology Management</Typography></Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                        {/*2nd basic degree*/}
                        <Grid item container>
                            <Grid item>
                                <Typography variant={'h6'}>B.Sc. (Special) in Food Production & Technology Management</Typography>
                                <Typography variant={'body1'}>(2010 - 2015)</Typography>
                            </Grid>
                            <Grid item container>
                                {/*<Grid item xs={1}> </Grid>*/}
                                <Grid item container>
                                    <Grid item xs={4} > <Typography
                                        variant={'body1'}>University</Typography></Grid><Grid item xs={8}><Typography
                                    variant={'body1'}> : Wayamba University of Sri Lanka</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>Start
                                        Date</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>:
                                    2019.12.09</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>End Date</Typography></Grid><Grid
                                    item xs={8}><Typography variant={'body1'}>: 2023.04.23</Typography></Grid>
                                    <Grid item xs={4}> <Typography variant={'body1'}>Graduate
                                        Type</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>:
                                    BSc.(Hons.)</Typography></Grid>
                                    <Grid item xs={4}> <Typography
                                        variant={'body1'}>Status</Typography></Grid><Grid item xs={8}><Typography
                                    variant={'body1'}>: Reading </Typography></Grid>
                                    <Grid item xs={4} > <Typography
                                        variant={'body1'}>Class</Typography></Grid><Grid item xs={8}><Typography
                                    variant={'body1'}> : 2nd Upper</Typography></Grid>
                                    <Grid item xs={4} > <Typography
                                        variant={'body1'}>GPA </Typography></Grid><Grid item xs={8}><Typography
                                    variant={'body1'}>: 3.94</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>Degree
                                        Name</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}> :
                                    Information Technology</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>Faculty
                                        Name</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Food
                                    Production & Technology Management</Typography></Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                    {/*post Degree*/}
                    <Grid item container spacing={5}>
                        <Grid item container>
                            <Grid item>
                                <Typography variant={'h6'}>Doctor of Philosophy in Zoology</Typography>
                                <Typography variant={'body1'}>(2010 - 2015)</Typography>
                            </Grid>
                            <Grid item container>
                                {/*<Grid item xs={1}> </Grid>*/}
                                <Grid item container>

                                    <Grid item xs={4} > <Typography variant={'body1'}>UGraduate type </Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: PhD</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>Start Date</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: 2019.12.09</Typography></Grid>
                                        <Grid item xs={4} > <Typography variant={'body1'}>End Date</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: 2023.04.23</Typography></Grid>

                                            <Grid item xs={4} > <Typography variant={'body1'}>Status</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Reading </Typography></Grid>
                                                <Grid item xs={4} >  <Typography variant={'body1'}>University </Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Wayamba University of Sri Lanka</Typography></Grid>
                                                    <Grid item xs={4} > <Typography variant={'body1'}>Time </Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Full Time</Typography></Grid>
                                                        <Grid item xs={4} > <Typography variant={'body1'}>Degree Name</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}> : Information Technology</Typography></Grid>
                                                            <Grid item xs={4} > <Typography variant={'body1'}>Feild of Study</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Food Production & Technology Management</Typography></Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                        {/*2nd post degree*/}
                        <Grid item container>
                            <Grid item>
                                <Typography variant={'h6'}>Doctor of Philosophy in Zoology</Typography>
                                <Typography variant={'body1'}>(2010 - 2015)</Typography>
                            </Grid>
                            <Grid item container>
                                {/*<Grid item xs={1}> </Grid>*/}
                                <Grid item container>

                                    <Grid item xs={4} > <Typography variant={'body1'}>UGraduate type </Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: PhD</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>Start Date</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: 2019.12.09</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>End Date</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: 2023.04.23</Typography></Grid>

                                    <Grid item xs={4} > <Typography variant={'body1'}>Status</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Reading </Typography></Grid>
                                    <Grid item xs={4} >  <Typography variant={'body1'}>University </Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Wayamba University of Sri Lanka</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>Time </Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Full Time</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>Degree Name</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}> : Information Technology</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>Feild of Study</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Food Production & Technology Management</Typography></Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                    {/*have research & publications */}
                    <Grid item container spacing={5}>
                        <Grid item container>
                            <Grid item>
                                <Typography variant={'h6'}>have research & publications </Typography>
                                <Typography variant={'body1'}>(2010 - 2015)</Typography>
                            </Grid>
                            <Grid item container>
                                {/*<Grid item xs={1}> </Grid>*/}
                                <Grid item container>

                                    <Grid item xs={4} > <Typography variant={'body1'}>Start Year</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: 2019.12.09</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>End Year</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: 2023.04.23</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>Time </Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Full Time</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>Degree Name</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}> : Information Technology</Typography></Grid>
                                    <Grid item xs={4} >  <Typography variant={'body1'}>University </Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Wayamba University of Sri Lanka</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>Feild of Study</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Food Production & Technology Management</Typography></Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                        {/*2nd post degree*/}
                        <Grid item container>
                            <Grid item>
                                <Typography variant={'h6'}>have research & publications </Typography>
                                <Typography variant={'body1'}>(2010 - 2015)</Typography>
                            </Grid>
                            <Grid item container>
                                {/*<Grid item xs={1}> </Grid>*/}
                                <Grid item container>

                                    <Grid item xs={4} > <Typography variant={'body1'}>Start Year</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: 2019.12.09</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>End Year</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: 2023.04.23</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>Time </Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Full Time</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>Degree Name</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}> : Information Technology</Typography></Grid>
                                    <Grid item xs={4} >  <Typography variant={'body1'}>University </Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Wayamba University of Sri Lanka</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>Feild of Study</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Food Production & Technology Management</Typography></Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                    {/*Publish research & publications */}
                    <Grid item container spacing={5}>
                        <Grid item container>
                            <Grid item>
                                <Typography variant={'h6'}>publish research & publications </Typography>
                                <Typography variant={'body1'}>(2010 - 2015)</Typography>
                            </Grid>
                            <Grid item container>
                                {/*<Grid item xs={1}> </Grid>*/}
                                <Grid item container>
                                    <Grid item xs={4} >  <Typography variant={'body1'}>Institute </Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Wayamba University of Sri Lanka</Typography></Grid>

                                    <Grid item xs={4} > <Typography variant={'body1'}>Qualification obtained</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: 2019.12.09</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>Duration </Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Full Time</Typography></Grid>

                                    <Grid item xs={4} > <Typography variant={'body1'}>Qualification obtained</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: 2023.04.23</Typography></Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                        {/*2nd post degree*/}
                        <Grid item container>
                            <Grid item>
                                <Typography variant={'h6'}>publish research & publications </Typography>
                                <Typography variant={'body1'}>(2010 - 2015)</Typography>
                            </Grid>
                            <Grid item container>
                                {/*<Grid item xs={1}> </Grid>*/}
                                <Grid item container>
                                    <Grid item xs={4} >  <Typography variant={'body1'}>Institute </Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Wayamba University of Sri Lanka</Typography></Grid>

                                    <Grid item xs={4} > <Typography variant={'body1'}>Qualification obtained</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: 2019.12.09</Typography></Grid>
                                    <Grid item xs={4} > <Typography variant={'body1'}>Duration </Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: Full Time</Typography></Grid>

                                    <Grid item xs={4} > <Typography variant={'body1'}>Qualification obtained</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>: 2023.04.23</Typography></Grid>
                                </Grid>


                            </Grid>
                        </Grid>
                    </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1}/>
            </Grid>
        </Container>
    );
}
