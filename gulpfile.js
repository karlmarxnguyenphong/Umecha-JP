const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create(); 

// Tạo tác vụ biên dịch Sass
gulp.task('styles', function() {
    return gulp.src('./disk/scss/style.scss')  // 1. Chọn các tập tin Sass nguồn
        .pipe(sass().on('error', sass.logError))  // 2. Biên dịch Sass thành CSS
        .pipe(gulp.dest('./project/src/style'))  // 3. Lưu CSS chưa nén trong quá trình phát triển
        .pipe(browserSync.stream());  // 4. Cập nhật trình duyệt khi có thay đổi
});

// Tác vụ Copy JS
gulp.task('scripts', function() {
    return gulp.src('./disk/js/**/*.js')
        .pipe(gulp.dest('./project/src/js'))  // Lưu JS chưa nén trong quá trình phát triển
        .pipe(browserSync.stream());    //Cập nhật trình duyệt khi có thay đổi
});

// Tác vụ nén CSS
gulp.task('compress-css', function() {
    return gulp.src('./project/src/style/**/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./project/src/style'));
});

// Tác vụ nén JS
gulp.task('compress-js', function() {
    return gulp.src('./project/src/js/**/*.js')
        .pipe(terser())
        .pipe(gulp.dest('./project/src/js'));
});

// Tạo tác vụ để khởi động browser-sync
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './project'  // Thư mục gốc của server
        },
        port: 3005  // Thay đổi cổng cho từng dự án
    });
    // Theo dõi các tập tin HTML và CSS và thực hiện làm mới trình duyệt khi có thay đổi
    gulp.watch('./disk/scss/**/*.scss', gulp.series('styles'));
    gulp.watch('./disk/js/**/*.js', gulp.series('scripts'));
    gulp.watch('./project/**/*.html').on('change', browserSync.reload);
});

// Tác vụ deploy
gulp.task('deploy', gulp.series('styles', 'scripts', gulp.parallel('compress-css', 'compress-js')));

// Tác vụ mặc định
gulp.task('default', gulp.series('styles', 'serve'));

