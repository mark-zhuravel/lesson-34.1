const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/js/main.js', // Главный файл входа
	output: {
		filename: '[name].[contenthash].js', // Имя итогового файла
		path: path.resolve(__dirname, 'dist'), // Путь к папке выходных файлов
		clean: true, // Очищает папку output перед каждым билдом
	},
	module: {
		rules: [
			{
				test: /\.js$/, // Применяет правило к JavaScript файлам
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.scss$/, // Применяет правило к SCSS файлам
				use: [
					'style-loader', // Загружает CSS в DOM
					'css-loader', // Обрабатывает CSS файлы
					{
						loader: 'sass-loader', // Обрабатывает SCSS файлы
						options: {
							implementation: require('sass'), // Указывает на версию Sass
						},
					},
				],
			},
			{
				test: /\.(woff2?)$/, // Регулярное выражение для поиска .woff, .woff2 файлов
				type: 'asset/resource', // Использует asset/resource для сохранения шрифтов как ресурсы
				generator: {
					filename: 'assets/fonts/[name].[contenthash][ext]', // Хеширует имена файлов и сохраняет в assets/fonts
				},
			},
			{
				test: /\.(jpe?g|png|gif|webp)$/, // Регулярное выражение для поиска изображений
				type: 'asset/resource', // Использует asset/resource для сохранения изображений как ресурсы
				generator: {
					filename: 'assets/images/[name].[contenthash][ext]', // Хеширует имена файлов и сохраняет в assets/images
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html', // Исходный HTML файл
			filename: 'index.html',
		}),
	],
	mode: 'development', // Режим разработки
	devServer: {
		static: path.resolve(__dirname, 'dist'), // Путь к директории с результатами сборки
		compress: true,
		port: 9000,
		hot: true, // Hot module replacement
	},
}
