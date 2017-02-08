import * as gulp from 'gulp';
import { join } from 'path';

import Config from '../../config';

/**
 * Executes the build task, copying all TypeScript files over to the `dist/tmp` directory.
 */
export = () => {
  // return gulp.src([
  //   join('src/', 'server/*.js')])
  //   .pipe(gulp.dest('dist/'));
  //   //.pipe(gulp.dest(Config.DEV_DEST));

  return gulp.src('*.*')
    .pipe(gulp.dest('./test'));
    //.pipe(gulp.dest(Config.DEV_DEST));
};
