
const screenDevice = ''

// const size = {
//     mobileS: '320px',
//     mobileM: '375px',
//     mobileL: '425px',
//     tablet: '768px',
//     laptop: '1024px',
//     laptopL: '1440px',
//     desktop: '2560px'
// }

if (window.screen.width > 1024) {
    screenDevice = 'desktop'
    console.log(screenDevice)
    return screenDevice
}
    
if (window.screen.width > 425 && window.screen.width <= 1024) {
    screenDevice = 'tableLaptop'
    console.log(screenDevice)
    return screenDevice
}
    
if (
    window.screen.width <= 425 ||
    window.screen.width <= 375 ||
    window.screen.width <= 320
) {
    screenDevice = 'mobile'
    console.log(screenDevice)
    return screenDevice
}

// export { screenDevice }

