// const article = (sequelize, DataTypes) => {
//   const Petition = sequelize.define('petition', {
//     title: {
//       type: DataTypes.STRING,
//       validate: {
//         notEmpty: {
//           args: true,
//           msg: 'Please add a title to your article'
//         }
//       }

//     },
//     text: {
//       type: DataTypes.STRING,
//       validate: { 
//         notEmpty: {
//           args: true,
//           msg: 'Please add content to your article'
//         } 
//       },
//     },
//   });

//   Article.associate = models => {
//     Article.belongsTo(models.User);
//   };

//   return Article;
// };

// export default article;