const express =  require('express');
const  BodyParser = require('body-parser');
// body parsser hellp you to acces to req.body

const cors =require('cors');
const Upload = require('express-fileupload');
const mysql = require('mysql');



const app = express();

app.use(BodyParser.json());
app.use(cors());
app.use(Upload());







const batimentData = [
    {
        nomBatiment:'A',
        type:'H',
        Etages:[
            {
                idEtage:1,
                chambres:[
                    {
                        idChmbre:1,
                        dispo:0
                    },
                   
                    {
                        idChmbre:2,
                        dispo:0
                    },
                    {
                        idChmbre:3,
                        dispo:0
                    },
                    {
                        idChmbre:4,
                        dispo:0
                    },
                    {
                        idChmbre:5,
                        dispo:0
                    },
                    {
                        idChmbre:6,
                        dispo:0
                    },
                    {
                        idChmbre:7,
                        dispo:0
                    },
                    {
                        idChmbre:8,
                        dispo:0
                    },
                    {
                        idChmbre:9,
                        dispo:0
                    },
                    {
                        idChmbre:10,
                        dispo:0
                    },
                    {
                        idChmbre:11,
                        dispo:0
                    },
                    {
                        idChmbre:12,
                        dispo:0
                    },
                    {
                        idChmbre:13,
                        dispo:0
                    },
                    {
                        idChmbre:14,
                        dispo:0
                    },
                    {
                        idChmbre:15,
                        dispo:0
                    },
                    {
                        idChmbre:16,
                        dispo:0
                    },
                    {
                        idChmbre:17,
                        dispo:0
                    },
                    {
                        idChmbre:18,
                        dispo:1
                    },
                    {
                        idChmbre:19,
                        dispo:0
                    },
                    {
                        idChmbre:20,
                        dispo:0
                    },
                    {
                        idChmbre:21,
                        dispo:0
                    },
                    {
                        idChmbre:22,
                        dispo:1
                    },
                    {
                        idChmbre:23,
                        dispo:0
                    },
                    {
                        idChmbre:24,
                        dispo:2
                    },
                    {
                        idChmbre:25,
                        dispo:0
                    },
                    {
                        idChmbre:26,
                        dispo:0
                    },
                    {
                        idChmbre:4,
                        dispo:0
                    },
                    {
                        idChmbre:5,
                        dispo:0
                    },
                    {
                        idChmbre:6,
                        dispo:0
                    },
                    {
                        idChmbre:7,
                        dispo:0
                    },
                    {
                        idChmbre:8,
                        dispo:0
                    },
                    {
                        idChmbre:9,
                        dispo:0
                    },
                    {
                        idChmbre:10,
                        dispo:0
                    },
                    {
                        idChmbre:11,
                        dispo:0
                    },
                    {
                        idChmbre:12,
                        dispo:0
                    },
                    {
                        idChmbre:13,
                        dispo:0
                    },
                    {
                        idChmbre:14,
                        dispo:0
                    },
                    {
                        idChmbre:15,
                        dispo:0
                    },
                    {
                        idChmbre:16,
                        dispo:0
                    },
                    {
                        idChmbre:17,
                        dispo:0
                    },
                    {
                        idChmbre:18,
                        dispo:1
                    },
                    {
                        idChmbre:19,
                        dispo:0
                    },
                    {
                        idChmbre:20,
                        dispo:0
                    },
                    {
                        idChmbre:21,
                        dispo:0
                    },
                    {
                        idChmbre:22,
                        dispo:1
                    },
                    {
                        idChmbre:23,
                        dispo:0
                    },
                    {
                        idChmbre:24,
                        dispo:2
                    },{
                        idChmbre:2,
                        dispo:0
                    },
                    {
                        idChmbre:3,
                        dispo:0
                    },
                    {
                        idChmbre:4,
                        dispo:0
                    },
                    {
                        idChmbre:5,
                        dispo:0
                    },
                    {
                        idChmbre:6,
                        dispo:0
                    },
                    {
                        idChmbre:7,
                        dispo:0
                    },
                    {
                        idChmbre:8,
                        dispo:0
                    },
                    {
                        idChmbre:9,
                        dispo:0
                    },
                    {
                        idChmbre:10,
                        dispo:0
                    },
                    {
                        idChmbre:11,
                        dispo:0
                    },
                    {
                        idChmbre:12,
                        dispo:0
                    },
                    {
                        idChmbre:13,
                        dispo:0
                    },
                    {
                        idChmbre:14,
                        dispo:0
                    },
                    {
                        idChmbre:15,
                        dispo:0
                    },
                    {
                        idChmbre:16,
                        dispo:0
                    },
                    {
                        idChmbre:17,
                        dispo:0
                    },
                    {
                        idChmbre:18,
                        dispo:1
                    },
                    {
                        idChmbre:19,
                        dispo:0
                    },
                    {
                        idChmbre:20,
                        dispo:0
                    },
                    {
                        idChmbre:21,
                        dispo:0
                    },
                    {
                        idChmbre:22,
                        dispo:1
                    },
                    {
                        idChmbre:23,
                        dispo:0
                    },
                    {
                        idChmbre:24,
                        dispo:2
                    },{
                        idChmbre:2,
                        dispo:0
                    },
                    {
                        idChmbre:3,
                        dispo:0
                    },
                    {
                        idChmbre:4,
                        dispo:0
                    },
                    {
                        idChmbre:5,
                        dispo:0
                    },
                    {
                        idChmbre:6,
                        dispo:0
                    },
                    {
                        idChmbre:7,
                        dispo:0
                    },
                    {
                        idChmbre:8,
                        dispo:0
                    },
                    {
                        idChmbre:9,
                        dispo:0
                    },
                    {
                        idChmbre:10,
                        dispo:0
                    },
                    {
                        idChmbre:11,
                        dispo:0
                    },
                    {
                        idChmbre:12,
                        dispo:0
                    },
                    {
                        idChmbre:13,
                        dispo:0
                    },
                    {
                        idChmbre:14,
                        dispo:0
                    },
                    {
                        idChmbre:15,
                        dispo:0
                    },
                    {
                        idChmbre:16,
                        dispo:0
                    },
                    {
                        idChmbre:17,
                        dispo:0
                    },
                    {
                        idChmbre:18,
                        dispo:1
                    },
                    {
                        idChmbre:19,
                        dispo:0
                    },
                    {
                        idChmbre:20,
                        dispo:0
                    },
                    {
                        idChmbre:21,
                        dispo:0
                    },
                    {
                        idChmbre:22,
                        dispo:1
                    },
                    {
                        idChmbre:23,
                        dispo:0
                    },
                    {
                        idChmbre:24,
                        dispo:2
                    }
                ]
            },
            {
                idEtage:2,
                chambres:[
                    {
                        idChmbre:1,
                        dispo:0
                    },
                    {
                        idChmbre:2,
                        dispo:0
                    },
                    {
                        idChmbre:3,
                        dispo:0
                    },
                    {
                        idChmbre:4,
                        dispo:0
                    },
                    {
                        idChmbre:5,
                        dispo:0
                    },
                    {
                        idChmbre:6,
                        dispo:0
                    }
                ]
            },         
            {
                idEtage:3,
                chambres:[
                    {
                        idChmbre:1,
                        dispo:0
                    },
                    {
                        idChmbre:2,
                        dispo:0
                    },
                    {
                        idChmbre:3,
                        dispo:0
                    },
                    {
                        idChmbre:4,
                        dispo:0
                    },
                    {
                        idChmbre:5,
                        dispo:0
                    },
                    {
                        idChmbre:6,
                        dispo:0
                    }
                ]
            }
        ]
    },
    {
        nomBatiment:'B',
        type:'H',
        Etages:[
            {
                idEtage:1,
                chambres:[
                    {
                        idChmbre:1,
                        dispo:0
                    },
                    {
                        idChmbre:2,
                        dispo:0
                    },
                    {
                        idChmbre:3,
                        dispo:0
                    },
                    {
                        idChmbre:4,
                        dispo:0
                    },
                    {
                        idChmbre:5,
                        dispo:0
                    },
                    {
                        idChmbre:6,
                        dispo:0
                    }
                ]
            },
            {
                idEtage:2,
                chambres:[
                    {
                        idChmbre:1,
                        dispo:0
                    },
                    {
                        idChmbre:2,
                        dispo:0
                    },
                    {
                        idChmbre:3,
                        dispo:0
                    },
                    {
                        idChmbre:4,
                        dispo:0
                    },
                    {
                        idChmbre:5,
                        dispo:0
                    },
                    {
                        idChmbre:6,
                        dispo:0
                    }
                ]
            },         
            {
                idEtage:3,
                chambres:[
                    {
                        idChmbre:1,
                        dispo:0
                    },
                    {
                        idChmbre:2,
                        dispo:0
                    },
                    {
                        idChmbre:3,
                        dispo:0
                    },
                    {
                        idChmbre:4,
                        dispo:0
                    },
                    {
                        idChmbre:5,
                        dispo:0
                    },
                    {
                        idChmbre:6,
                        dispo:0
                    }
                ]
            }
        ]
    },
    {
        nomBatiment:'C',
        type:'F',
        Etages:[
            {
                idEtage:1,
                chambres:[
                    {
                        idChmbre:1,
                        dispo:0
                    },
                    {
                        idChmbre:2,
                        dispo:0
                    },
                    {
                        idChmbre:3,
                        dispo:0
                    },
                    {
                        idChmbre:4,
                        dispo:0
                    },
                    {
                        idChmbre:5,
                        dispo:0
                    },
                    {
                        idChmbre:6,
                        dispo:0
                    }
                ]
            },
            {
                idEtage:2,
                chambres:[
                    {
                        idChmbre:1,
                        dispo:0
                    },
                    {
                        idChmbre:2,
                        dispo:0
                    },
                    {
                        idChmbre:3,
                        dispo:0
                    },
                    {
                        idChmbre:4,
                        dispo:0
                    },
                    {
                        idChmbre:5,
                        dispo:0
                    },
                    {
                        idChmbre:6,
                        dispo:0
                    }
                ]
            },         
            {
                idEtage:3,
                chambres:[
                    {
                        idChmbre:1,
                        dispo:0
                    },
                    {
                        idChmbre:2,
                        dispo:0
                    },
                    {
                        idChmbre:3,
                        dispo:0
                    },
                    {
                        idChmbre:4,
                        dispo:0
                    },
                    {
                        idChmbre:5,
                        dispo:0
                    },
                    {
                        idChmbre:6,
                        dispo:0
                    }
                ]
            }
        ]
    },
    {
        nomBatiment:'TITANIC',
        type:'F',
        Etages:[
            {
                idEtage:1,
                chambres:[
                    {
                        idChmbre:1,
                        dispo:0
                    },
                    {
                        idChmbre:2,
                        dispo:0
                    },
                    {
                        idChmbre:3,
                        dispo:0
                    },
                    {
                        idChmbre:4,
                        dispo:0
                    },
                    {
                        idChmbre:5,
                        dispo:0
                    },
                    {
                        idChmbre:6,
                        dispo:0
                    }
                ]
            },
            {
                idEtage:2,
                chambres:[
                    {
                        idChmbre:1,
                        dispo:0
                    },
                    {
                        idChmbre:2,
                        dispo:0
                    },
                    {
                        idChmbre:3,
                        dispo:0
                    },
                    {
                        idChmbre:4,
                        dispo:0
                    },
                    {
                        idChmbre:5,
                        dispo:0
                    },
                    {
                        idChmbre:6,
                        dispo:0
                    }
                ]
            },         
            {
                idEtage:3,
                chambres:[
                    {
                        idChmbre:1,
                        dispo:0
                    },
                    {
                        idChmbre:2,
                        dispo:0
                    },
                    {
                        idChmbre:3,
                        dispo:0
                    },
                    {
                        idChmbre:4,
                        dispo:0
                    },
                    {
                        idChmbre:5,
                        dispo:0
                    },
                    {
                        idChmbre:6,
                        dispo:0
                    }
                ]
            }
        ]
    }
  ];
  

const database={
    users:[
        {
            id:'1234',
            name : "sehlaoui" ,
            prenom : "houssam eddine" ,
            matricle : "123456" ,
            email : "houssam@gmail.com" ,
            numero : "000000000" ,
            Promo : " 2 eme annee" ,
            filier : "g info " ,
            gender : "M" ,
            password : "hi" ,
            departement : "D" ,
            Etage : "2" ,
            chambre : "342",
            type :'admin',
            choix  :{choix1 :1 ,choix2:2,choix3:3,choix4:4,choix5:5}

        },
        {
            id:'12345',
            name : "kabbaj" ,
            prenom : "samiha" ,
            matricle : "12346" ,
            email : "his@gmail.com" ,
            numero : "6574934875" ,
            Promo : " 2 eme annee" ,
            filier : "g info " ,
            gender : "M" ,
            password : "hi" ,
            departement : "D" ,
            Etage : "2" ,
            chambre : "342",
            choix  :{choix1 :1 ,choix2:2,choix3:3,choix4:4,choix5:5},
            type :'admin'
        },
        {   
            id:'123456',
            name : "Toudrti" ,
            prenom : "Hiba" ,
            matricle : "1236" ,
            email : "hi@gmail.com" ,
            numero : "6574934875" ,
            Promo : " 2 eme annee" ,
            filier : "g info " ,
            gender : "M" ,
            password : "hi" ,
            departement : "D" ,
            Etage : "2" ,
            chambre : "342",
            choix  :{choix1 :1 ,choix2:2,choix3:3,choix4:4,choix5:5},
            type :'admin'
        }
    ],
    batimentData : [
        {
            nomBatiment:'A',
            type:'H',
            Etages:[
                {
                    idEtage:1,
                    chambres:[
                        {
                            idChmbre:1,
                            dispo:0
                        },
                       
                        {
                            idChmbre:2,
                            dispo:0
                        },
                        {
                            idChmbre:3,
                            dispo:0
                        },
                        {
                            idChmbre:4,
                            dispo:0
                        },
                        {
                            idChmbre:5,
                            dispo:0
                        },
                        {
                            idChmbre:6,
                            dispo:0
                        },
                        {
                            idChmbre:7,
                            dispo:0
                        },
                        {
                            idChmbre:8,
                            dispo:0
                        },
                        {
                            idChmbre:9,
                            dispo:0
                        },
                        {
                            idChmbre:10,
                            dispo:0
                        },
                        {
                            idChmbre:11,
                            dispo:0
                        },
                        {
                            idChmbre:12,
                            dispo:0
                        },
                        {
                            idChmbre:13,
                            dispo:0
                        },
                        {
                            idChmbre:14,
                            dispo:0
                        },
                        {
                            idChmbre:15,
                            dispo:0
                        },
                        {
                            idChmbre:16,
                            dispo:0
                        },
                        {
                            idChmbre:17,
                            dispo:0
                        },
                        {
                            idChmbre:18,
                            dispo:1
                        },
                        {
                            idChmbre:19,
                            dispo:0
                        },
                        {
                            idChmbre:20,
                            dispo:0
                        },
                        {
                            idChmbre:21,
                            dispo:0
                        },
                        {
                            idChmbre:22,
                            dispo:1
                        },
                        {
                            idChmbre:23,
                            dispo:0
                        },
                        {
                            idChmbre:24,
                            dispo:2
                        },
                        {
                            idChmbre:25,
                            dispo:0
                        },
                        {
                            idChmbre:26,
                            dispo:0
                        },
                        {
                            idChmbre:4,
                            dispo:0
                        },
                        {
                            idChmbre:5,
                            dispo:0
                        },
                        {
                            idChmbre:6,
                            dispo:0
                        },
                        {
                            idChmbre:7,
                            dispo:0
                        },
                        {
                            idChmbre:8,
                            dispo:0
                        },
                        {
                            idChmbre:9,
                            dispo:0
                        },
                        {
                            idChmbre:10,
                            dispo:0
                        },
                        {
                            idChmbre:11,
                            dispo:0
                        },
                        {
                            idChmbre:12,
                            dispo:0
                        },
                        {
                            idChmbre:13,
                            dispo:0
                        },
                        {
                            idChmbre:14,
                            dispo:0
                        },
                        {
                            idChmbre:15,
                            dispo:0
                        },
                        {
                            idChmbre:16,
                            dispo:0
                        },
                        {
                            idChmbre:17,
                            dispo:0
                        },
                        {
                            idChmbre:18,
                            dispo:1
                        },
                        {
                            idChmbre:19,
                            dispo:0
                        },
                        {
                            idChmbre:20,
                            dispo:0
                        },
                        {
                            idChmbre:21,
                            dispo:0
                        },
                        {
                            idChmbre:22,
                            dispo:1
                        },
                        {
                            idChmbre:23,
                            dispo:0
                        },
                        {
                            idChmbre:24,
                            dispo:2
                        },{
                            idChmbre:2,
                            dispo:0
                        },
                        {
                            idChmbre:3,
                            dispo:0
                        },
                        {
                            idChmbre:4,
                            dispo:0
                        },
                        {
                            idChmbre:5,
                            dispo:0
                        },
                        {
                            idChmbre:6,
                            dispo:0
                        },
                        {
                            idChmbre:7,
                            dispo:0
                        },
                        {
                            idChmbre:8,
                            dispo:0
                        },
                        {
                            idChmbre:9,
                            dispo:0
                        },
                        {
                            idChmbre:10,
                            dispo:0
                        },
                        {
                            idChmbre:11,
                            dispo:0
                        },
                        {
                            idChmbre:12,
                            dispo:0
                        },
                        {
                            idChmbre:13,
                            dispo:0
                        },
                        {
                            idChmbre:14,
                            dispo:0
                        },
                        {
                            idChmbre:15,
                            dispo:0
                        },
                        {
                            idChmbre:16,
                            dispo:0
                        },
                        {
                            idChmbre:17,
                            dispo:0
                        },
                        {
                            idChmbre:18,
                            dispo:1
                        },
                        {
                            idChmbre:19,
                            dispo:0
                        },
                        {
                            idChmbre:20,
                            dispo:0
                        },
                        {
                            idChmbre:21,
                            dispo:0
                        },
                        {
                            idChmbre:22,
                            dispo:1
                        },
                        {
                            idChmbre:23,
                            dispo:0
                        },
                        {
                            idChmbre:24,
                            dispo:2
                        },{
                            idChmbre:2,
                            dispo:0
                        },
                        {
                            idChmbre:3,
                            dispo:0
                        },
                        {
                            idChmbre:4,
                            dispo:0
                        },
                        {
                            idChmbre:5,
                            dispo:0
                        },
                        {
                            idChmbre:6,
                            dispo:0
                        },
                        {
                            idChmbre:7,
                            dispo:0
                        },
                        {
                            idChmbre:8,
                            dispo:0
                        },
                        {
                            idChmbre:9,
                            dispo:0
                        },
                        {
                            idChmbre:10,
                            dispo:0
                        },
                        {
                            idChmbre:11,
                            dispo:0
                        },
                        {
                            idChmbre:12,
                            dispo:0
                        },
                        {
                            idChmbre:13,
                            dispo:0
                        },
                        {
                            idChmbre:14,
                            dispo:0
                        },
                        {
                            idChmbre:15,
                            dispo:0
                        },
                        {
                            idChmbre:16,
                            dispo:0
                        },
                        {
                            idChmbre:17,
                            dispo:0
                        },
                        {
                            idChmbre:18,
                            dispo:1
                        },
                        {
                            idChmbre:19,
                            dispo:0
                        },
                        {
                            idChmbre:20,
                            dispo:0
                        },
                        {
                            idChmbre:21,
                            dispo:0
                        },
                        {
                            idChmbre:22,
                            dispo:1
                        },
                        {
                            idChmbre:23,
                            dispo:0
                        },
                        {
                            idChmbre:24,
                            dispo:2
                        }
                    ]
                },
                {
                    idEtage:2,
                    chambres:[
                        {
                            idChmbre:1,
                            dispo:0
                        },
                        {
                            idChmbre:2,
                            dispo:0
                        },
                        {
                            idChmbre:3,
                            dispo:0
                        },
                        {
                            idChmbre:4,
                            dispo:0
                        },
                        {
                            idChmbre:5,
                            dispo:0
                        },
                        {
                            idChmbre:6,
                            dispo:0
                        }
                    ]
                },         
                {
                    idEtage:3,
                    chambres:[
                        {
                            idChmbre:1,
                            dispo:0
                        },
                        {
                            idChmbre:2,
                            dispo:0
                        },
                        {
                            idChmbre:3,
                            dispo:0
                        },
                        {
                            idChmbre:4,
                            dispo:0
                        },
                        {
                            idChmbre:5,
                            dispo:0
                        },
                        {
                            idChmbre:6,
                            dispo:0
                        }
                    ]
                }
            ]
        },
        {
            nomBatiment:'B',
            type:'H',
            Etages:[
                {
                    idEtage:1,
                    chambres:[
                        {
                            idChmbre:1,
                            dispo:0
                        },
                        {
                            idChmbre:2,
                            dispo:0
                        },
                        {
                            idChmbre:3,
                            dispo:0
                        },
                        {
                            idChmbre:4,
                            dispo:0
                        },
                        {
                            idChmbre:5,
                            dispo:0
                        },
                        {
                            idChmbre:6,
                            dispo:0
                        }
                    ]
                },
                {
                    idEtage:2,
                    chambres:[
                        {
                            idChmbre:1,
                            dispo:0
                        },
                        {
                            idChmbre:2,
                            dispo:0
                        },
                        {
                            idChmbre:3,
                            dispo:0
                        },
                        {
                            idChmbre:4,
                            dispo:0
                        },
                        {
                            idChmbre:5,
                            dispo:0
                        },
                        {
                            idChmbre:6,
                            dispo:0
                        }
                    ]
                },         
                {
                    idEtage:3,
                    chambres:[
                        {
                            idChmbre:1,
                            dispo:0
                        },
                        {
                            idChmbre:2,
                            dispo:0
                        },
                        {
                            idChmbre:3,
                            dispo:0
                        },
                        {
                            idChmbre:4,
                            dispo:0
                        },
                        {
                            idChmbre:5,
                            dispo:0
                        },
                        {
                            idChmbre:6,
                            dispo:0
                        }
                    ]
                }
            ]
        },
        {
            nomBatiment:'C',
            type:'F',
            Etages:[
                {
                    idEtage:1,
                    chambres:[
                        {
                            idChmbre:1,
                            dispo:0
                        },
                        {
                            idChmbre:2,
                            dispo:0
                        },
                        {
                            idChmbre:3,
                            dispo:0
                        },
                        {
                            idChmbre:4,
                            dispo:0
                        },
                        {
                            idChmbre:5,
                            dispo:0
                        },
                        {
                            idChmbre:6,
                            dispo:0
                        }
                    ]
                },
                {
                    idEtage:2,
                    chambres:[
                        {
                            idChmbre:1,
                            dispo:0
                        },
                        {
                            idChmbre:2,
                            dispo:0
                        },
                        {
                            idChmbre:3,
                            dispo:0
                        },
                        {
                            idChmbre:4,
                            dispo:0
                        },
                        {
                            idChmbre:5,
                            dispo:0
                        },
                        {
                            idChmbre:6,
                            dispo:0
                        }
                    ]
                },         
                {
                    idEtage:3,
                    chambres:[
                        {
                            idChmbre:1,
                            dispo:0
                        },
                        {
                            idChmbre:2,
                            dispo:0
                        },
                        {
                            idChmbre:3,
                            dispo:0
                        },
                        {
                            idChmbre:4,
                            dispo:0
                        },
                        {
                            idChmbre:5,
                            dispo:0
                        },
                        {
                            idChmbre:6,
                            dispo:0
                        }
                    ]
                }
            ]
        },
        {
            nomBatiment:'TITANIC',
            type:'F',
            Etages:[
                {
                    idEtage:1,
                    chambres:[
                        {
                            idChmbre:1,
                            dispo:0
                        },
                        {
                            idChmbre:2,
                            dispo:0
                        },
                        {
                            idChmbre:3,
                            dispo:0
                        },
                        {
                            idChmbre:4,
                            dispo:0
                        },
                        {
                            idChmbre:5,
                            dispo:0
                        },
                        {
                            idChmbre:6,
                            dispo:0
                        }
                    ]
                },
                {
                    idEtage:2,
                    chambres:[
                        {
                            idChmbre:1,
                            dispo:0
                        },
                        {
                            idChmbre:2,
                            dispo:0
                        },
                        {
                            idChmbre:3,
                            dispo:0
                        },
                        {
                            idChmbre:4,
                            dispo:0
                        },
                        {
                            idChmbre:5,
                            dispo:0
                        },
                        {
                            idChmbre:6,
                            dispo:0
                        }
                    ]
                },         
                {
                    idEtage:3,
                    chambres:[
                        {
                            idChmbre:1,
                            dispo:0
                        },
                        {
                            idChmbre:2,
                            dispo:0
                        },
                        {
                            idChmbre:3,
                            dispo:0
                        },
                        {
                            idChmbre:4,
                            dispo:0
                        },
                        {
                            idChmbre:5,
                            dispo:0
                        },
                        {
                            idChmbre:6,
                            dispo:0
                        }
                    ]
                }
            ]
        }
      ]

}



//app.use(express.static(__dirname+'/public'))
app.get('/',(req ,res)=>{
    res.send(database.users)

});


app.put('/updateProfile',(req ,res)=>{
    const {id ,email , numero} =req.body;
    let found =false ;
    database.users.forEach(user =>{
        if(user.id===id ){
            found=true ;
            if(email !==''){
                user.email=email;
            }
            if(numero !==''){
                user.numero=numero;
            }
            
            return res.json(user);
        }
    })
    if (!found){
        res.status(400).json('error not found');
    }
})
  


app.post('/Choix', (req,res)=>{
    const {matricle , choix} =req.body;
    let found =false ;
    database.users.forEach(user =>{
        if(user.matricle===matricle){
            found=true ;
            user.choix=choix;
            return res.json("succés");
        }
    })
    if (!found){
        res.status(400).json('error not found');
    }

})


app.get('/Choix/:matricule', (req,res)=>{
    const {matricle} =req.params;
    let found =false ;
    database.users.forEach(user =>{
        if(user.matricle===matricle){
            found=true ;
            return res.json(user.choix);
        }
    })
    if (!found){
        res.status(400).json('error not found');
    }

})




app.get('/download', function(req, res){
    const file = `${__dirname}/upload-folder/Note_pour_Inscriptions.docx`;
    res.download(file); 
  });




app.post('/signin' ,(req,res)=>{
    const {email , password} =req.body;
    let found =false ;
    database.users.forEach(user =>{
        if(user.email===email && user.password=== password){
            found=true ;
            return res.json(user);
        }
    })
    if (!found){
        res.status(400).json('error loggin in');
    }

})


app.post('/recus', (req,res)=>{
    if(req.files){
        console.log(req.files);
        var file = req.files.myFile ;
        var fileName =file.name;
        console.log(fileName);
        file.mv('./uploads/'+fileName ,(err)=>{
            if(err){
                res.json(err)
            }else{
                res.json("File Uploaded")
            }
           
        })

    }
})


app.get('/Batiment' , (req ,res)=>{
    res.json(database.batimentData)
})



































app.listen(3030);


// /*
// /---->res =this is working
// /signin  --> POST =success / fail
// /register -->POST=user
// /profile/:userId -->get=user
// /image-->PUT--->user










































