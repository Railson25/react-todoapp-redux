const webpack = require('webpack') 
const ExtractTextPlugin = require('extract-text-webpack-plugin')
//Declarando as dependencias


// exportando objeto que tera todas as config dio projeto
module.exports = {
    entry: './src/index.jsx', // Ponto de entrada xom extensao pra facilitar a IDE reconhecer
    output: {
        path: __dirname + '/public', //Ponto de saida
        filename: './app.js'//nome do arquivo
    },
    devServer: {
        port: 8080,
        contentBase: './public', //Pasta que iremos jogar o arquivo app.js
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],//Resolvendo tipos de extensoes
        alias: {
            modules: __dirname + '/node_modules'//criando apelido para facilitar a referencia
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css')// Gerar a partir do pasrse feito no css
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/, //JavaScript para fazer parse em .js e .jsx 
            loader: 'babel-loader',
            exclude: /node_modules/, //ignorar parse dos arquivos da pasta
            query: {
                presets: ['es2015', 'react'], 
                plugin: ['transform-object-rest-spread']
            }    
        }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                loader: 'file'
        }]
    }
}