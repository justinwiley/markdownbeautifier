import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import html from 'remark-html';

export default class App {
  beautify(markdown) {
    if (typeof markdown === 'string') {
      return new Promise((resolve, reject) => {
        remark()
          .use(recommended)
          .data('settings', {
            commonmark: true,
            emphasis: '*',
            strong: '*',
            footnotes: true
          })
          .process(markdown, (err, processed) => {
            resolve({
              error: err,
              markdown: String(processed)
            });
          });
      })
    }

    return Promise.resolve();
  }
}
