// export function arrowFunctions() {
//     function withACallBack(options, callback) {
//         callback(options)
//     }

//     withACallBack('so long', function (options) {
//         return options
//     })

//     withACallBack('A Little Shorter', (options) => {
//         return options
//     })

//     withACallBack('very short', options=>options)

// //     const store = {
// //         address: '101 main street',
// //         what: function(){
// //             return this.address
// //         },
// //         arrow: () => {
// //             return this.address
        
// //     }

// //     console.log(store.what());
// //     console.log(store.arrow());

//     function welcome() {
//         this.happy = 'yes'
//         withACallBack('traditional function', function(options){
//             console.log(options)
//             console.log(this.happy)
//         })
//         withACallBack('arrow', (options) => {
//             // let happy = this.happy
//             console.log(options)
//             console.log(this.happy)
//         })
//     }
//     new welcome()
// }