const src = '.';
const dest = './dist';

module.exports = {
    path: {
        src: {
            base: src,
            sass: src + '/sass',
            views: src + '/views'
        },
        dest: {
            base: dest,
            css: dest + '/css',
            views: dest + '/views'
        }
    }
};