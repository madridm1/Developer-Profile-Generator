const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

function generateHTML(data,colorChoice) {
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Profile Generator</title>
      <style>
          @page {
            margin: 0;
          }
         *,
         *::after,
         *::before {
         box-sizing: border-box;
         }
         html, body {
         padding: 0;
         margin: 0;
         }
         html, body, .wrapper {
         height: 100%;
         }
         .wrapper {
         background-color: ${colors[colorChoice].wrapperBackground};
         padding-top: 100px;
         overflow: auto;
         }
         body {
         background-color: white;
         -webkit-print-color-adjust: exact !important;
         font-family: 'Cabin', sans-serif;
         }
         main {
         background-color: #E9EDEE;
         height: auto;
         padding-top: 30px;
         }
         h1, h2, h3, h4, h5, h6 {
         font-family: 'BioRhyme', serif;
         margin: 0;
         }
         h1 {
         font-size: 3em;
         }
         h2 {
         font-size: 2.5em;
         display: block;
         }
         h3 {
         font-size: 2em;
         display: block;
         text-align: center;
         width: 100%;
         line-height: 1em;
         }
         h4 {
         font-size: 1.5em;
         text-align: center;
         }
         h5 {
         font-size: 1.3em;
         }
         h6 {
         font-size: 1.2em;
         }
         .fab,.fas {
          font-size: 25px;
          margin: 10px;
         }
         .photo-header {
         position: relative;
         margin: 0 auto;
         display: flex;
         justify-content: center;
         flex-wrap: wrap;
         background-color: ${colors[colorChoice].headerBackground};
         color: ${colors[colorChoice].headerColor};
         padding: 10px;
         width: 95%;
         border-radius: 6px;
         }
         .photo-header img {
         width: 250px;
         height: 250px;
         border-radius: 50%;
         object-fit: cover;
         margin-top: -75px;
         border: 6px solid ${colors[colorChoice].photoBorderColor};
         box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
         }
         .photo-header h1, .photo-header h2 {
         width: 100%;
         text-align: center;
         }
         .photo-header h1 {
         margin-top: 10px;
         }
         .links-nav {
         width: 100%;
         text-align: center;
         padding: 20px 0;
         font-size: 1.1em;
         }
         .nav-link {
         display: inline-block;
         margin: 5px 10px;
         }
         .workExp-date {
         font-style: italic;
         font-size: .7em;
         text-align: right;
         margin-top: 10px;
         }
         .container {
         padding: 50px;
         padding-left: 100px;
         padding-right: 100px;
         }

         .row {
           display: flex;
           position: relative;
           flex-wrap: wrap;
           justify-content: space-between;
           margin: 50px;
         }

         .card {
           padding: 20px;
           border-radius: 6px;
           background-color: ${colors[colorChoice].headerBackground};
           color: ${colors[colorChoice].headerColor};
           margin: 20px;
           width: calc(50% - 40px);
           box-sizing: border-box;
           text-align: center;
           font-size: 1.5em;
         }
         
         .col {
         flex: 1;
         text-align: center;
         }

         a, a:hover {
         text-decoration: none;
         color: inherit;
         font-weight: bold;
         }

         @media print { 
          body { 
            zoom: .75; 
          } 
         }
      </style>
      </head>
      <body>
      <div class="wrapper">
        <div class="photo-header">
          <img src="${data.avatar_url}">
          <h1>${data.name}</h1>
          <h3>${data.login}</h3>
          <h5>${data.location}</h5>
          <a href="${data.html_url}"><i class="fab fa-github"></i></a>
          <a href="${data.blog}"><i class="fas fa-rss"></i></a>
        </div> 
        <div class="row">
          <h4>${data.bio}</h4>
        </div>
        <div class="row">  
          <div class="card">Public Repos: ${data.public_repos}</div>   
          <div class="card"> Followers: ${data.followers}</div>
          <div class="card"> GitHub Stars: ${data.starred_url}</div>
          <div class="card"> Following: ${data.following}</div> 
        </div>
      </div>        
      </body>`
        }
        module.exports = generateHTML;