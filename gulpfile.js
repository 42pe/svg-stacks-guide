const gulp = require('gulp')
const svgSprite = require('gulp-svg-sprite')

// A very thorough documentation of what it can be done with gulp-svg-sprite can be found:
// https://github.com/jkphl/svg-sprite

const processSVGs = () => {
  return gulp
    .src(['./src/svgs/*.svg'])
    .pipe(
      svgSprite({
        mode: {
          stack: {
            render: { scss: true }
          }
        },
        svg: {
          // General options for created SVG files
          xmlDeclaration: false, // Add XML declaration to SVG sprite
          doctypeDeclaration: false
        }
      })
    ) // Activate Sass output (with default options) // Activate the «symbol» mode
    .pipe(gulp.dest('./test'))
}

gulp.task('default', processSVGs)
