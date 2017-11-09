import gulp from 'gulp';
import webpack from 'webpack';
import rimraf from 'rimraf';

import webpackDevConfig from './webpack.dev.config';
import webpackProdConfig from './webpack.prod.config';

gulp.task('clean', (cb) => {
  rimraf('build', cb);
});

gulp.task('copy-files', ['clean'], () => {
  return gulp.src([
    './src/icons/**/*',
    './src/manifest.json'
  ], { base: 'src' })
    .pipe(gulp.dest('./build'));
});

gulp.task('bundle-js', ['clean', 'copy-files'], (cb) => {
  const args = process.argv.slice(2);
  const scriptIndex = args.findIndex(index => index === 'start' || index === 'build');
  const script = scriptIndex === -1 ? args[0] : args[scriptIndex];

  switch (script) {
    case 'watch':
      return webpack(webpackDevConfig, (err, stats) => {
        if (err) {
          throw new plugins.util.PluginError('webpack', err);
        }
        console.log(stats.toString({ colors: true }));
        cb();
      });
    case 'build':
      return webpack(webpackProdConfig, (err, stats) => {
        if (err) {
          throw new plugins.util.PluginError('webpack', err);
        }
        console.log(tats.toString({ colors: true }));
        cb();
      });
    default:
      console.log('Unknown script "' + script + '".');
      break;
  }
});

gulp.task('default', ['clean', 'copy-files', 'bundle-js']);
gulp.task('build', ['clean', 'copy-files', 'bundle-js']);

gulp.task('watch', ['default'], () => {
  gulp.watch(['src/**/*'], ['default']);
});
