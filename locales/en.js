module.exports = function(locale, cb) {
    // Use require.ensure to combine all the related locales into one chunk
    require.ensure(['numbro', 'numbro/dist/languages/en-AU.min', 'numbro/dist/languages/en-GB.min'], (require) => {
        const numbro = require('numbro');
        numbro.registerLanguage(require('numbro/dist/languages/en-AU.min'));
        numbro.registerLanguage(require('numbro/dist/languages/en-GB.min'));
        numbro.setLanguage(locale);

        console.log('locale set');

        cb();
    }, 'locale-en');
};