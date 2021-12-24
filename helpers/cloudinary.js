// let cloudinary = require('cloudinary');
// // var CLOUDINARY_UPLOAD_PRESET= 'oaeicvc8';
// // var CLOUDINARY_URL ='';

// // cloudinary.config({ 
// //     cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
// //     api_key: process.env.CLOUDINARY_API_KEY, 
// //     api_secret: process.env.CLOUDINARY_API_SECRET,
// //     api_preset: process.env.CLOUDINARY_UPLOAD_PRESET
// // //   });

// //Add the following line
// // var canvas = document.getElementById("myChart");
// // var ctx = canvas.getContext("2d");

// const base64Image = canvas.toDataURL()
// const formData = new FormData()
// formData.append('file', base64Image)
// formData.append('upload_preset', 'oaeicvc8')

// fetch(`https://api.cloudinary.com/v1_1/dndooifyr/image/upload`, {
//   method: 'POST',
//   body: formData,
// })

// // // module.exports = {
// //     upload: (public_id) => {
// //         return cloudinary.v2.uploader.upload(
// //             "https://avatars.githubusercontent.com/u/32621882?v=4",
// //             { public_id: public_id }, 
// //             function(error, result) {
// //                 console.log(result); 
// //         });
// //     },
    
// //     fetchGallery: () => {
// //         return cloudinary.v2.search
// //             .expression('folder=canvas_project_2')
// //             .execute();
// //     }
// // }
