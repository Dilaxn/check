import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import cusStyle from './style.css';

import {
    Avatar,
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia, Container, Divider, Typography
} from "@material-ui/core";
// import Typography from "./theme/typography";
import avatar from './avatar.jpg'


export default function App() {
//sample array for SchoolAttend
    const schoolsAttend = [{name:"MT/ Hindu National School",from:"2018",to:"2019"},{name:"MT/ Hindu National School",from:"2018",to:"2019"}];

    //sample array for basic degree
    const basicDegree=[
        {name:"B.Sc. (Special) in Food Production & Technology Management", year:"2010 - 2015",university:"Wayamba University of Sri Lanka",sDate:"2019.12.09",eDate:"2023.04.23",graduateType:"BSc.(Hons.)",status:"Reading",class:"2nd Upper",gpa:"3.81",degreeName:"Information Technology",facName:"Food Production & Technology Management"},
        {name:"B.Sc. (Special) in Food Production & Technology Management", year:"2010 - 2015",university:"Wayamba University of Sri Lanka",sDate:"2019.12.09",eDate:"2023.04.23",graduateType:"BSc.(Hons.)",status:"Reading",class:"2nd Upper",gpa:"3.81",degreeName:"Information Technology",facName:"Food Production & Technology Management"},
    ]

    //sample array for basic degree
    const postDegree=[
        {name:"Doctor of Philosophy in Zoology", year:"2010 - 2015",university:"Wayamba University of Sri Lanka",underGraduateType:"PhD",status:"Reading",sDate:"2019.12.09",eDate:"2023.04.23",time:" Full Time",degreeName:"Information Technology",fieldOfStudy:"Food Production & Technology Management"},
        {name:"Doctor of Philosophy in Zoology", year:"2010 - 2015",university:"Wayamba University of Sri Lanka",underGraduateType:"PhD",status:"Reading",sDate:"2019.12.09",eDate:"2023.04.23",time:" Full Time",degreeName:"Information Technology",fieldOfStudy:"Food Production & Technology Management"},


    ]

    //sample array for have research
    const haveResearch=[
        {name:"have research & publications",year:"(2010 - 2015)",sDate:"2019.01.01",eDate:"2023.04.23",time:"Full Time",degreeName:"Information Technology",university:"Wayamba University",fieldOfStudy:"Food Production"},
        {name:"have research & publications",year:"(2010 - 2015)",sDate:"2019.01.01",eDate:"2023.04.23",time:"Full Time",degreeName:"Information Technology",university:"Wayamba University",fieldOfStudy:"Food Production"},

    ]

    //sample array for pulish research
    const publishResearch=[
        {name:"publish research & publication",year:"(2010 - 2015)",institute:"Wayamba University of Sri Lanka",qualification1:"eefewf",duration:"1 year",qualification2:"fwefwef"},
        {name:"publish research & publication",year:"(2010 - 2015)",institute:"Wayamba University of Sri Lanka",qualification1:"eefewf",duration:"1 year",qualification2:"fwefwef"},

    ]

    return (
        <Container>
            <Grid item container spacing={5}>
                <Grid item xs={1}/>

                <Grid wrap='wrap' color='black' container spacing={5} item xs={10}>
                    <Grid item container>
                        <Grid style={{marginLeft: 0}} item xs={3}>
                            <Avatar alt="Remy Sharp" src={avatar} style={{height: 150, width: 150}}/> </Grid>
                        <Grid style={{marginLeft: 0, marginTop: 20}} item xs={9}> <Typography variant={'h3'}
                                                                                              align="left">M.DILAKSHAN</Typography>
                            <Typography variant={'h6'} align="left">dilaxn@gmail.com</Typography>
                        </Grid>

                    </Grid>

                    <Grid item container spacing={0}>

                        <Grid container item xs={5} spacing={2}>
                            <Grid item container>
                                <Typography item variant={'h5'}>
                                    Personal Details
                                </Typography>
                            </Grid>
                            <Divider style={{marginBottom: 5}}/>
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
                        <Grid container item xs={7} spacing={0}>
                            <Grid><Typography variant={'h6'}>Schools Attend</Typography></Grid>
                            <Grid container spacing={0} item>

                                {schoolsAttend.map(s=>{
                                    return(
                                        <Grid item container spacing={3}>

                                            <Grid item xs={6}>
                                                <Typography variant={'body1'}>{s.name}</Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant={'body1'}>From: {s.from}</Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant={'body1'}>To: {s.to}</Typography>
                                            </Grid>
                                        </Grid>
                                    )
                                })}



                            </Grid>

                            {/*Al results*/}

                            <Grid container item>
                                <Typography variant={'h6'}>A/L (2017) - Physical Science</Typography>


                                <Grid item container spacing={2}>

                                    <Grid item xs={4}>
                                        <Typography variant={'body1'}>Maths : A</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant={'body1'}>Chemistry: B</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant={'body1'}>Physics : C</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={2}>

                                    <Grid item xs={4}>
                                        <Typography variant={'body1'}>English : S</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant={'body1'}>Ex sub : R</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant={'body1'}>Ex sub : R</Typography>
                                    </Grid>
                                </Grid>

                            </Grid>

                            {/*O/l results*/}

                            <Grid container item>
                                <Typography variant={'h6'}>A/L (2017) - Physical Science</Typography>


                                <Grid item container spacing={2}>

                                    <Grid item xs={4}>
                                        <Typography variant={'body1'}>Maths : A</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant={'body1'}>Chemistry: B</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant={'body1'}>Physics : C</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={2}>

                                    <Grid item xs={4}>
                                        <Typography variant={'body1'}>English : S</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant={'body1'}>Ex sub : R</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant={'body1'}>Ex sub : R</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={2}>

                                    <Grid item xs={4}>
                                        <Typography variant={'body1'}>English : S</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant={'body1'}>Ex sub : R</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant={'body1'}>Ex sub : R</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={2}>

                                    <Grid item xs={4}>
                                        <Typography variant={'body1'}>English : S</Typography>
                                    </Grid>

                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                    {/*sec container*/}
                    <Grid item container spacing={5}>
                        {/*<Grid item container xs={5} spacing={5}></Grid>*/}
                        <Grid item container spacing={5}>
                            {/*Basic Degree*/}

                            <Grid item container spacing={5}>

                                {basicDegree.map(d=>{
                                    return(
                                        <Grid item container>
                                            <Grid item>
                                                <Typography variant={'h6'}>{d.name}
                                                    Management</Typography>
                                                <Typography variant={'body1'}>({d.year})</Typography>
                                            </Grid>
                                            <Grid item container>
                                                {/*<Grid item xs={1}> </Grid>*/}
                                                <Grid item container>
                                                    <Grid item xs={4}> <Typography
                                                        variant={'body1'}>University</Typography></Grid><Grid item
                                                                                                              xs={8}><Typography
                                                    variant={'body1'}> : {d.university}</Typography></Grid>
                                                    <Grid item xs={4}> <Typography variant={'body1'}>Start
                                                        Date</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>:
                                                    {d.sDate}</Typography></Grid>
                                                    <Grid item xs={4}> <Typography variant={'body1'}>End
                                                        Date</Typography></Grid><Grid
                                                    item xs={8}><Typography variant={'body1'}>: {d.eDate}</Typography></Grid>
                                                    <Grid item xs={4}> <Typography variant={'body1'}>Graduate
                                                        Type</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>:
                                                    {d.graduateType}</Typography></Grid>
                                                    <Grid item xs={4}> <Typography
                                                        variant={'body1'}>Status</Typography></Grid><Grid item
                                                                                                          xs={8}><Typography
                                                    variant={'body1'}>: {d.status} </Typography></Grid>
                                                    <Grid item xs={4}> <Typography
                                                        variant={'body1'}>Class</Typography></Grid><Grid item xs={8}><Typography
                                                    variant={'body1'}> : {d.class}</Typography></Grid>
                                                    <Grid item xs={4}> <Typography
                                                        variant={'body1'}>GPA </Typography></Grid><Grid item xs={8}><Typography
                                                    variant={'body1'}>: {d.gpa}</Typography></Grid>
                                                    <Grid item xs={4}> <Typography variant={'body1'}>Degree
                                                        Name</Typography></Grid><Grid item xs={8}><Typography
                                                    variant={'body1'}> :
                                                    {d.degreeName}</Typography></Grid>
                                                    <Grid item xs={4}> <Typography variant={'body1'}>Faculty
                                                        Name</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>:
                                                    {d.facName}</Typography></Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    )
                                })}


                            </Grid>

                            {/*post Degree*/}
                            <Grid item container spacing={5}>

                                {postDegree.map(p=>{
                                    return(
                                        <Grid item container>
                                            <Grid item>
                                                <Typography variant={'h6'}>{p.name}</Typography>
                                                <Typography variant={'body1'}>{p.year}</Typography>
                                            </Grid>
                                            <Grid item container>
                                                {/*<Grid item xs={1}> </Grid>*/}
                                                <Grid item container>

                                                    <Grid item xs={4}> <Typography variant={'body1'}>UGraduate
                                                        type </Typography></Grid><Grid item xs={8}><Typography
                                                    variant={'body1'}>: {p.underGraduateType}</Typography></Grid>
                                                    <Grid item xs={4}> <Typography variant={'body1'}>Start
                                                        Date</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>:
                                                    {p.sDate}</Typography></Grid>
                                                    <Grid item xs={4}> <Typography variant={'body1'}>End
                                                        Date</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>:
                                                    {p.eDate}</Typography></Grid>

                                                    <Grid item xs={4}> <Typography
                                                        variant={'body1'}>Status</Typography></Grid><Grid item
                                                                                                          xs={8}><Typography
                                                    variant={'body1'}>: {p.status} </Typography></Grid>
                                                    <Grid item xs={4}> <Typography
                                                        variant={'body1'}>University </Typography></Grid><Grid item
                                                                                                               xs={8}><Typography
                                                    variant={'body1'}>: {p.university}</Typography></Grid>
                                                    <Grid item xs={4}> <Typography
                                                        variant={'body1'}>Time </Typography></Grid><Grid item xs={8}><Typography
                                                    variant={'body1'}>: {p.time}</Typography></Grid>
                                                    <Grid item xs={4}> <Typography variant={'body1'}>Degree
                                                        Name</Typography></Grid><Grid item xs={8}><Typography
                                                    variant={'body1'}> : {p.degreeName}</Typography></Grid>
                                                    <Grid item xs={4}> <Typography variant={'body1'}>Feild of Study</Typography></Grid><Grid
                                                    item xs={8}><Typography variant={'body1'}>: {p.fieldOfStudy}
                                                    </Typography></Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    )
                                })}

                            </Grid>

                            {/*have research & publications */}
                            <Grid item container spacing={5}>

                                {haveResearch.map(h=>{
                                    return(
                                        <Grid item container>
                                            <Grid item>
                                                <Typography variant={'h6'}>{h.name}</Typography>
                                                <Typography variant={'body1'}>({h.year})</Typography>
                                            </Grid>
                                            <Grid item container>
                                                {/*<Grid item xs={1}> </Grid>*/}
                                                <Grid item container>

                                                    <Grid item xs={4}> <Typography variant={'body1'}>Start
                                                        Year</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>:
                                                    {h.sDate}</Typography></Grid>
                                                    <Grid item xs={4}> <Typography variant={'body1'}>End
                                                        Year</Typography></Grid><Grid item xs={8}><Typography variant={'body1'}>:
                                                    {h.eDate}</Typography></Grid>
                                                    <Grid item xs={4}> <Typography
                                                        variant={'body1'}>Time </Typography></Grid><Grid item xs={8}><Typography
                                                    variant={'body1'}>: {h.time}</Typography></Grid>
                                                    <Grid item xs={4}> <Typography variant={'body1'}>Degree
                                                        Name</Typography></Grid><Grid item xs={8}><Typography
                                                    variant={'body1'}> : {h.degreeName}</Typography></Grid>
                                                    <Grid item xs={4}> <Typography
                                                        variant={'body1'}>University </Typography></Grid><Grid item
                                                                                                               xs={8}><Typography
                                                    variant={'body1'}>: {h.university}</Typography></Grid>
                                                    <Grid item xs={4}> <Typography variant={'body1'}>Feild of Study</Typography></Grid><Grid
                                                    item xs={8}><Typography variant={'body1'}>: F{h.fieldOfStudy}</Typography></Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    )
                                })}


                            </Grid>

                            {/*Publish research & publications */}
                            <Grid item container spacing={5}>
                                {publishResearch.map(p=>{
                                    return(
                                        <Grid item container>
                                            <Grid item>
                                                <Typography variant={'h6'}>{p.name} </Typography>
                                                <Typography variant={'body1'}>({p.year})</Typography>
                                            </Grid>
                                            <Grid item container>
                                                {/*<Grid item xs={1}> </Grid>*/}
                                                <Grid item container>
                                                    <Grid item xs={4}> <Typography
                                                        variant={'body1'}>Institute </Typography></Grid><Grid item
                                                                                                              xs={8}><Typography
                                                    variant={'body1'}>: {p.institute}</Typography></Grid>

                                                    <Grid item xs={4}> <Typography variant={'body1'}>Qualification
                                                        obtained</Typography></Grid><Grid item xs={8}><Typography
                                                    variant={'body1'}>: {p.qualification1}</Typography></Grid>
                                                    <Grid item xs={4}> <Typography
                                                        variant={'body1'}>Duration </Typography></Grid><Grid item
                                                                                                             xs={8}><Typography
                                                    variant={'body1'}>: {p.duration}</Typography></Grid>

                                                    <Grid item xs={4}> <Typography variant={'body1'}>Qualification
                                                        obtained</Typography></Grid><Grid item xs={8}><Typography
                                                    variant={'body1'}>: {p.qualification2}</Typography></Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    )
                                })}

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1}/>
            </Grid>
        </Container>
    );
}
