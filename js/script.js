// $(function() {
//   var $impress = $("#impress");
//
//   var slidesWithCounters = [
//     'stats-years',
//     'stats-campuses',
//     'stats-users',
//   ]
//
//   $impress.on('impress:stepenter', function() {
//     var currentSlide = $(".present");
//     console.log(currentSlide);
//     if (slidesWithCounters.indexOf(currentSlide.attr('id')) !== -1) {
//       console.log("hooray!")
//       var options = {
//         useEasing: true,
//         useGrouping: true,
//         separator: ',',
//         decimal: '.',
//       };
//       var demo = new CountUp(
//         currentSlide.find('.stat-counter').attr('id'),
//           0,
//           parseInt(currentSlide.find('.stat-counter').html()),
//           0, 2.5, options
//         );
//       if (!demo.error) {
//         demo.start();
//       } else {
//         console.error(demo.error);
//       }
//     }
//
//   });
// });
