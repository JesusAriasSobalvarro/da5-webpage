// const path = require('path');

// exports.createPages =  ({ boundActionCreators, graphql }) => {
//     const { createPage } = boundActionCreators

//     const galeriaTemplate = path.resolve('src/templates/GaleriaTemplate.js')

//     return graphql(`{
//         allFile(filter: {sourceInstanceName: {eq: "galeria"}}) {
//             distinct(field: relativeDirectory)
//           }
//     }`).then(res => {
//         if (res.errors) {
//             return Promise.reject(res.errors)
//         }

//         res.data.allFile.distinct.forEach(folder => {
//             createPage({
//                 path: folder,
//                 component: galeriaTemplate
//             })
//         });
//     })
// }