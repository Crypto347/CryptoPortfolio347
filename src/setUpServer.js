/**
* Configuration
*/

const express = require('express');
const app = express();
var cors = require('cors');

/**
* Mock datas
*/

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world!!');
});


app.get('/api/headerImagesArray', (req, res) => {
    const headerImg = [
        {
            id: 1,
            imgName: "Image1",
            headerText: "Crypto",
            text1: "Hello.",
            text2: "What can we",
            text3: "help you with?"
        },
        {
            id: 2,
            imgName: "Image2",
            headerText: "Brand",
            text1: "Hello.",
            text2: "What can we",
            text3: "help you with?"
        },
        {
            id: 3,
            imgName: "Image3",
            headerText: "Hello",
            text1: "Design.",
            text2: "What can we",
            text3: "help you with?"
        }
    ]
    res.json(headerImg);
});

app.get('/api/section1', (req, res) => {
    const sec1 = [
        {
            id: 1,
            header: "Digital creativity.",
            text: "Lorem ipsum dolor sit amet, nam propriae atomorum sensibus ei sed errem populo.",
            path: "about-us"
        },
        {
            id: 2,
            header: "No coding neded.",
            text: "Lorem ipsum dolor sit amet, nam propriae atomorum sensibus ei sed errem populo.",
            path: "process"
        },
        {
            id: 3,
            header: "Finnish quality.",
            text: "Lorem ipsum dolor sit amet, nam propriae atomorum sensibus ei sed errem populo.",
            path: "happy-team"
        },
    ]
    res.json(sec1);
});

app.get('/api/section2/pictureBoard', (req, res) => {
    const picBoard = [
        {
            id: 1,
            key: "",
            option: "blackAndWhite",
            header: null,
            text: null,
            pictures: [
                {
                    id: 1,
                    key: "bw1",
                    folderName: "blackAndWhite",
                    imageName: "dose-media-bU6JyhSI6zo-unsplash.jpg"
                },
                {
                    id: 2,
                    key: "bw2",
                    folderName: "blackAndWhite",
                    imageName: "daniel-korpai-kO7TrSB9pCQ-unsplash.jpg"
                },
                {
                    id: 3,
                    key: "bw3",
                    folderName: "blackAndWhite",
                    imageName: "rahul-bhogal-lihCTIOP28U-unsplash.jpg"                 
                },
                {
                    id: 4,
                    key: "bw4",
                    folderName: "blackAndWhite",
                    imageName: "grocery-list-1670408_1920.jpg"
                },
                {
                    id: 5,
                    key: "bw5",
                    folderName: "blackAndWhite",
                    imageName: "heather-ford-6fiz86Ql3UA-unsplash.jpg"
                },
                {
                    id: 6,
                    key: "bw6",
                    folderName: "blackAndWhite",
                    imageName: "computer-820281_1920.jpg"
                }
            ]
        },
        {
            id: 2,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            pictures: [
                {
                    id: 1,
                    key: "col1",
                    folderName: "colorful",
                    imageName: "kara-eads-gVUV7PbSu_0-unsplash.jpg"
                },
                {
                    id: 2,
                    key: "col2",
                    folderName: "colorful",
                    imageName: "gaelle-marcel-yO9ZVNFbpao-unsplash.jpg"
                },
                {
                    id: 3,
                    key: "col3",
                    folderName: "colorful",
                    imageName: "jane-palash-iaofnd2IdFU-unsplash.jpg"
                },
                {
                    id: 4,
                    key: "col4",
                    folderName: "colorful",
                    imageName: "fallon-michael-_lKsxGjOzk8-unsplash.jpg"
                },
                {
                    id: 5,
                    key: "col5",
                    folderName: "colorful",
                    imageName: "kara-eads-ylNifQf8TiY-unsplash.jpg"
                },
                {
                    id: 6,
                    key: "col6",
                    folderName: "colorful",
                    imageName: "siora-photography-G8RdOUjVuJo-unsplash.jpg"
                }
            ]
        },
        {
            id: 3,
            key: "",
            option: "text",
            header: "Music",
            text: "Beautiful and advanced interface.",
            pictures: [
                {
                    id: 1,
                    key: "text1",
                    folderName: "text",
                    imageName: "alexandra-gorn-JIUjvqe2ZHg-unsplash.jpg"
                },
                {
                    id: 2,
                    key: "text2",
                    folderName: "text",
                    imageName: "alexandra-gorn-W5dsm9n6e3g-unsplash.jpg"
                },
                {
                    id: 3,
                    key: "text3",
                    folderName: "text",
                    imageName: "alexandru-acea-T5jXjei49uY-unsplash.jpg"
                },
                {
                    id: 4,
                    key: "text4",
                    folderName: "text",
                    imageName: "cullen-jones-wu9Xr4rt5cU-unsplash.jpg"
                },
                {
                    id: 5,
                    key: "text5",
                    folderName: "text",
                    imageName: "jean-philippe-delberghe-3EC_3r8-yME-unsplash.jpg"
                },
                {
                    id: 6,
                    key: "text6",
                    folderName: "text",
                    imageName: "patrick-perkins-3wylDrjxH-E-unsplash.jpg"
                },
                {
                    id: 7,
                    key: "text7",
                    folderName: "text",
                    imageName: "sam-marx-3w8eCQgX_4c-unsplash.jpg"
                },
                {
                    id: 8,
                    key: "text8",
                    folderName: "text",
                    imageName: "timothy-buck-psrloDbaZc8-unsplash.jpg"
                }
            ]
        },
        {
            id: 4,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            pictures: [
                {
                    id: 1,
                    key: "col7",
                    folderName: "colorful",
                    imageName: "nathan-dumlao-pMW4jzELQCw-unsplash.jpg"
               
                },
                {
                    id: 2,
                    key: "col8",
                    folderName: "colorful",
                    imageName: "food-3025556_1920.jpg"
                },
                {
                    id: 3,
                    key: "col9",
                    folderName: "colorful",
                    imageName: "nathan-dumlao-6VhPY27jdps-unsplash.jpg"
                },
                {
                    id: 4,
                    key: "col10",
                    folderName: "colorful",
                    imageName: "cristina-matos-albers-WhxeSQ671SM-unsplash.jpg"
                },
                {
                    id: 5,
                    key: "col11",
                    folderName: "colorful",
                    imageName: "nathan-dumlao-pnmRtTHWqDM-unsplash.jpg"
                },
            ]
        },
        {
            id: 5,
            key: "",
            option: "text",
            header: "Music",
            text: "How people really use their voice interfaces.",
            pictures: [
                {
                    id: 1,
                    key: "text9",
                    folderName: "text",
                    imageName: "anthony-reungere-s6xt1mwF_iU-unsplash.jpg"
                },
                {
                    id: 2,
                    key: "text10",
                    folderName: "text",
                    imageName: "brendan-steeves-G-YAJ61qIuU-unsplash.jpg"
                },
                {
                    id: 3,
                    key: "text11",
                    folderName: "text",
                    imageName: "matthew-henry-Ix1TiS-E17E-unsplash.jpg"
                },
                {
                    id: 4,
                    key: "text12",
                    folderName: "text",
                    imageName: "rikki-chan-9FfJW5Tu_qk-unsplash.jpg"
                },
                {
                    id: 5,
                    key: "text13",
                    folderName: "text",
                    imageName: "timo-stern-iUBgeNeyVy8-unsplash.jpg"
                },
                {
                    id: 6,
                    key: "text14",
                    folderName: "text",
                    imageName: "ugur-peker-AkX0_cZQ6PI-unsplash.jpg"
                },
                {
                    id: 7,
                    key: "text15",
                    folderName: "text",
                    imageName: "z-s-3-VLBL1DKxk-unsplash.jpg"
                },
            ]
        },
        {
            id: 6,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            pictures: [
                {
                    id: 1,
                    key: "col12",
                    folderName: "colorful",
                    imageName: "freestocks-A11MXTzUhLE-unsplash.jpg"
                },
                {
                    id: 2,
                    key: "col13",
                    folderName: "colorful",
                    imageName: "emma-matthews-digital-content-production-X6M1Ke1o9yI-unsplash.jpg"
                },
                {
                    id: 3,
                    key: "col14",
                    folderName: "colorful",
                    imageName: "emma-matthews-digital-content-production-vKM1ZdtoBL4-unsplash.jpg"
                },
                {
                    id: 4,
                    key: "col15",
                    folderName: "colorful",
                    imageName: "stil-flRm0z3MEoA-unsplash.jpg"
                },
                {
                    id: 5,
                    key: "col16",
                    folderName: "colorful",
                    imageName: "uby-yanes-393QQ30ecvQ-unsplash.jpg"
                },
                {
                    id: 6,
                    key: "col17",
                    folderName: "colorful",
                    imageName: "uby-yanes-LMwW0ARHc4o-unsplash.jpg"
                }
            ]
        },
        {
            id: 7,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            pictures: [
                {
                    id: 1,
                    key: "col18",
                    folderName: "colorful",
                    imageName: "daily-nouri-E5Oo4nENq2M-unsplash.jpg"
                },
                {
                    id: 2,
                    key: "col19",
                    folderName: "colorful",
                    imageName: "charles-deluvio-dtSjxKDIPnA-unsplash.jpg"
                },
                {
                    id: 3,
                    key: "col20",
                    folderName: "colorful",
                    imageName: "angele-kamp-KaeaUITiWnc-unsplash.jpg"
                },
                {
                    id: 4,
                    key: "col21",
                    folderName: "colorful",
                    imageName: "jess-bailey-YFn6rpnyeRY-unsplash.jpg"
                },
                {
                    id: 5,
                    key: "col22",
                    folderName: "colorful",
                    imageName: "jozsef-hocza-pJYd5CI_TRM-unsplash.jpg"
                },
                {
                    id: 6,
                    key: "col23",
                    folderName: "colorful",
                    imageName: "laika-notebooks-pONH9yZ-wXg-unsplash.jpg"
                },
                {
                    id: 7,
                    key: "col24",
                    folderName: "colorful",
                    imageName: "lauren-fleischmann-R2aodqJn3b8-unsplash.jpg"
                }
            ]
        },
        {
            id: 8,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            pictures: [
                {
                    id: 1,
                    key: "col25",
                    folderName: "colorful",
                    imageName: "leone-venter-pVt9j3iWtPM-unsplash.jpg"
                },
                {
                    id: 2,
                    key: "col26",
                    folderName: "colorful",
                    imageName: "kara-eads--0eTYFd2pzM-unsplash.jpg"
                },
                {
                    id: 3,
                    key: "col27",
                    folderName: "colorful",
                    imageName: "kara-eads-Uq9o9uUIT08-unsplash.jpg"
                },
                {
                    id: 4,
                    key: "col28",
                    folderName: "colorful",
                    imageName: "chris-lee-70l1tDAI6rM-unsplash.jpg"
                },
                {
                    id: 5,
                    key: "col29",
                    folderName: "colorful",
                    imageName: "olena-sergienko-dIMJWLx1YbE-unsplash.jpg"
                },
                {
                    id: 6,
                    key: "col30",
                    folderName: "colorful",
                    imageName: "sarah-dorweiler-9Z1KRIfpBTM-unsplash.jpg"
                },
            ]
        },
        {
            id: 9,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            pictures: [
                {
                    id: 1,
                    key: "col31",
                    folderName: "colorful",
                    imageName: "paper-3025558_1920.jpg"
                },
                {
                    id: 2,
                    key: "col32",
                    folderName: "colorful",
                    imageName: "jess-bailey-PWxsExxrf5g-unsplash.jpg"
                },
                {
                    id: 3,
                    key: "col33",
                    folderName: "colorful",
                    imageName: "jess-bailey-MSH3ldaRZsg-unsplash.jpg"
                },
                {
                    id: 4,
                    key: "col34",
                    folderName: "colorful",
                    imageName: "desktop-3820634_1920.jpg"
                },
                {
                    id: 5,
                    key: "col35",
                    folderName: "colorful",
                    imageName: "jess-bailey-OhWKm1YoMgE-unsplash.jpg"
                },
            ]
        },
        {
            id: 10,
            key: "",
            option: "blackAndWhite",
            header: null,
            text: null,
            pictures: [
                {
                    id: 1,
                    key: "bw7",
                    folderName: "blackAndWhite",
                    imageName: "meghan-schiereck--2eJaLtf_bI-unsplash.jpg"
                },
                {
                    id: 2,
                    key: "bw8",
                    folderName: "blackAndWhite",
                    imageName: "marci-angeles-H_pOAqtNVEg-unsplash.jpg"
                },
                {
                    id: 3,
                    key: "bw9",
                    folderName: "blackAndWhite",
                    imageName: "marci-angeles-sDmLk4Mf0hQ-unsplash.jpg"
                },
                {
                    id: 4,
                    key: "bw10",
                    folderName: "blackAndWhite",
                    imageName: "glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg"
                },
            ]
        },
        {
            id: 11,
            key: "",
            option: "blackAndWhite",
            header: null,
            text: null,
            pictures: [
                {
                    id: 1,
                    key: "bw11",
                    folderName: "blackAndWhite",
                    imageName: "hope-house-press-leather-diary-studio-PJzc7LOt2Ig-unsplash.jpg"
                },
                {
                    id: 2,
                    key: "bw12",
                    folderName: "blackAndWhite",
                    imageName: "jess-bailey-ycTvvg1mPU4-unsplash.jpg"
                },
                {
                    id: 3,
                    key: "bw13",
                    folderName: "blackAndWhite",
                    imageName: "nahuel-hawkes-Ki6JO9sraB8-unsplash.jpg"
                },
                {
                    id: 4,
                    key: "bw14",
                    folderName: "blackAndWhite",
                    imageName: "stil-8-GAoVpIk4M-unsplash.jpg"
                },
            ]
        },
        {
            id: 12,
            key: "",
            option: "text",
            header: "Music",
            text: "Cera is leading healthcare startup.",
            pictures: [
                {
                    id: 1,
                    key: "text16",
                    folderName: "text",
                    imageName: "iltun-huseynli-TQyah6wdlzg-unsplash.jpg"
                },
                {
                    id: 2,
                    key: "text17",
                    folderName: "text",
                    imageName: "iltun-huseynli-Vyy_ddIxuEk-unsplash.jpg"
                },
                {
                    id: 3,
                    key: "text18",
                    folderName: "text",
                    imageName: "iltun-huseynli-WIsk0e2VFgE-unsplash.jpg"
                },
                {
                    id: 4,
                    key: "text19",
                    folderName: "text",
                    imageName: "jason-ortego-buF62ewDLcQ-unsplash.jpg"
                },
                {
                    id: 5,
                    key: "text20",
                    folderName: "text",
                    imageName: "justin-chrn-OCmOLiKrK-Y-unsplash.jpg"
                },
                {
                    id: 6,
                    key: "text21",
                    folderName: "text",
                    imageName: "murad-mornel-HjNqvIE91Js-unsplash.jpg"
                },
                {
                    id: 7,
                    key: "text22",
                    folderName: "text",
                    imageName: "peter-jan-rijpkema-wI6o8OwUwdw-unsplash.jpg"
                },
            ]
        },
        {
            id: 13,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            pictures: [
                {
                    id: 1,
                    key: "col36",
                    folderName: "colorful",
                    imageName: "jess-bailey-_969XXSgWc0-unsplash.jpg"
                },
                {
                    id: 2,
                    key: "col37",
                    folderName: "colorful",
                    imageName: "gabrielle-henderson-xTLqJqtq8R4-unsplash.jpg"
                },
                {
                    id: 3,
                    key: "col38",
                    folderName: "colorful",
                    imageName: "eyeshadow-4713577_1920.jpg"
                },
                {
                    id: 4,
                    key: "col39",
                    folderName: "colorful",
                    imageName: "laura-chouette-HTowfw8ascU-unsplash.jpg"
                },
                {
                    id: 5,
                    key: "col40",
                    folderName: "colorful",
                    imageName: "life-3602514_1920.jpg"
                },
                {
                    id: 6,
                    key: "col41",
                    folderName: "colorful",
                    imageName: "samantha-gades-pKt9mfEuZrs-unsplash.jpg"
                },
                
            ]
        },
        {
            id: 14,
            key: "",
            option: "text",
            header: "Music",
            text: "She needed only a pen to draw a masterpiece.",
            pictures: [
                {
                    id: 1,
                    key: "text23",
                    folderName: "text",
                    imageName: "annie-spratt-sggw4-qDD54-unsplash.jpg"
                },
                {
                    id: 2,
                    key: "text24",
                    folderName: "text",
                    imageName: "christin-hume-mfB1B1s4sMc-unsplash.jpg"
                },
                {
                    id: 3,
                    key: "text25",
                    folderName: "text",
                    imageName: "dylan-gillis-KdeqA3aTnBY-unsplash.jpg"
                },
                {
                    id: 4,
                    key: "text26",
                    folderName: "text",
                    imageName: "perry-grone-lbLgFFlADrY-unsplash.jpg"
                },
                {
                    id: 5,
                    key: "text27",
                    folderName: "text",
                    imageName: "scott-graham-5fNmWej4tAA-unsplash.jpg"
                },
            ]
        },
        {
            id: 15,
            key: "",
            option: "colorful",
            header: null,
            text: null,
            pictures: [
                {
                    id: 1,
                    key: "col42",
                    folderName: "colorful",
                    imageName: "jess-bailey-L71uKsAVo4g-unsplash.jpg"
                },
                {
                    id: 2,
                    key: "col43",
                    folderName: "colorful",
                    imageName: "jess-bailey-6izKUqAC9xw-unsplash.jpg"
                },
                {
                    id: 3,
                    key: "col44",
                    folderName: "colorful",
                    imageName: "eleni-koureas-jUcuu5f5js0-unsplash.jpg"
                },
                {
                    id: 4,
                    key: "col45",
                    folderName: "colorful",
                    imageName: "jess-bailey-dWKqZcPLc8Y-unsplash.jpg"
                },
                {
                    id: 5,
                    key: "col46",
                    folderName: "colorful",
                    imageName: "jess-bailey-z0guTIr_kts-unsplash.jpg"
                },
                {
                    id: 6,
                    key: "col47",
                    folderName: "colorful",
                    imageName: "jess-bailey-ZY2GNpgiWyU-unsplash.jpg"
                }
            ]
        },
        {
            id: 16,
            key: "",
            option: "blackAndWhite",
            header: null,
            text: null,
            pictures: [
                {
                    id: 1,
                    key: "bw15",
                    folderName: "blackAndWhite",
                    imageName: "ohmky-lQwWZI_WjSU-unsplash.jpg"
                },
                {
                    id: 2,
                    key: "bw16",
                    folderName: "blackAndWhite",
                    imageName: "clay-banks-_wkd7XBRfU4-unsplash.jpg"
                },
                {
                    id: 3,
                    key: "bw17",
                    folderName: "blackAndWhite",
                    imageName: "lindsay-cotter-9J7sHieVFi0-unsplash.jpg"
                },
                {
                    id: 4,
                    key: "bw18",
                    folderName: "blackAndWhite",
                    imageName: "marina-zaharkina-TKQXY1dAgjE-unsplash.jpg"
                },
                {
                    id: 5,
                    key: "bw19",
                    folderName: "blackAndWhite",
                    imageName: "mike-marquez-VnlyIQxQS10-unsplash.jpg"
                },
                {
                    id: 6,
                    key: "bw20",
                    folderName: "blackAndWhite",
                    imageName: "alexandra-gorn-9rmnzkmydSY-unsplash.jpg"
                }
            ]
        }
    ]
    res.json(picBoard);
});

// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.params);
// });

// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.query);
//     // http://localhost:3000/api/posts/2018/4?sortBy=name
// });

//PORT
const port = process.env.PORT || 3005;

app.listen(3005, () => console.log(`Listening on port ${port}...`));
